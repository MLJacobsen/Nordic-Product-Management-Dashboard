import {
  getDocumentIdentity,
  getWorkbookSchema,
  parseWorkbookRange,
  serializePeople,
  splitPeople,
} from './workbookParser';

const GRAPH_ROOT = 'https://graph.microsoft.com/v1.0';

export class WorkbookConflictError extends Error {
  constructor(message, currentResponsible = '') {
    super(message);
    this.name = 'WorkbookConflictError';
    this.code = 'WORKBOOK_CONFLICT';
    this.currentResponsible = currentResponsible;
  }
}

function encodePath(path) {
  return String(path || '')
    .replace(/^\/+/, '')
    .split('/')
    .map(encodeURIComponent)
    .join('/');
}

function columnName(columnIndex) {
  let value = columnIndex + 1;
  let name = '';
  while (value > 0) {
    const remainder = (value - 1) % 26;
    name = String.fromCharCode(65 + remainder) + name;
    value = Math.floor((value - 1) / 26);
  }
  return name;
}

export function parseRangeOrigin(address = 'A1') {
  const cell = String(address).split('!').at(-1)?.split(':')[0]?.replace(/\$/g, '') || 'A1';
  const match = /^([A-Z]+)(\d+)$/i.exec(cell);
  if (!match) return { startColumn: 0, startRow: 1 };

  const startColumn = [...match[1].toUpperCase()].reduce(
    (total, character) => total * 26 + character.charCodeAt(0) - 64,
    0,
  ) - 1;
  return { startColumn, startRow: Number(match[2]) };
}

export function readSharedWorkbookConfig(
  environment = import.meta.env,
  location = window.location,
) {
  const redirectUri = environment.VITE_ENTRA_REDIRECT_URI
    || new URL(environment.BASE_URL || '/', location.origin).href;
  const config = {
    clientId: environment.VITE_ENTRA_CLIENT_ID || '',
    tenantId: environment.VITE_ENTRA_TENANT_ID || '',
    redirectUri,
    siteId: environment.VITE_GRAPH_SITE_ID || '',
    hostname: environment.VITE_GRAPH_SHAREPOINT_HOSTNAME || '',
    sitePath: environment.VITE_GRAPH_SITE_PATH || '',
    filePath: environment.VITE_GRAPH_FILE_PATH || '',
    worksheet: environment.VITE_GRAPH_WORKSHEET || 'Overview',
    revalidateMs: Number(environment.VITE_GRAPH_REVALIDATE_MS) || 60_000,
  };
  const missing = [
    ['VITE_ENTRA_CLIENT_ID', config.clientId],
    ['VITE_ENTRA_TENANT_ID', config.tenantId],
    ['VITE_GRAPH_FILE_PATH', config.filePath],
    ['VITE_GRAPH_SITE_ID or VITE_GRAPH_SHAREPOINT_HOSTNAME', config.siteId || config.hostname],
    ['VITE_GRAPH_SITE_ID or VITE_GRAPH_SITE_PATH', config.siteId || config.sitePath],
  ].filter(([, value]) => !value).map(([name]) => name);

  return {
    ...config,
    enabled: missing.length === 0,
    missing,
    scopes: config.siteId
      ? ['Files.ReadWrite.All']
      : ['Files.ReadWrite.All', 'Sites.Read.All'],
  };
}

function normalizeResponsible(value) {
  return serializePeople(splitPeople(value));
}

