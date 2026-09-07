import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

vi.mock('./features/dashboard/components/DashboardPanel', () => ({
  default: () => <div>Dashboard content</div>,
}));
vi.mock('./features/dashboard/components/SuggestionBoard', () => ({
  default: () => <div>Suggestions</div>,
}));
vi.mock('./features/dashboard/components/VacationPlanner', () => ({
  default: () => <div>Vacation planner</div>,
}));
vi.mock('./features/annual-plan/AnnualPlanPage', () => ({
  default: () => <div>Complete Annual Plan</div>,
}));

describe('App navigation', () => {
  beforeEach(() => {
    window.location.hash = '';
  });

  test('shows Annual Plan navigation on the landing dashboard', () => {
    render(<App />);

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Annual plan' })).toBeInTheDocument();
    expect(screen.getByText('Dashboard content')).toBeInTheDocument();
  });

  test('renders the Annual Plan from the hash route and supports navigation back', async () => {
    const user = userEvent.setup();
    window.location.hash = '#annual-plan';
    render(<App />);

    expect(await screen.findByText('Complete Annual Plan')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Annual plan' })).toHaveAttribute(
      'aria-current',
      'page',
    );

    await user.click(screen.getByRole('button', { name: 'Dashboard' }));

    await waitFor(() => expect(window.location.hash).toBe('#dashboard'));
    expect(screen.getByText('Dashboard content')).toBeInTheDocument();
  });
});
