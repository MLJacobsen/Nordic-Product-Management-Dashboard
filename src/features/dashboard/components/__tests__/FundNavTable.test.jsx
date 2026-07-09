import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FundNavTable from '../FundNavTable';

vi.mock('../../services/fundService', () => ({
  fetchFunds: vi.fn(() =>
    Promise.resolve([
      { id: 'stb-global', name: 'Storebrand Global Solutions', nav: 2847.32, currency: 'NOK', kiid: true, category: 'Equity' },
      { id: 'stb-norge', name: 'Storebrand Norge', nav: 1523.18, currency: 'NOK', kiid: true, category: 'Equity' },
    ])
  ),
}));

describe('FundNavTable', () => {
  it('renders loading state initially', () => {
    render(<FundNavTable />);
    expect(screen.getByTestId('fund-nav-loading')).toBeInTheDocument();
  });

  it('renders fund data after loading', async () => {
    render(<FundNavTable />);
    await waitFor(() => {
      expect(screen.getByTestId('fund-nav-table')).toBeInTheDocument();
    });
    expect(screen.getByText('Storebrand Global Solutions')).toBeInTheDocument();
    expect(screen.getByText('Storebrand Norge')).toBeInTheDocument();
  });
});