async function graphRequest(fetchImpl, getAccessToken, path, options = {}) {
  const accessToken = await getAccessToken();
  const response = await fetchImpl(`${GRAPH_ROOT}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    let detail = '';
    try {
      const payload = await response.json();
      detail = payload.error?.message || payload.message || '';
    } catch {
      detail = await response.text();
    }
    const error = new Error(detail || `Microsoft Graph request failed (${response.status}).`);
    error.status = response.status;
    throw error;
  }

  if (response.status === 204) return null;
  return response.json();
}

export function createGraphWorkbookClient({
  config,
  fetchImpl = fetch,
  getAccessToken,
}) {
  let resolvedSiteId = config.siteId;

  const getSiteId = async () => {
    if (resolvedSiteId) return resolvedSiteId;
    const site = await graphRequest(
      fetchImpl,
      getAccessToken,
      `/sites/${encodeURIComponent(config.hostname)}:${config.sitePath}`,
    );
    resolvedSiteId = site.id;
    return resolvedSiteId;
  };

  const workbookPath = async () => {
    const siteId = await getSiteId();
    return `/sites/${encodeURIComponent(siteId)}/drive/root:/${encodePath(config.filePath)}:/workbook`;
  };

  const readRange = async (sessionId = '') => {
    const root = await workbookPath();
    return graphRequest(
      fetchImpl,
      getAccessToken,
      `${root}/worksheets/${encodeURIComponent(config.worksheet)}/usedRange(valuesOnly=true)`,
      {
        headers: sessionId ? { 'workbook-session-id': sessionId } : {},
      },
    );
  };

  const loadDocuments = async (sessionId = '') => {
    const range = await readRange(sessionId);
    const origin = parseRangeOrigin(range.address);
    return {
      documents: parseWorkbookRange(range.values, { startRow: origin.startRow }),
      origin,
      range,
    };
  };

  const createSession = async () => {
    const root = await workbookPath();
    const response = await graphRequest(
      fetchImpl,
      getAccessToken,
      `${root}/createSession`,
      {
        body: JSON.stringify({ persistChanges: true }),
        method: 'POST',
      },
    );
    return response.id;
  };

  const closeSession = async (sessionId) => {
    const root = await workbookPath();
    await graphRequest(fetchImpl, getAccessToken, `${root}/closeSession`, {
      headers: { 'workbook-session-id': sessionId },
      method: 'POST',
    });
  };

  return {
    async loadDocuments() {
      return loadDocuments();
    },

    async updateResponsible({ document, expectedResponsible, people }) {
      const serialized = serializePeople(people);
      if (!serialized) throw new Error('Add at least one responsible person before saving.');

      const sessionId = await createSession();
      let operationError = null;
      try {
        const current = await loadDocuments(sessionId);
        const expectedIdentity = document.sourceIdentity || getDocumentIdentity(document);
        const rowAtExpectedPosition = current.documents.find(
          (candidate) => candidate.rowNumber === document.rowNumber,
        );
        let liveDocument = rowAtExpectedPosition?.sourceIdentity === expectedIdentity
          ? rowAtExpectedPosition
          : null;

        if (!liveDocument) {
          const identityMatches = current.documents.filter(
            (candidate) => candidate.sourceIdentity === expectedIdentity,
          );
          if (identityMatches.length !== 1) {
            throw new WorkbookConflictError(
              'The workbook rows changed and this document can no longer be identified safely. Refresh before editing.',
            );
          }
          [liveDocument] = identityMatches;
        }

        if (
          normalizeResponsible(liveDocument.responsible)
          !== normalizeResponsible(expectedResponsible)
        ) {
          throw new WorkbookConflictError(
            'Responsibility changed in the workbook while you were editing. Refresh and review the current value.',
            liveDocument.responsible,
          );
        }

        const { columnMap } = getWorkbookSchema(current.range.values);
        if (columnMap.responsible < 0) {
          throw new Error('The live workbook does not contain a recognized Responsible column.');
        }
        const columnIndex = current.origin.startColumn + columnMap.responsible;
        const address = `${columnName(columnIndex)}${liveDocument.rowNumber}`;
        const root = await workbookPath();

        await graphRequest(
          fetchImpl,
          getAccessToken,
          `${root}/worksheets/${encodeURIComponent(config.worksheet)}/range(address='${address}')`,
          {
            body: JSON.stringify({ values: [[serialized]] }),
            headers: { 'workbook-session-id': sessionId },
            method: 'PATCH',
          },
        );

        const confirmed = await loadDocuments(sessionId);
        const confirmedDocument = confirmed.documents.find(
          (candidate) => candidate.sourceIdentity === expectedIdentity,
        );
        if (
          !confirmedDocument
          || normalizeResponsible(confirmedDocument.responsible) !== serialized
        ) {
          throw new Error('Microsoft Graph did not confirm the saved responsibility value.');
        }

        return { document: confirmedDocument, documents: confirmed.documents };
      } catch (error) {
        operationError = error;
        throw error;
      } finally {
        try {
          await closeSession(sessionId);
        } catch (closeError) {
          if (!operationError) throw closeError;
          operationError.message = `${operationError.message} The Excel workbook session also failed to close: ${closeError.message}`;
        }
      }
    },
  };
}
