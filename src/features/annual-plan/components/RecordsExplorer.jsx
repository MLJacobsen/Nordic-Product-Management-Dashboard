import React, { useMemo, useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';

import { DOCUMENT_CATEGORIES, MONTHS } from '../data/workbookParser';

const COLUMNS = [
  ['document', 'Document / report'],
  ['domicile', 'Domicile'],
  ['schedule', 'Schedule'],
  ['responsible', 'Responsible'],
  ['legalRequirement', 'Legal'],
];

function scheduleLabel(document) {
  if (document.schedule.kind === 'monthly') return 'Every month';
  if (document.schedule.kind === 'unscheduled') return document.frequency || 'Ad hoc';
  return MONTHS[document.schedule.months[0]] || document.month || 'Unscheduled';
}

function sortValue(document, key) {
  if (key === 'schedule') {
    if (document.schedule.kind === 'monthly') return '00';
    if (document.schedule.kind === 'fixed') {
      return String(document.schedule.months[0] + 1).padStart(2, '0');
    }
    return '99';
  }
  return String(document[key] || '').toLowerCase();
}

export default function RecordsExplorer({ documents, onSelectDocument }) {
  const [sort, setSort] = useState({ key: 'document', direction: 'ascending' });

  const sortedDocuments = useMemo(() => [...documents].sort((left, right) => {
    const comparison = sortValue(left, sort.key).localeCompare(sortValue(right, sort.key));
    if (comparison !== 0) return sort.direction === 'ascending' ? comparison : -comparison;
    return left.domicile.localeCompare(right.domicile);
  }), [documents, sort]);

  const updateSort = (key) => {
    setSort((current) => ({
      key,
      direction: current.key === key && current.direction === 'ascending'
        ? 'descending'
        : 'ascending',
    }));
  };

  return (
    <section aria-labelledby="records-explorer-heading" className="annual-records-card">
      <div className="annual-overview-heading">
        <div>
          <span className="annual-plan-eyebrow">All workbook rows</span>
          <h2 id="records-explorer-heading">Records explorer</h2>
          <p>Sort the complete filtered dataset and open any record for full details.</p>
        </div>
        <span className="annual-plan-count-badge">{documents.length}</span>
      </div>

      <div className="annual-records-scroll">
        <table className="annual-records-table">
          <thead>
            <tr>
              {COLUMNS.map(([key, label]) => (
                <th
                  aria-sort={sort.key === key ? sort.direction : 'none'}
                  key={key}
                  scope="col"
                >
                  <button onClick={() => updateSort(key)} type="button">
                    {label}
                    {sort.key === key && (
                      sort.direction === 'ascending'
                        ? <ChevronUpIcon aria-hidden="true" />
                        : <ChevronDownIcon aria-hidden="true" />
                    )}
                  </button>
                </th>
              ))}
              <th scope="col"><span className="sr-only">Open details</span></th>
            </tr>
          </thead>
          <tbody>
            {sortedDocuments.map((document) => {
              const category = DOCUMENT_CATEGORIES[document.category] || DOCUMENT_CATEGORIES.other;
              return (
                <tr key={document.id}>
                  <td>
                    <span className="annual-record-title">
                      <i style={{ backgroundColor: category.color }} />
                      <span>
                        <strong>{document.document}</strong>
                        <small>{category.label}</small>
                      </span>
                    </span>
                  </td>
                  <td><span className="annual-record-chip">{document.domicile || '—'}</span></td>
                  <td>
                    <strong>{scheduleLabel(document)}</strong>
                    <small>{document.frequency}</small>
                  </td>
                  <td>{document.responsible || '—'}</td>
                  <td>
                    <span className={`annual-record-legal ${document.legalRequirement.toLowerCase() === 'yes' ? 'yes' : ''}`}>
                      {document.legalRequirement || '—'}
                    </span>
                  </td>
                  <td>
                    <button
                      aria-label={`Open details for ${document.document}, ${document.domicile || 'no domicile'}`}
                      className="annual-record-open"
                      onClick={() => onSelectDocument(document)}
                      type="button"
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
