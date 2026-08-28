import React, { useMemo, useState } from 'react';
import {
  ArrowPathIcon,
  ArrowRightStartOnRectangleIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import { useAnnualPlan } from '../context/AnnualPlanContext';
import {
  DOCUMENT_CATEGORIES,
  splitDomiciles,
  splitPeople,
} from '../data/workbookParser';
import AnnualWheel from './AnnualWheel';
import DocumentDetailsDialog from './DocumentDetailsDialog';
import '../annualPlan.css';

function StateCard({ icon: Icon, title, children, action }) {
  return (
    <section className="annual-plan-state" role="status">
      <span className="annual-plan-state-icon"><Icon aria-hidden="true" /></span>
      <h2>{title}</h2>
      <div>{children}</div>
      {action}
    </section>
  );
}

function matchesSearch(document, search) {
  if (!search) return true;
  const haystack = Object.entries(document)
    .filter(([, value]) => typeof value === 'string')
    .map(([, value]) => value)
    .join(' ')
    .toLowerCase();
  return haystack.includes(search.toLowerCase());
}

export function AnnualPlanContent({
  documents,
  lastUpdated,
  onRefresh,
  onSignOut,
  sampleMode = false,
  accountName = '',
}) {
  const [search, setSearch] = useState('');
  const [domicile, setDomicile] = useState('all');
  const [owner, setOwner] = useState('all');
  const [legal, setLegal] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDocument, setSelectedDocument] = useState(null);

  const domiciles = useMemo(() => (
    [...new Set(documents.flatMap((document) => splitDomiciles(document.domicile)))].sort()
  ), [documents]);
  const owners = useMemo(() => (
    [...new Set(documents.flatMap((document) => splitPeople(document.responsible)))].sort()
  ), [documents]);

  const filteredDocuments = useMemo(() => documents.filter((document) => (
    matchesSearch(document, search)
    && (domicile === 'all' || splitDomiciles(document.domicile).includes(domicile))
    && (owner === 'all' || splitPeople(document.responsible).includes(owner))
    && (legal === 'all' || document.legalRequirement.toLowerCase() === legal)
  )), [documents, domicile, legal, owner, search]);

  const unscheduled = filteredDocuments.filter(
    (document) => document.schedule.kind === 'unscheduled',
  );
  const recurring = filteredDocuments.filter(
    (document) => document.schedule.kind === 'monthly',
  );
  const legalCount = filteredDocuments.filter(
    (document) => document.legalRequirement.toLowerCase() === 'yes',
  ).length;

  const clearFilters = () => {
    setSearch('');
    setDomicile('all');
    setOwner('all');
    setLegal('all');
  };

  return (
    <div className="annual-plan-content">
      {sampleMode && (
        <div className="annual-plan-sample-banner" role="status">
          Development sample mode — this data is not loaded from SharePoint.
        </div>
      )}

      <header className="annual-plan-hero">
        <div>
          <span className="annual-plan-eyebrow">Nordic Product Management</span>
          <h1>Annual plan</h1>
          <p>
            Explore recurring reports, regulatory documents, and ownership across the year.
          </p>
        </div>
        <div className="annual-plan-session-actions">
          <span>
            {accountName || (sampleMode ? 'Local sample' : 'Microsoft connected')}
            {lastUpdated && <small>Updated {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>}
          </span>
          {onRefresh && (
            <button aria-label="Refresh workbook data" className="annual-plan-icon-button" onClick={onRefresh} type="button">
              <ArrowPathIcon aria-hidden="true" />
            </button>
          )}
          {onSignOut && (
            <button aria-label="Sign out" className="annual-plan-icon-button" onClick={onSignOut} type="button">
              <ArrowRightStartOnRectangleIcon aria-hidden="true" />
            </button>
          )}
        </div>
      </header>

      <section aria-label="Annual plan summary" className="annual-plan-summary">
        <article><strong data-testid="matching-count">{filteredDocuments.length}</strong><span>Matching records</span></article>
        <article><strong data-testid="legal-count">{legalCount}</strong><span>Legal requirements</span></article>
        <article><strong data-testid="monthly-count">{recurring.length}</strong><span>Monthly records</span></article>
        <article><strong data-testid="unscheduled-count">{unscheduled.length}</strong><span>Ad hoc / unscheduled</span></article>
      </section>

      <section aria-label="Filter annual plan" className="annual-plan-filters">
        <label className="annual-plan-search">
          <span className="sr-only">Search document text</span>
          <MagnifyingGlassIcon aria-hidden="true" />
          <input
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search documents, descriptions, sources…"
            type="search"
            value={search}
          />
        </label>
        <label>
          <span>Domicile</span>
          <select aria-label="Filter by domicile" onChange={(event) => setDomicile(event.target.value)} value={domicile}>
            <option value="all">All domiciles</option>
            {domiciles.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
        <label>
          <span>Responsible</span>
          <select aria-label="Filter by responsible person" onChange={(event) => setOwner(event.target.value)} value={owner}>
            <option value="all">All owners</option>
            {owners.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
        <label>
          <span>Legal requirement</span>
          <select aria-label="Filter by legal requirement" onChange={(event) => setLegal(event.target.value)} value={legal}>
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        {(search || domicile !== 'all' || owner !== 'all' || legal !== 'all') && (
          <button className="annual-plan-clear-button" onClick={clearFilters} type="button">Clear filters</button>
        )}
      </section>

      <section aria-label="Document category legend" className="annual-plan-legend">
        {Object.entries(DOCUMENT_CATEGORIES).map(([key, category]) => (
          <span key={key}><i style={{ backgroundColor: category.color }} />{category.label}</span>
        ))}
      </section>
      {recurring.length > 0 && (
        <p className="annual-plan-recurrence-note">
          Monthly records are repeated in every month of the wheel.
        </p>
      )}

      <AnnualWheel
        documents={filteredDocuments}
        onSelectDocument={setSelectedDocument}
        onSelectMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
      />

      <section aria-labelledby="unscheduled-heading" className="annual-plan-unscheduled">
        <div className="annual-plan-panel-heading">
          <div>
            <span className="annual-plan-eyebrow">Flexible timing</span>
            <h2 id="unscheduled-heading">Ad hoc & unscheduled</h2>
          </div>
          <span className="annual-plan-count-badge">{unscheduled.length}</span>
        </div>
        {unscheduled.length ? (
          <div className="annual-plan-unscheduled-grid">
            {unscheduled.map((document) => {
              const category = DOCUMENT_CATEGORIES[document.category] || DOCUMENT_CATEGORIES.other;
              return (
                <button
                  key={document.id}
                  onClick={() => setSelectedDocument(document)}
                  style={{ '--item-color': category.color }}
                  type="button"
                >
                  <span>{document.document}</span>
                  <small>{document.domicile || 'No domicile'} · {document.frequency || 'Timing not specified'}</small>
                </button>
              );
            })}
          </div>
        ) : (
          <p className="annual-plan-empty-panel">No matching ad hoc or unscheduled records.</p>
        )}
      </section>

      {!filteredDocuments.length && (
        <div className="annual-plan-no-results" role="status">
          <h2>No records match these filters</h2>
          <button onClick={clearFilters} type="button">Clear filters</button>
        </div>
      )}

      <DocumentDetailsDialog
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
      />
    </div>
  );
}

export default function AnnualPlanView() {
  const {
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
  } = useAnnualPlan();

  if (status === 'configuration-error') {
    const environmentNames = {
      tenantId: 'VITE_ENTRA_TENANT_ID',
      clientId: 'VITE_ENTRA_CLIENT_ID',
      hostname: 'VITE_GRAPH_SHAREPOINT_HOSTNAME',
      sitePath: 'VITE_GRAPH_SITE_PATH',
      filePath: 'VITE_GRAPH_FILE_PATH',
    };
    return (
      <StateCard icon={ExclamationTriangleIcon} title="Annual plan configuration required">
        <p>
          Add the missing Vite environment values: {config.missing.map((key) => environmentNames[key]).join(', ')}.
          See <code>.env.example</code> and the README for setup.
        </p>
      </StateCard>
    );
  }

  if (status === 'initializing' || status === 'loading') {
    return (
      <StateCard icon={ArrowPathIcon} title="Loading annual plan">
        <p>{status === 'initializing' ? 'Preparing Microsoft sign-in…' : 'Reading the latest workbook from SharePoint…'}</p>
      </StateCard>
    );
  }

  if (status === 'signed-out') {
    return (
      <StateCard
        action={<button className="annual-plan-primary-button" onClick={connect} type="button">Sign in with Microsoft</button>}
        icon={CalendarDaysIcon}
        title="Connect to the annual plan"
      >
        <p>Sign in with your Storebrand account to read the live SharePoint workbook.</p>
      </StateCard>
    );
  }

  if (status === 'error') {
    return (
      <StateCard
        action={<button className="annual-plan-primary-button" onClick={account ? refresh : connect} type="button">Reconnect</button>}
        icon={ExclamationTriangleIcon}
        title="The annual plan could not be loaded"
      >
        <p>{error}</p>
        <p>No sample or cached workbook data has been substituted.</p>
      </StateCard>
    );
  }

  return (
    <AnnualPlanContent
      accountName={account?.name || account?.username}
      documents={documents}
      lastUpdated={lastUpdated}
      onRefresh={sampleMode ? null : refresh}
      onSignOut={sampleMode ? null : disconnect}
      sampleMode={sampleMode}
    />
  );
}
