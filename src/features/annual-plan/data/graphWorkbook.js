import {
  InteractionRequiredAuthError,
  PublicClientApplication,
} from '@azure/msal-browser';

import { parseWorkbookRange } from './workbookParser';

const GRAPH_ROOT = 'https://graph.microsoft.com/v1.0';
let msalInstance;

function env(name) {
  return String(import.meta.env[name] ?? '').trim();
}

function encodeGraphPath(path) {
  const segments = String(path)
    .replace(/\\/g, '/')
    .split('/')
    .filter(Boolean)
    .map(encodeURIComponent);
  return `/${segments.join('/')}`;
}

function getRedirectUri() {
  const configured = env('VITE_ENTRA_REDIRECT_URI');
  if (configured) return configured;
  return new URL(import.meta.env.BASE_URL || '/', window.location.origin).href;
}

export function getAnnualPlanConfig() {
  const config = {
    tenantId: env('VITE_ENTRA_TENANT_ID'),
    clientId: env('VITE_ENTRA_CLIENT_ID'),
    redirectUri: getRedirectUri(),
    hostname: env('VITE_GRAPH_SHAREPOINT_HOSTNAME'),
    sitePath: env('VITE_GRAPH_SITE_PATH'),
    driveId: env('VITE_GRAPH_DRIVE_ID'),
    driveName: env('VITE_GRAPH_DRIVE_NAME'),
    filePath: env('VITE_GRAPH_FILE_PATH'),
    worksheet: env('VITE_GRAPH_WORKSHEET') || 'Sheet1',
    scopes: (env('VITE_GRAPH_SCOPES') || 'Files.ReadWrite')
      .split(/[,\s]+/)
      .filter(Boolean),
  };

  const required = ['tenantId', 'clientId', 'hostname', 'sitePath', 'filePath'];
  const missing = required.filter((key) => !config[key]);
  return { ...config, missing };
}

export function isDevelopmentSampleMode() {
  return import.meta.env.DEV && env('VITE_ANNUAL_PLAN_SAMPLE_MODE').toLowerCase() === 'true';
}

export async function getMsalInstance(config = getAnnualPlanConfig()) {
  if (!msalInstance) {
    msalInstance = new PublicClientApplication({
      auth: {
        clientId: config.clientId,
        authority: `https://login.microsoftonline.com/${config.tenantId}`,
        redirectUri: config.redirectUri,
        postLogoutRedirectUri: config.redirectUri,
      },
      cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
      },
    });
    await msalInstance.initialize();
    await msalInstance.handleRedirectPromise();
  }
  return msalInstance;
}

async function graphRequest(path, accessToken) {
  const response = await fetch(`${GRAPH_ROOT}${path}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    let message = `${response.status} ${response.statusText}`;
    try {
      const body = await response.json();
      message = body?.error?.message || message;
    } catch {
      // The HTTP status remains the actionable error if Graph did not return JSON.
    }
    throw new Error(`Microsoft Graph request failed: ${message}`);
  }

  return response.json();
}

async function resolveDriveId(config, siteId, accessToken) {
  if (config.driveId) return config.driveId;
  if (!config.driveName) {
    const drive = await graphRequest(`/sites/${siteId}/drive?$select=id`, accessToken);
    return drive.id;
  }

  const drives = await graphRequest(
    `/sites/${siteId}/drives?$select=id,name,webUrl`,
    accessToken,
  );
  const expectedName = config.driveName.toLowerCase();
  const drive = drives.value?.find((candidate) => {
    const urlSegment = candidate.webUrl?.split('/').filter(Boolean).at(-1);
    return candidate.name?.toLowerCase() === expectedName
      || decodeURIComponent(urlSegment || '').toLowerCase() === expectedName;
  });

  if (!drive) {
    throw new Error(`SharePoint document library "${config.driveName}" was not found.`);
  }
  return drive.id;
}

export async function fetchWorkbookDocuments(accessToken, config = getAnnualPlanConfig()) {
  const sitePath = encodeGraphPath(config.sitePath);
  const site = await graphRequest(
    `/sites/${encodeURIComponent(config.hostname)}:${sitePath}?$select=id`,
    accessToken,
  );
  const driveId = await resolveDriveId(config, site.id, accessToken);
  const filePath = encodeGraphPath(config.filePath);
  const worksheet = encodeURIComponent(config.worksheet);
  const range = await graphRequest(
    `/drives/${encodeURIComponent(driveId)}/root:${filePath}:/workbook/worksheets/${worksheet}/usedRange(valuesOnly=true)?$select=values`,
    accessToken,
  );

  return parseWorkbookRange(range.values);
}

export async function signIn(config = getAnnualPlanConfig()) {
  const client = await getMsalInstance(config);
  const result = await client.loginPopup({
    scopes: config.scopes,
    prompt: 'select_account',
  });
  return result.account;
}

export async function getAccessToken(account, config = getAnnualPlanConfig(), interactive = false) {
  const client = await getMsalInstance(config);
  try {
    const result = await client.acquireTokenSilent({
      account,
      scopes: config.scopes,
    });
    return result.accessToken;
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      if (interactive) {
        const result = await client.acquireTokenPopup({
          account,
          scopes: config.scopes,
        });
        return result.accessToken;
      }
      throw new Error('Your Microsoft session needs attention. Select reconnect to continue.');
    }
    throw error;
  }
}

export async function signOut(account, config = getAnnualPlanConfig()) {
  const client = await getMsalInstance(config);
  await client.logoutPopup({ account, postLogoutRedirectUri: config.redirectUri });
}
