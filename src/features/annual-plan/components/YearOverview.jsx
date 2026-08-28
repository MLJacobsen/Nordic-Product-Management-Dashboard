import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { DOCUMENT_CATEGORIES, MONTHS } from '../data/workbookParser';

const SCHEDULE_COLUMNS = [...MONTHS, 'Ad hoc'];

function documentsForColumn(documents, columnIndex) {
  if (columnIndex === 12) {
    return documents.filter((document) => document.schedule.kind === 'unscheduled');
  }
  return documents.filter((document) => document.schedule.months.includes(columnIndex));
}

function scheduleLabel(document) {
  if (document.schedule.kind === 'monthly') return 'Every month';
  if (document.schedule.kind === 'unscheduled') return document.frequency || 'Ad hoc';
  return MONTHS[document.schedule.months[0]] || document.month || 'Unscheduled';
}

export default function YearOverview({ documents, onSelectDocument }) {
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [focusedGroup, setFocusedGroup] = useState(null);

  useEffect(() => {
    setFocusedGroup(null);
  }, [documents]);

  const categoryGroups = useMemo(() => {
    const grouped = new Map();
    documents.forEach((document) => {
      if (!grouped.has(document.category)) grouped.set(document.category, new Map());
      const categoryDocuments = grouped.get(document.category);
      if (!categoryDocuments.has(document.document)) categoryDocuments.set(document.document, []);
      categoryDocuments.get(document.document).push(document);
    });
    return grouped;
  }, [documents]);

  const columnTotals = SCHEDULE_COLUMNS.map((_, columnIndex) => (
    documentsForColumn(documents, columnIndex).length
  ));

  const toggleRow = (rowKey) => {
    setExpandedRows((current) => {
      const next = new Set(current);
      if (next.has(rowKey)) next.delete(rowKey);
      else next.add(rowKey);
      return next;
    });
  };

  return (
    <section aria-labelledby="year-overview-heading" className="annual-overview-card">
      <div className="annual-overview-heading">
        <div>
          <span className="annual-plan-eyebrow">Complete schedule</span>
          <h2 id="year-overview-heading">Year overview</h2>
          <p>
            Expand a document row or select a month count to inspect its records.
            The month header stays visible while you scroll.
          </p>
        </div>
        <div className="annual-overview-key">
          <span><i className="fixed" />Scheduled</span>
          <span><i className="recurring" />Monthly recurrence</span>
        </div>
      </div>

      {focusedGroup && (
        <div className="annual-overview-focus" role="region" aria-label={`${focusedGroup.title} records`}>
          <div>
            <span>{focusedGroup.period}</span>
            <strong>{focusedGroup.title}</strong>
            <small>{focusedGroup.documents.length} {focusedGroup.documents.length === 1 ? 'record' : 'records'}</small>
          </div>
          <div className="annual-overview-focus-items">
            {focusedGroup.documents.map((document) => (
              <button key={document.id} onClick={() => onSelectDocument(document)} type="button">
                <span>{document.domicile || '—'}</span>
                <strong>{document.responsible || 'Owner not assigned'}</strong>
                <small>{document.legalRequirement === 'Yes' ? 'Legal requirement' : 'Non-mandatory'}</small>
              </button>
            ))}
          </div>
          <button
            aria-label="Close selected records"
            className="annual-overview-focus-close"
            onClick={() => setFocusedGroup(null)}
            type="button"
          >
            <XMarkIcon aria-hidden="true" />
          </button>
        </div>
      )}

      <div className="annual-overview-scroll">
        <table className="annual-overview-table">
          <thead>
            <tr>
              <th scope="col">Document / report</th>
              {SCHEDULE_COLUMNS.map((month) => (
                <th key={month} scope="col">{month === 'Ad hoc' ? month : month.slice(0, 3)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...categoryGroups.entries()].map(([categoryKey, documentGroups]) => {
              const category = DOCUMENT_CATEGORIES[categoryKey] || DOCUMENT_CATEGORIES.other;
              return (
                <React.Fragment key={categoryKey}>
                  <tr className="annual-overview-category-row">
                    <th colSpan={14} scope="colgroup">
                      <i style={{ backgroundColor: category.color }} />
                      {category.label}
                      <span>{[...documentGroups.values()].flat().length} records</span>
                    </th>
                  </tr>
                  {[...documentGroups.entries()].map(([documentName, groupedDocuments]) => {
                    const rowKey = `${categoryKey}-${documentName}`;
                    const isExpanded = expandedRows.has(rowKey);
                    const isRecurring = groupedDocuments.some(
                      (document) => document.schedule.kind === 'monthly',
                    );

                    return (
                      <React.Fragment key={rowKey}>
                        <tr className="annual-overview-document-row">
                          <th scope="row">
                            <button
                              aria-expanded={isExpanded}
                              onClick={() => toggleRow(rowKey)}
                              type="button"
                            >
                              {isExpanded
                                ? <ChevronDownIcon aria-hidden="true" />
                                : <ChevronRightIcon aria-hidden="true" />}
                              <span>
                                {documentName}
                                <small>{groupedDocuments.length} total records</small>
                              </span>
                            </button>
                          </th>
                          {SCHEDULE_COLUMNS.map((period, columnIndex) => {
                            const periodDocuments = documentsForColumn(groupedDocuments, columnIndex);
                            const recurring = periodDocuments.some(
                              (document) => document.schedule.kind === 'monthly',
                            );
                            return (
                              <td className={recurring ? 'recurring' : ''} key={period}>
                                {periodDocuments.length > 0 && (
                                  <button
                                    aria-label={`${documentName}, ${period}: ${periodDocuments.length} ${periodDocuments.length === 1 ? 'record' : 'records'}`}
                                    className="annual-overview-count"
                                    data-testid={`overview-cell-${columnIndex}-${documentName}`}
                                    onClick={() => setFocusedGroup({
                                      title: documentName,
                                      period,
                                      documents: periodDocuments,
                                    })}
                                    style={{ '--category-color': category.color }}
                                    type="button"
                                  >
                                    {periodDocuments.length}
                                    {recurring && <span className="sr-only"> recurring monthly</span>}
                                  </button>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                        {isExpanded && (
                          <tr className="annual-overview-expanded-row">
                            <td colSpan={14}>
                              <div>
                                {groupedDocuments.map((document) => (
                                  <button key={document.id} onClick={() => onSelectDocument(document)} type="button">
                                    <span className="annual-overview-domicile">{document.domicile || '—'}</span>
                                    <span>
                                      <strong>{scheduleLabel(document)}</strong>
                                      <small>{document.responsible || 'Owner not assigned'}</small>
                                    </span>
                                    <span className={`annual-overview-legal ${document.legalRequirement.toLowerCase() === 'yes' ? 'yes' : ''}`}>
                                      {document.legalRequirement || '—'}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </td>
                          </tr>
                        )}
                        {isRecurring && (
                          <tr className="sr-only">
                            <td colSpan={14}>{documentName} recurs every month.</td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Records by period</th>
              {columnTotals.map((total, index) => <td key={SCHEDULE_COLUMNS[index]}>{total}</td>)}
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
