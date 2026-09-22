import React from 'react';
import {
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

function formatSyncTime(value) {
  if (!value) return '';
  return new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(value);
}

export default function SharedWorkbookStatus({
  account,
  config,
  onRefresh,
  onSignIn,
  onSignOut,
  state,
}) {
  if (!config.enabled) {
    return (
      <section aria-label="Shared responsibility editing" className="annual-plan-shared-status unconfigured">
        <LockClosedIcon aria-hidden="true" />
        <div>
          <strong>Public overview · responsibility editing is not configured</strong>
          <p>
            The published workbook snapshot is available to everyone. An administrator must configure
            Microsoft Entra and Graph before shared responsibility changes can be saved.
          </p>
        </div>
      </section>
    );
  }

  const busy = ['initializing', 'loading', 'saving', 'signingIn'].includes(state.status);
  if (!account) {
    return (
      <section aria-label="Shared responsibility editing" className="annual-plan-shared-status">
        <LockClosedIcon aria-hidden="true" />
        <div>
          <strong>Sign in to edit shared responsibilities</strong>
          <p>The annual plan remains public and read-only until you sign in with an authorized Storebrand account.</p>
        </div>
        <button disabled={busy} onClick={onSignIn} type="button">
          {state.status === 'signingIn' ? 'Signing in…' : 'Sign in'}
        </button>
      </section>
    );
  }

  return (
    <section aria-label="Shared responsibility editing" className="annual-plan-shared-status connected">
      {state.error
        ? <ExclamationTriangleIcon aria-hidden="true" />
        : <CheckCircleIcon aria-hidden="true" />}
      <div aria-live="polite">
        <strong>{account.name || account.username}</strong>
        <p>
          {state.error || state.message || (
            state.lastSyncedAt
              ? `Responsibilities synced from Excel at ${formatSyncTime(state.lastSyncedAt)}.`
              : 'Loading current responsibilities from Excel…'
          )}
        </p>
      </div>
      <div className="annual-plan-shared-actions">
        <button disabled={busy} onClick={() => onRefresh()} type="button">
          <ArrowPathIcon aria-hidden="true" />
          {state.status === 'loading' ? 'Refreshing…' : 'Refresh'}
        </button>
        <button className="secondary" disabled={busy} onClick={onSignOut} type="button">Sign out</button>
      </div>
    </section>
  );
}
