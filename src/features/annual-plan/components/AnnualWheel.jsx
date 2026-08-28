import React from 'react';

import { DOCUMENT_CATEGORIES, MONTHS } from '../data/workbookParser';

function polarToCartesian(center, radius, angle) {
  const radians = ((angle - 90) * Math.PI) / 180;
  return {
    x: center + radius * Math.cos(radians),
    y: center + radius * Math.sin(radians),
  };
}

function describeArc(startAngle, endAngle) {
  const center = 360;
  const outerRadius = 330;
  const innerRadius = 180;
  const outerStart = polarToCartesian(center, outerRadius, endAngle);
  const outerEnd = polarToCartesian(center, outerRadius, startAngle);
  const innerStart = polarToCartesian(center, innerRadius, startAngle);
  const innerEnd = polarToCartesian(center, innerRadius, endAngle);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 0 0 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${innerRadius} ${innerRadius} 0 0 1 ${innerEnd.x} ${innerEnd.y}`,
    'Z',
  ].join(' ');
}

function DocumentButton({ document, onSelect }) {
  const category = DOCUMENT_CATEGORIES[document.category] || DOCUMENT_CATEGORIES.other;
  const conciseDescription = [
    document.domicile,
    document.responsible ? `Owner: ${document.responsible}` : '',
    document.legalRequirement ? `Legal: ${document.legalRequirement}` : '',
  ].filter(Boolean).join(' · ');

  return (
    <button
      className="annual-plan-document-button"
      onClick={() => onSelect(document)}
      style={{ '--item-color': category.color, '--item-background': category.background }}
      type="button"
    >
      <span className="annual-plan-document-name">{document.document}</span>
      <span className="annual-plan-document-meta">{document.domicile || 'No domicile'}</span>
      <span className="annual-plan-tooltip annual-plan-item-tooltip" role="tooltip">
        {conciseDescription || 'Open document details'}
      </span>
    </button>
  );
}

export default function AnnualWheel({
  documents,
  onSelectDocument,
  selectedMonth,
  onSelectMonth,
}) {
  const documentsByMonth = MONTHS.map((_, monthIndex) => (
    documents.filter((document) => document.schedule.months.includes(monthIndex))
  ));
  const selectedDocuments = documentsByMonth[selectedMonth];

  return (
    <div className="annual-wheel-layout">
      <section aria-label="Annual wheel" className="annual-wheel-shell">
        <div className="annual-wheel">
          <svg
            aria-hidden="true"
            className="annual-wheel-art"
            role="img"
            viewBox="0 0 720 720"
          >
            {MONTHS.map((month, index) => (
              <path
                className={selectedMonth === index ? 'selected' : ''}
                d={describeArc(index * 30, (index + 1) * 30)}
                key={month}
              />
            ))}
            <circle className="annual-wheel-center" cx="360" cy="360" r="166" />
          </svg>

          <div aria-hidden="true" className="annual-wheel-center-copy">
            <span>{documents.length}</span>
            <small>matching records</small>
          </div>

          {MONTHS.map((month, index) => {
            const angle = (index * 30 - 75) * (Math.PI / 180);
            const left = 50 + Math.cos(angle) * 39;
            const top = 50 + Math.sin(angle) * 39;
            const monthDocuments = documentsByMonth[index];
            const categories = [...new Set(monthDocuments.map((document) => document.category))];

            return (
              <button
                aria-pressed={selectedMonth === index}
                className="annual-wheel-month"
                data-testid={`annual-wheel-month-${index}`}
                key={month}
                onClick={() => onSelectMonth(index)}
                style={{ left: `${left}%`, top: `${top}%` }}
                type="button"
              >
                <span className="annual-wheel-month-name">{month.slice(0, 3)}</span>
                <strong>{monthDocuments.length}</strong>
                <span aria-hidden="true" className="annual-wheel-dots">
                  {categories.slice(0, 4).map((categoryKey) => (
                    <i
                      key={categoryKey}
                      style={{ backgroundColor: DOCUMENT_CATEGORIES[categoryKey]?.color }}
                    />
                  ))}
                </span>
                <span className="annual-plan-tooltip" role="tooltip">
                  {month}: {monthDocuments.length} {monthDocuments.length === 1 ? 'record' : 'records'}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section
        aria-labelledby="selected-month-heading"
        className="annual-plan-month-panel"
        data-testid="selected-month-panel"
      >
        <div className="annual-plan-panel-heading">
          <div>
            <span className="annual-plan-eyebrow">Selected month</span>
            <h2 id="selected-month-heading">{MONTHS[selectedMonth]}</h2>
          </div>
          <span className="annual-plan-count-badge">{selectedDocuments.length}</span>
        </div>
        {selectedDocuments.length ? (
          <div className="annual-plan-document-list">
            {selectedDocuments.map((document) => (
              <DocumentButton
                document={document}
                key={`${selectedMonth}-${document.id}`}
                onSelect={onSelectDocument}
              />
            ))}
          </div>
        ) : (
          <p className="annual-plan-empty-panel">No matching records in this month.</p>
        )}
      </section>
    </div>
  );
}
