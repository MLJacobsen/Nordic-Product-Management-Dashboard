import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  InteractionRequiredAuthError,
  PublicClientApplication,
} from '@azure/msal-browser';

import {
  createGraphWorkbookClient,
  readSharedWorkbookConfig,
} from './graphWorkbook';

export function useSharedWorkbook(snapshotDocuments, editingActive) {
  const config = useMemo(() => readSharedWorkbookConfig(), []);
  const [documents, setDocuments] = useState(snapshotDocuments);
  const [account, setAccount] = useState(null);
  const [state, setState] = useState({
    error: '',
    lastSyncedAt: null,
    message: '',
    status: config.enabled ? 'initializing' : 'unconfigured',
  });
  const msalRef = useRef(null);
  const clientRef = useRef(null);
  const refreshInFlightRef = useRef(false);

  const setFailure = useCallback((error) => {
    const conflictDetail = error.currentResponsible
      ? ` Current workbook value: ${error.currentResponsible}.`
      : '';
    setState((current) => ({
      ...current,
      error: `${error.message || 'The shared workbook request failed.'}${conflictDetail}`,
      message: '',
      status: error.code === 'WORKBOOK_CONFLICT' ? 'conflict' : 'error',
    }));
  }, []);

  const acquireAccessToken = useCallback(async () => {
    const msal = msalRef.current;
    const activeAccount = msal?.getActiveAccount() || msal?.getAllAccounts()[0];
    if (!msal || !activeAccount) throw new Error('Sign in before accessing the shared workbook.');

    const request = { account: activeAccount, scopes: config.scopes };
    try {
      return (await msal.acquireTokenSilent(request)).accessToken;
    } catch (error) {
      if (!(error instanceof InteractionRequiredAuthError)) throw error;
      return (await msal.acquireTokenPopup(request)).accessToken;
    }
  }, [config.scopes]);

  const ensureClient = useCallback(() => {
    if (!clientRef.current) {
      clientRef.current = createGraphWorkbookClient({
        config,
        getAccessToken: acquireAccessToken,
      });
    }
    return clientRef.current;
  }, [acquireAccessToken, config]);

  const refresh = useCallback(async ({ background = false } = {}) => {
    if (!account || refreshInFlightRef.current || (background && editingActive)) return null;
    refreshInFlightRef.current = true;
    if (!background) {
      setState((current) => ({
        ...current,
        error: '',
        message: '',
        status: 'loading',
      }));
    }
    try {
      const result = await ensureClient().loadDocuments();
      setDocuments(result.documents);
      setState({
        error: '',
        lastSyncedAt: new Date(),
        message: background ? '' : 'Shared responsibilities refreshed from Excel.',
        status: 'ready',
      });
      return result.documents;
    } catch (error) {
      setFailure(error);
      return null;
    } finally {
      refreshInFlightRef.current = false;
    }
  }, [account, editingActive, ensureClient, setFailure]);

  useEffect(() => {
    if (!config.enabled) return undefined;
    let active = true;

    const initialize = async () => {
      try {
        const msal = new PublicClientApplication({
          auth: {
            authority: `https://login.microsoftonline.com/${config.tenantId}`,
            clientId: config.clientId,
            navigateToLoginRequestUrl: false,
            redirectUri: config.redirectUri,
          },
          cache: { cacheLocation: 'sessionStorage' },
        });
        await msal.initialize();
        if (!active) return;
        msalRef.current = msal;
        const cachedAccount = msal.getAllAccounts()[0] || null;
        if (cachedAccount) msal.setActiveAccount(cachedAccount);
        setAccount(cachedAccount);
        setState((current) => ({
          ...current,
          status: cachedAccount ? 'loading' : 'signedOut',
        }));
      } catch (error) {
        if (active) setFailure(error);
      }
    };

    initialize();
    return () => {
      active = false;
    };
  }, [config, setFailure]);

  useEffect(() => {
    if (account && state.status === 'loading' && !state.lastSyncedAt) refresh();
  }, [account, refresh, state.lastSyncedAt, state.status]);

  useEffect(() => {
    if (!account || editingActive || config.revalidateMs < 10_000) return undefined;
    const intervalId = window.setInterval(() => refresh({ background: true }), config.revalidateMs);
    return () => window.clearInterval(intervalId);
  }, [account, config.revalidateMs, editingActive, refresh]);

  const signIn = useCallback(async () => {
    if (!msalRef.current) return;
    setState((current) => ({ ...current, error: '', status: 'signingIn' }));
    try {
      const response = await msalRef.current.loginPopup({ scopes: config.scopes });
      msalRef.current.setActiveAccount(response.account);
      setAccount(response.account);
      setState((current) => ({ ...current, status: 'loading' }));
    } catch (error) {
      setFailure(error);
    }
  }, [config.scopes, setFailure]);

  const signOut = useCallback(async () => {
    const currentAccount = msalRef.current?.getActiveAccount() || account;
    if (!msalRef.current || !currentAccount) return;
    try {
      await msalRef.current.logoutPopup({
        account: currentAccount,
        postLogoutRedirectUri: config.redirectUri,
      });
      clientRef.current = null;
      setAccount(null);
      setDocuments(snapshotDocuments);
      setState({
        error: '',
        lastSyncedAt: null,
        message: '',
        status: 'signedOut',
      });
    } catch (error) {
      setFailure(error);
    }
  }, [account, config.redirectUri, setFailure, snapshotDocuments]);

  const updateResponsible = useCallback(async (document, people) => {
    setState((current) => ({
      ...current,
      error: '',
      message: '',
      status: 'saving',
    }));
    try {
      const result = await ensureClient().updateResponsible({
        document,
        expectedResponsible: document.responsible,
        people,
      });
      setDocuments(result.documents);
      setState({
        error: '',
        lastSyncedAt: new Date(),
        message: 'Responsibility saved to the shared Excel workbook and revalidated.',
        status: 'ready',
      });
      return result.document;
    } catch (error) {
      setFailure(error);
      throw error;
    }
  }, [ensureClient, setFailure]);

  return {
    account,
    canEdit: Boolean(config.enabled && account),
    config,
    documents,
    refresh,
    signIn,
    signOut,
    state,
    updateResponsible,
  };
}
