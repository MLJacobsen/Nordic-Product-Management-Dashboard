import React, { useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { DOCUMENT_CATEGORIES, extractSafeLinks } from '../data/workbookParser';

const DETAIL_FIELDS = [
  ['Document / report', 'document'],
  ['Domicile', 'domicile'],
  ['Description', 'description'],
  ['Update frequency', 'frequency'],
  ['Month', 'month'],
  ['Legal requirement', 'legalRequirement'],
  ['Regulation / source', 'regulationSource'],
  ['Language', 'language'],
  ['System support', 'systemSupport'],
  ['Published / distributed', 'publicationDistribution'],
  ['Process description link', 'processLink'],
  ['Responsible within Product', 'responsible'],
];

function FieldValue({ value }) {
  const links = extractSafeLinks(value);
  if (!value) return <span className="annual-plan-empty">Not provided</span>;
  if (!links.length) return <span className="whitespace-pre-line">{value}</span>;

  const parts = String(value).split(/(https?:\/\/[^\s]+)/gi);
  return (
    <span className="whitespace-pre-line">
      {parts.map((part, index) => {
        const safeLink = links.find((link) => link === part || link === `${part}/`);
        return safeLink ? (
          <a
            className="annual-plan-link"
            href={safeLink}
            key={`${safeLink}-${index}`}
            rel="noreferrer"
            target="_blank"
          >
            {part}
          </a>
        ) : (
          <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
        );
      })}
    </span>
  );
}

export default function DocumentDetailsDialog({ document, onClose }) {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!document) return undefined;
    previouslyFocusedRef.current = window.document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll('a[href], button:not(:disabled)');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && window.document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && window.document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [document, onClose]);

  if (!document) return null;
  const category = DOCUMENT_CATEGORIES[document.category] || DOCUMENT_CATEGORIES.other;

  return (
    <div
      className="annual-plan-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="presentation"
    >
      <section
        aria-labelledby="document-details-title"
        aria-modal="true"
        className="annual-plan-modal"
        data-testid="document-details-dialog"
        ref={dialogRef}
        role="dialog"
      >
        <header className="annual-plan-modal-header">
          <div>
            <span
              className="annual-plan-category-pill"
              style={{ backgroundColor: category.background, color: category.color }}
            >
              {category.label}
            </span>
            <h2 id="document-details-title">{document.document}</h2>
            <p>{document.domicile || 'Domicile not provided'}</p>
          </div>
          <button
            aria-label="Close document details"
            className="annual-plan-icon-button"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <XMarkIcon aria-hidden="true" />
          </button>
        </header>

        <dl className="annual-plan-details-grid">
          {DETAIL_FIELDS.map(([label, field]) => (
            <div className={field === 'description' || field === 'regulationSource' ? 'wide' : ''} key={field}>
              <dt>{label}</dt>
              <dd><FieldValue value={document[field]} /></dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
