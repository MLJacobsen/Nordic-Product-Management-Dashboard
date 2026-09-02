import React, { useMemo, useState } from 'react';
import {
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
  CalendarDaysIcon,
  ChartPieIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ScaleIcon,
  Squares2X2Icon,
  TableCellsIcon,
} from '@heroicons/react/24/outline';

import {
  DOCUMENT_CATEGORIES,
  splitDomiciles,
  splitPeople,
} from '../data/workbookParser';
import AnnualWheel from './AnnualWheel';
import DocumentDetailsDialog from './DocumentDetailsDialog';
import RecordsExplorer from './RecordsExplorer';
import YearOverview from './YearOverview';
import '../annualPlan.css';

const PLAN_VIEWS = [
  {
    id: 'overview',
    label: 'Year overview',
    description: 'Compare timing across all months',
    icon: Squares2X2Icon,
  },
  {
    id: 'wheel',
    label: 'Annual wheel',
    description: 'Explore one month at a time',
    icon: ChartPieIcon,
  },
  {
    id: 'records',
    label: 'All records',
    description: 'Sort and review every workbook row',
    icon: TableCellsIcon,
  },
];

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
  sourceName = 'Document overview.xlsx',
  sourceUrl,
}) {
  const [search, setSearch] = useState('');
  const [domicile, setDomicile] = useState('all');
  const [owner, setOwner] = useState('all');
  const [legal, setLegal] = useState('all');
  const [category, setCategory] = useState('all');
  const [schedule, setSchedule] = useState('all');
  const [activeView, setActiveView] = useState('overview');
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
    && (category === 'all' || document.category === category)
    && (schedule === 'all' || document.schedule.kind === schedule)
  )), [category, documents, domicile, legal, owner, schedule, search]);

  const unscheduled = filteredDocuments.filter(
    (document) => document.schedule.kind === 'unscheduled',
  );
  const totalUnscheduled = documents.filter(
    (document) => document.schedule.kind === 'unscheduled',
  ).length;
  const recurring = filteredDocuments.filter(
    (document) => document.schedule.kind === 'monthly',
  );
  const legalCount = filteredDocuments.filter(
    (document) => document.legalRequirement.toLowerCase() === 'yes',
  ).length;
  const hasActiveFilters = Boolean(
    search
    || domicile !== 'all'
    || owner !== 'all'
    || legal !== 'all'
    || category !== 'all'
    || schedule !== 'all',
  );

  const clearFilters = () => {
    setSearch('');
    setDomicile('all');
    setOwner('all');
    setLegal('all');
    setCategory('all');
    setSchedule('all');
  };

  const showRecords = () => setActiveView('records');
  const toggleLegalRecords = () => {
    setLegal((current) => (current === 'yes' ? 'all' : 'yes'));
    showRecords();
  };
  const toggleScheduleRecords = (kind) => {
    setSchedule((current) => (current === kind ? 'all' : kind));
    showRecords();
  };
  const showAllAdHocDocuments = () => {
    clearFilters();
    setSchedule('unscheduled');
  };

  const handleViewKeyDown = (event, viewIndex) => {
    let nextIndex = null;
    if (event.key === 'ArrowRight') nextIndex = (viewIndex + 1) % PLAN_VIEWS.length;
    if (event.key === 'ArrowLeft') nextIndex = (viewIndex - 1 + PLAN_VIEWS.length) % PLAN_VIEWS.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = PLAN_VIEWS.length - 1;
    if (nextIndex === null) return;

    event.preventDefault();
    setActiveView(PLAN_VIEWS[nextIndex].id);
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[nextIndex]?.focus();
  };

  return (
    <div className="annual-plan-content">
      <header className="annual-plan-hero">
        <div>
          <span className="annual-plan-eyebrow">Nordic Product Management</span>
          <h1>Annual document plan</h1>
          <p>
            Plan, prioritise, and open every document obligation across markets from one shared overview.
          </p>
        </div>
        <div className="annual-plan-session-actions">
          <a
            aria-label={`Open published workbook: ${sourceName}`}
            href={sourceUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span>
              Published workbook
              <ArrowTopRightOnSquareIcon aria-hidden="true" />
            </span>
            <small>{sourceName}</small>
          </a>
        </div>
      </header>

      <section aria-label="Annual plan summary and guidance" className="annual-plan-summary-section">
        <div className="annual-plan-summary-reset">
          <button disabled={!hasActiveFilters} onClick={clearFilters} type="button">
            Reset filters
          </button>
        </div>
        <ol className="annual-plan-reading-guide">
          <li>
            <span>1</span>
            <div>
              <strong>Choose your scope</strong>
              <p>Search or filter by market, responsible person, legal status, or document category.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <strong>Read the schedule</strong>
              <p>
                A number in a month is the count of documents due then. Striped cells repeat
                monthly; the Ad hoc column contains documents handled when needed.
              </p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <strong>Open the detail</strong>
              <p>
                Select a document name to expand its markets and owners, or select a count to inspect
                the exact documents behind it.
              </p>
            </div>
          </li>
        </ol>
        <div aria-live="polite" className="annual-plan-summary">
          <button
            aria-label={`Open all ${filteredDocuments.length} documents in the overview`}
            onClick={showRecords}
            type="button"
          >
            <DocumentTextIcon aria-hidden="true" />
            <span>
              <strong data-testid="matching-count">{filteredDocuments.length}</strong>
              <b>Documents in overview</b>
              <small>Documents and reports included after the current filters.</small>
              <em>Open documents</em>
            </span>
          </button>
          <button
            aria-label={`${legal === 'yes' ? 'Remove' : 'Show'} legal requirement filter`}
            aria-pressed={legal === 'yes'}
            onClick={toggleLegalRecords}
            type="button"
          >
            <ScaleIcon aria-hidden="true" />
            <span>
              <strong data-testid="legal-count">{legalCount}</strong>
              <b>Legally required</b>
              <small>Documents marked “Yes” in the workbook’s Legal requirement field.</small>
              <em>{legal === 'yes' ? 'Filter active' : 'Show these documents'}</em>
            </span>
          </button>
          <button
            aria-label={`${schedule === 'monthly' ? 'Remove' : 'Show'} recurring monthly documents filter`}
            aria-pressed={schedule === 'monthly'}
            onClick={() => toggleScheduleRecords('monthly')}
            type="button"
          >
            <ArrowPathIcon aria-hidden="true" />
            <span>
              <strong data-testid="monthly-count">{recurring.length}</strong>
              <b>Recurring monthly documents</b>
              <small>Documents scheduled every month and shown across all 12 months.</small>
              <em>{schedule === 'monthly' ? 'Filter active' : 'Show these documents'}</em>
            </span>
          </button>
          <button
            aria-label={`${schedule === 'unscheduled' ? 'Remove' : 'Show'} ad hoc documents filter`}
            aria-pressed={schedule === 'unscheduled'}
            onClick={() => toggleScheduleRecords('unscheduled')}
            type="button"
          >
            <CalendarDaysIcon aria-hidden="true" />
            <span>
              <strong data-testid="unscheduled-count">{unscheduled.length}</strong>
              <b>Ad hoc documents</b>
              <small>Documents handled when needed, shown in the dedicated Ad hoc column.</small>
              <em>{schedule === 'unscheduled' ? 'Filter active' : 'Show these documents'}</em>
            </span>
          </button>
        </div>
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
        {hasActiveFilters && (
          <button className="annual-plan-clear-button" onClick={clearFilters} type="button">Clear filters</button>
        )}
      </section>

      <section aria-label="Filter by document category" className="annual-plan-category-filter">
        <button
          aria-pressed={category === 'all'}
          onClick={() => setCategory('all')}
          type="button"
        >
          All categories <span>{documents.length}</span>
        </button>
        {Object.entries(DOCUMENT_CATEGORIES)
          .filter(([key]) => documents.some((document) => document.category === key))
          .map(([key, categoryDetails]) => (
          <button
            aria-pressed={category === key}
            key={key}
            onClick={() => setCategory(key)}
            type="button"
          >
            <i style={{ backgroundColor: categoryDetails.color }} />
            {categoryDetails.label}
            <span>{documents.filter((document) => document.category === key).length}</span>
          </button>
          ))}
      </section>

      <section aria-labelledby="annual-plan-ad-hoc-heading" className="annual-plan-ad-hoc-spotlight">
        <div className="annual-plan-ad-hoc-header">
          <div>
            <span className="annual-plan-eyebrow">Flexible timing · Visible in every view</span>
            <h2 id="annual-plan-ad-hoc-heading">Ad hoc documents</h2>
            <p>
              These documents have no fixed delivery month. Review them actively and open any item
              below to see its owner, legal basis, distribution details, and process links.
            </p>
          </div>
          <div aria-live="polite" className="annual-plan-ad-hoc-count">
            <strong data-testid="ad-hoc-spotlight-count">{unscheduled.length}</strong>
            <span>{unscheduled.length === 1 ? 'document shown' : 'documents shown'}</span>
            <small>{totalUnscheduled} total in the master overview</small>
          </div>
        </div>

        {unscheduled.length ? (
          <div className="annual-plan-ad-hoc-grid">
            {unscheduled.map((document) => {
              const itemCategory = DOCUMENT_CATEGORIES[document.category] || DOCUMENT_CATEGORIES.other;
              return (
                <button
                  aria-label={`Open details for ${document.document}, ${document.domicile || 'no domicile'}`}
                  key={document.id}
                  onClick={() => setSelectedDocument(document)}
                  style={{ '--item-color': itemCategory.color }}
                  type="button"
                >
                  <i aria-hidden="true" />
                  <span className="annual-plan-ad-hoc-copy">
                    <strong>{document.document}</strong>
                    <small>
                      {document.domicile || 'No domicile'} · {document.responsible || 'Owner not specified'}
                    </small>
                  </span>
                  <span aria-hidden="true" className="annual-plan-ad-hoc-action">
                    Details <ArrowTopRightOnSquareIcon />
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="annual-plan-ad-hoc-empty">
            <p>No ad hoc documents match the current filters.</p>
            <button onClick={showAllAdHocDocuments} type="button">
              Show all {totalUnscheduled} ad hoc documents
            </button>
          </div>
        )}
      </section>

      <section aria-label="Annual plan views" className="annual-plan-view-tabs" role="tablist">
        {PLAN_VIEWS.map(({ id: view, label, description, icon: Icon }, viewIndex) => (
          <button
            aria-controls={`annual-plan-${view}-panel`}
            aria-selected={activeView === view}
            id={`annual-plan-${view}-tab`}
            key={view}
            onClick={() => setActiveView(view)}
            onKeyDown={(event) => handleViewKeyDown(event, viewIndex)}
            role="tab"
            tabIndex={activeView === view ? 0 : -1}
            type="button"
          >
            <span className="annual-plan-view-icon"><Icon aria-hidden="true" /></span>
            <span>
              <strong>{label}</strong>
              <small aria-hidden="true">{description}</small>
            </span>
          </button>
        ))}
      </section>

      {filteredDocuments.length > 0 && (
        <>
          {activeView === 'overview' && (
            <div aria-labelledby="annual-plan-overview-tab" id="annual-plan-overview-panel" role="tabpanel">
              <YearOverview
                documents={filteredDocuments}
                onSelectDocument={setSelectedDocument}
              />
            </div>
          )}

          {activeView === 'wheel' && (
            <div aria-labelledby="annual-plan-wheel-tab" id="annual-plan-wheel-panel" role="tabpanel">
              {recurring.length > 0 && (
                <p className="annual-plan-recurrence-note">
                  Recurring monthly documents are repeated in every month of the wheel.
                </p>
              )}
              <AnnualWheel
                documents={filteredDocuments}
                onSelectDocument={setSelectedDocument}
                onSelectMonth={setSelectedMonth}
                selectedMonth={selectedMonth}
              />

            </div>
          )}

          {activeView === 'records' && (
            <div aria-labelledby="annual-plan-records-tab" id="annual-plan-records-panel" role="tabpanel">
              <RecordsExplorer
                documents={filteredDocuments}
                onSelectDocument={setSelectedDocument}
              />
            </div>
          )}
        </>
      )}

      {!filteredDocuments.length && (
        <div className="annual-plan-no-results" role="status">
          <h2>No documents match these filters</h2>
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
