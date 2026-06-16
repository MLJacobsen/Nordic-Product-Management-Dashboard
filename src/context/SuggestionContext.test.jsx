import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { vi } from 'vitest';
import { SuggestionProvider, useSuggestionContext } from './SuggestionContext';

// localStorage mock for Node.js 26 compatibility
const createLocalStorageMock = () => {
  let store = {};
  return {
    getItem: (key) => store[key] ?? null,
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; },
    _store: () => store,
  };
};

let localStorageMock;

beforeEach(() => {
  localStorageMock = createLocalStorageMock();
  vi.stubGlobal('localStorage', localStorageMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

// Helper component to expose context values
function TestConsumer() {
  const { suggestions, addSuggestion, upvoteSuggestion } = useSuggestionContext();
  return (
    <div>
      <span data-testid="count">{suggestions.length}</span>
      {suggestions.map((s) => (
        <div key={s.id}>
          <span data-testid={`text-${s.id}`}>{s.text}</span>
          <span data-testid={`votes-${s.id}`}>{s.votes}</span>
          <button
            data-testid={`upvote-${s.id}`}
            onClick={() => upvoteSuggestion(s.id)}
          >
            Upvote
          </button>
        </div>
      ))}
      <button
        data-testid="add-btn"
        onClick={() => addSuggestion('New suggestion')}
      >
        Add
      </button>
    </div>
  );
}

describe('SuggestionContext', () => {
  test('initialises with empty suggestions when localStorage is empty', () => {
    render(
      <SuggestionProvider>
        <TestConsumer />
      </SuggestionProvider>
    );
    expect(screen.getByTestId('count').textContent).toBe('0');
  });

  test('adds a suggestion', () => {
    render(
      <SuggestionProvider>
        <TestConsumer />
      </SuggestionProvider>
    );

    act(() => {
      screen.getByTestId('add-btn').click();
    });

    expect(screen.getByTestId('count').textContent).toBe('1');
  });

  test('ignores empty/whitespace submissions', () => {
    function BlankAdder() {
      const { suggestions, addSuggestion } = useSuggestionContext();
      return (
        <div>
          <span data-testid="count">{suggestions.length}</span>
          <button data-testid="add-blank" onClick={() => addSuggestion('   ')}>
            Add blank
          </button>
        </div>
      );
    }

    render(
      <SuggestionProvider>
        <BlankAdder />
      </SuggestionProvider>
    );

    act(() => {
      screen.getByTestId('add-blank').click();
    });

    expect(screen.getByTestId('count').textContent).toBe('0');
  });

  test('upvotes a suggestion', () => {
    render(
      <SuggestionProvider>
        <TestConsumer />
      </SuggestionProvider>
    );

    act(() => {
      screen.getByTestId('add-btn').click();
    });

    const suggestions = screen
      .getAllByTestId(/^votes-/)
      .map((el) => el.parentElement);
    const voteEl = screen.getAllByTestId(/^votes-/)[0];
    const id = voteEl.getAttribute('data-testid').replace('votes-', '');

    expect(screen.getByTestId(`votes-${id}`).textContent).toBe('0');

    act(() => {
      screen.getByTestId(`upvote-${id}`).click();
    });

    expect(screen.getByTestId(`votes-${id}`).textContent).toBe('1');
  });

  test('persists to localStorage on change', () => {
    render(
      <SuggestionProvider>
        <TestConsumer />
      </SuggestionProvider>
    );

    act(() => {
      screen.getByTestId('add-btn').click();
    });

    const stored = JSON.parse(localStorageMock.getItem('suggestion-board'));
    expect(stored).toHaveLength(1);
    expect(stored[0].text).toBe('New suggestion');
  });

  test('loads existing suggestions from localStorage on mount', () => {
    const existing = [
      { id: 'suggestion-1', text: 'Loaded item', votes: 3, createdAt: Date.now() },
    ];
    localStorageMock.setItem('suggestion-board', JSON.stringify(existing));

    render(
      <SuggestionProvider>
        <TestConsumer />
      </SuggestionProvider>
    );

    expect(screen.getByTestId('count').textContent).toBe('1');
    expect(screen.getByTestId('text-suggestion-1').textContent).toBe('Loaded item');
    expect(screen.getByTestId('votes-suggestion-1').textContent).toBe('3');
  });
});
