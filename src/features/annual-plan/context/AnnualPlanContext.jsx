import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  fetchWorkbookDocuments,
  getAccessToken,
  getAnnualPlanConfig,
  getMsalInstance,
  isDevelopmentSampleMode,
  signIn,
  signOut,
} from '../data/graphWorkbook';
import { sampleDocuments } from '../data/sampleDocuments';

const AnnualPlanContext = createContext(null);

export function AnnualPlanProvider({ children }) {
  const config = useMemo(() => getAnnualPlanConfig(), []);
  const sampleMode = isDevelopmentSampleMode();
  const [account, setAccount] = useState(null);
  const [documents, setDocuments] = useState(sampleMode ? sampleDocuments : []);
  const [status, setStatus] = useState(
    sampleMode ? 'ready' : config.missing.length ? 'configuration-error' : 'initializing',
  );
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState(sampleMode ? new Date() : null);

  const loadDocuments = useCallback(async (activeAccount, interactive = false) => {
    setStatus('loading');
    setError('');
    try {
      const token = await getAccessToken(activeAccount, config, interactive);
      const loadedDocuments = await fetchWorkbookDocuments(token, config);
      setDocuments(loadedDocuments);
      setLastUpdated(new Date());
      setStatus('ready');
    } catch (loadError) {
      setError(loadError.message || 'The workbook could not be loaded.');
      setStatus('error');
    }
  }, [config]);

  useEffect(() => {
    if (sampleMode || config.missing.length) return undefined;

    let active = true;
    getMsalInstance(config)
      .then((client) => {
        if (!active) return;
        const existingAccount = client.getAllAccounts()[0] || null;
        setAccount(existingAccount);
        if (existingAccount) {
          loadDocuments(existingAccount);
        } else {
          setStatus('signed-out');
        }
      })
      .catch((initializationError) => {
        if (!active) return;
        setError(initializationError.message || 'Microsoft sign-in could not be initialized.');
        setStatus('error');
      });

    return () => {
      active = false;
    };
  }, [config, loadDocuments, sampleMode]);

  const connect = useCallback(async () => {
    setStatus('loading');
    setError('');
    try {
      const signedInAccount = await signIn(config);
      setAccount(signedInAccount);
      await loadDocuments(signedInAccount);
    } catch (signInError) {
      setError(signInError.message || 'Microsoft sign-in was not completed.');
      setStatus('error');
    }
  }, [config, loadDocuments]);

  const disconnect = useCallback(async () => {
    if (!account) return;
    try {
      await signOut(account, config);
      setAccount(null);
      setDocuments([]);
      setStatus('signed-out');
      setError('');
    } catch (signOutError) {
      setError(signOutError.message || 'Microsoft sign-out was not completed.');
      setStatus('error');
    }
  }, [account, config]);

  const refresh = useCallback(() => {
    if (account) loadDocuments(account, true);
  }, [account, loadDocuments]);

  const value = useMemo(() => ({
    account,
    config,
    connect,
    disconnect,
    documents,
    error,
    lastUpdated,
    refresh,
    sampleMode,
    status,
  }), [
    account,
    config,
    connect,
    disconnect,
    documents,
    error,
    lastUpdated,
    refresh,
    sampleMode,
    status,
  ]);

  return (
    <AnnualPlanContext.Provider value={value}>
      {children}
    </AnnualPlanContext.Provider>
  );
}

export function useAnnualPlan() {
  const context = useContext(AnnualPlanContext);
  if (!context) throw new Error('useAnnualPlan must be used within AnnualPlanProvider.');
  return context;
}
