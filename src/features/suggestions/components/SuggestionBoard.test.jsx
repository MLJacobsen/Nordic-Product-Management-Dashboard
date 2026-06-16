import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SuggestionBoard from './SuggestionBoard';

const mockSuggestions = [
  { id: 'suggestion-1', text: 'Dark mode', votes: 5, createdAt: 1000 },
  { id: 'suggestion-2', text: 'Export to CSV', votes: 10, createdAt: 2000 },
  { id: 'suggestion-3', text: 'Mobile app', votes: 5, createdAt: 500 },
];

const mockAddSuggestion = vi.fn();
const mockUpvoteSuggestion = vi.fn();

vi.mock('../../../context/SuggestionContext', () => ({
  useSuggestionContext: () => ({
    suggestions: mockSuggestions,
    addSuggestion: mockAddSuggestion,
    upvoteSuggestion: mockUpvoteSuggestion,
  }),
}));

describe('SuggestionBoard Component', () => {
  beforeEach(() => {
    mockAddSuggestion.mockClear();
    mockUpvoteSuggestion.mockClear();
  });

  test('renders the suggestion board', () => {
    render(<SuggestionBoard />);
    expect(screen.getByTestId('suggestion-board')).toBeInTheDocument();
    expect(screen.getByText('Suggestion Board')).toBeInTheDocument();
  });

  test('renders all suggestion cards', () => {
    render(<SuggestionBoard />);
    mockSuggestions.forEach((s) => {
      expect(screen.getByTestId(`suggestion-card-${s.id}`)).toBeInTheDocument();
      expect(screen.getByText(s.text)).toBeInTheDocument();
    });
  });

  test('sorts suggestions by votes descending, then createdAt ascending', () => {
    render(<SuggestionBoard />);
    const cards = screen.getAllByTestId(/^suggestion-card-/);
    // Highest votes first: suggestion-2 (10), then suggestion-3 (5, createdAt 500) before suggestion-1 (5, createdAt 1000)
    expect(cards[0]).toHaveAttribute('data-testid', 'suggestion-card-suggestion-2');
    expect(cards[1]).toHaveAttribute('data-testid', 'suggestion-card-suggestion-3');
    expect(cards[2]).toHaveAttribute('data-testid', 'suggestion-card-suggestion-1');
  });

  test('shows vote counts', () => {
    render(<SuggestionBoard />);
    expect(screen.getByTestId('vote-count-suggestion-1').textContent).toBe('5');
    expect(screen.getByTestId('vote-count-suggestion-2').textContent).toBe('10');
  });

  test('calls upvoteSuggestion when upvote button clicked', () => {
    render(<SuggestionBoard />);
    fireEvent.click(screen.getByTestId('upvote-suggestion-1'));
    expect(mockUpvoteSuggestion).toHaveBeenCalledWith('suggestion-1');
  });

  test('calls addSuggestion on form submit with non-empty input', () => {
    render(<SuggestionBoard />);
    const input = screen.getByTestId('suggestion-input');
    fireEvent.change(input, { target: { value: 'New idea' } });
    fireEvent.submit(screen.getByTestId('suggestion-form'));
    expect(mockAddSuggestion).toHaveBeenCalledWith('New idea');
  });

  test('clears input after submission', () => {
    render(<SuggestionBoard />);
    const input = screen.getByTestId('suggestion-input');
    fireEvent.change(input, { target: { value: 'Another idea' } });
    fireEvent.submit(screen.getByTestId('suggestion-form'));
    expect(input.value).toBe('');
  });

  test('does not submit empty input', () => {
    render(<SuggestionBoard />);
    fireEvent.submit(screen.getByTestId('suggestion-form'));
    expect(mockAddSuggestion).not.toHaveBeenCalled();
  });

  test('submit button is disabled when input is empty', () => {
    render(<SuggestionBoard />);
    expect(screen.getByTestId('suggestion-submit')).toBeDisabled();
  });

  test('submit button is enabled when input has text', () => {
    render(<SuggestionBoard />);
    const input = screen.getByTestId('suggestion-input');
    fireEvent.change(input, { target: { value: 'Some text' } });
    expect(screen.getByTestId('suggestion-submit')).not.toBeDisabled();
  });
});

describe('SuggestionBoard with no suggestions', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  test('shows empty state message', async () => {
    vi.doMock('../../../context/SuggestionContext', () => ({
      useSuggestionContext: () => ({
        suggestions: [],
        addSuggestion: vi.fn(),
        upvoteSuggestion: vi.fn(),
      }),
    }));

    const { default: Board } = await import('./SuggestionBoard');
    render(<Board />);
    expect(screen.getByTestId('suggestion-empty')).toBeInTheDocument();
  });
});
