import React, { useEffect, useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { splitPeople } from '../data/workbookParser';

export default function ResponsibilityEditor({
  document,
  onEditingChange,
  onSave,
  sharedState,
}) {
  const [people, setPeople] = useState(() => splitPeople(document.responsible));
  const [draft, setDraft] = useState('');
  const [localError, setLocalError] = useState('');

  useEffect(() => {
    setPeople(splitPeople(document.responsible));
    setDraft('');
    setLocalError('');
  }, [document]);

  useEffect(() => () => onEditingChange(false), [onEditingChange]);

  const addDraft = () => {
    const additions = splitPeople(draft);
    if (!additions.length) return;
    setPeople((current) => [...new Set([...current, ...additions])]);
    setDraft('');
    setLocalError('');
    onEditingChange(true);
  };

  const save = async () => {
    const peopleToSave = [...new Set([...people, ...splitPeople(draft)])];
    if (!peopleToSave.length) {
      setLocalError('Add at least one responsible person.');
      return;
    }
    try {
      await onSave(peopleToSave);
      setPeople(peopleToSave);
      setDraft('');
      setLocalError('');
      onEditingChange(false);
    } catch (error) {
      setLocalError(
        error.currentResponsible
          ? `${error.message} Current workbook value: ${error.currentResponsible}.`
          : error.message,
      );
    }
  };

  return (
    <section aria-labelledby="responsibility-editor-heading" className="annual-plan-responsibility-editor">
      <div>
        <span className="annual-plan-eyebrow">Shared Excel responsibility</span>
        <h3 id="responsibility-editor-heading">Responsible people</h3>
        <p>Changes are saved to SharePoint and become visible to colleagues after refresh.</p>
      </div>

      <div aria-label="Current responsible people" className="annual-plan-people-list">
        {people.map((person) => (
          <span key={person}>
            {person}
            <button
              aria-label={`Remove ${person}`}
              disabled={sharedState.status === 'saving'}
              onClick={() => {
                setPeople((current) => current.filter((value) => value !== person));
                onEditingChange(true);
              }}
              type="button"
            >
              <XMarkIcon aria-hidden="true" />
            </button>
          </span>
        ))}
      </div>

      <div className="annual-plan-person-input">
        <label>
          <span>Add one or more people</span>
          <input
            disabled={sharedState.status === 'saving'}
            onChange={(event) => {
              setDraft(event.target.value);
              onEditingChange(true);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                addDraft();
              }
            }}
            placeholder="Name, Name"
            value={draft}
          />
        </label>
        <button disabled={!draft.trim() || sharedState.status === 'saving'} onClick={addDraft} type="button">
          <PlusIcon aria-hidden="true" />
          Add
        </button>
      </div>

      {(localError || sharedState.status === 'conflict') && (
        <p className="annual-plan-save-error" role="alert">
          {localError || sharedState.error}
        </p>
      )}
      <button
        className="annual-plan-save-responsibility"
        disabled={!people.length || sharedState.status === 'saving'}
        onClick={save}
        type="button"
      >
        {sharedState.status === 'saving' ? 'Saving and confirming…' : 'Save to shared workbook'}
      </button>
    </section>
  );
}
