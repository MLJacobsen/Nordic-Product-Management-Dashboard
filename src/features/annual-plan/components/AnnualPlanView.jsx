import React, { useMemo, useState } from 'react';
import {
  ArrowPathIcon,
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
  ['overview', 'Year overview', Squares2X2Icon],
  ['wheel', 'Annual wheel', ChartPieIcon],
  ['records', 'All records', TableCellsIcon],
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

  const handleViewKeyDown = (event, viewIndex) => {
    let nextIndex = null;
    if (event.key === 'ArrowRight') nextIndex = (viewIndex + 1) % PLAN_VIEWS.length;
    if (event.key === 'ArrowLeft') nextIndex = (viewIndex - 1 + PLAN_VIEWS.length) % PLAN_VIEWS.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = PLAN_VIEWS.length - 1;
    if (nextIndex === null) return;

    event.preventDefault();
    setActiveView(PLAN_VIEWS[nextIndex][0]);
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
          <span>
            Published workbook
            <small>{sourceName}</small>
          </span>
        </div>
      </header>

      <section aria-labelledby="annual-plan-summary-heading" className="annual-plan-summary-section">
        <div className="annual-plan-summary-heading">
          <div>
            <span className="annual-plan-eyebrow">How to read the overview</span>
            <h2 id="annual-plan-summary-heading">One workbook row equals one record</h2>
          </div>
          <div className="annual-plan-summary-help">
            <p>
              Counts reflect the current filters. Monthly rows still count once here, even though they
              repeat from January to December. Select a card to inspect the matching rows.
            </p>
            <button disabled={!hasActiveFilters} onClick={clearFilters} type="button">
              Reset filters
            </button>
          </div>
        </div>
        <div aria-live="polite" className="annual-plan-summary">
          <button
            aria-label={`Open all ${filteredDocuments.length} records currently in view`}
            onClick={showRecords}
            type="button"
          >
            <DocumentTextIcon aria-hidden="true" />
            <span>
              <strong data-testid="matching-count">{filteredDocuments.length}</strong>
              <b>Records in view</b>
              <small>Unique workbook rows included after the current filters.</small>
              <em>Open records</em>
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
              <small>Rows marked “Yes” in the workbook’s Legal requirement field.</small>
              <em>{legal === 'yes' ? 'Filter active' : 'Show these rows'}</em>
            </span>
          </button>
          <button
            aria-label={`${schedule === 'monthly' ? 'Remove' : 'Show'} monthly schedule filter`}
            aria-pressed={schedule === 'monthly'}
            onClick={() => toggleScheduleRecords('monthly')}
            type="button"
          >
            <ArrowPathIcon aria-hidden="true" />
            <span>
              <strong data-testid="monthly-count">{recurring.length}</strong>
              <b>Monthly source rows</b>
              <small>Rows scheduled every month; each one repeats across all 12 months.</small>
              <em>{schedule === 'monthly' ? 'Filter active' : 'Show these rows'}</em>
            </span>
          </button>
          <button
            aria-label={`${schedule === 'unscheduled' ? 'Remove' : 'Show'} no fixed month filter`}
            aria-pressed={schedule === 'unscheduled'}
            onClick={() => toggleScheduleRecords('unscheduled')}
            type="button"
          >
            <CalendarDaysIcon aria-hidden="true" />
            <span>
              <strong data-testid="unscheduled-count">{unscheduled.length}</strong>
              <b>No fixed month</b>
              <small>Ad hoc rows kept visible in the table’s dedicated Ad hoc column.</small>
              <em>{schedule === 'unscheduled' ? 'Filter active' : 'Show these rows'}</em>
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

      <section aria-label="Annual plan views" className="annual-plan-view-tabs" role="tablist">
        {PLAN_VIEWS.map(([view, label, Icon], viewIndex) => (
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
            <Icon aria-hidden="true" />
            {label}
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
                      const itemCategory = DOCUMENT_CATEGORIES[document.category] || DOCUMENT_CATEGORIES.other;
                      return (
                        <button
                          key={document.id}
                          onClick={() => setSelectedDocument(document)}
                          style={{ '--item-color': itemCategory.color }}
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
