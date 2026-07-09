import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DashboardPanel from '../DashboardPanel';

vi.mock('../../services/fundService', () => ({
  fetchFunds: vi.fn(() => Promise.resolve([{ id: 'f1', name: 'Test Fund', nav: 100.0, currency: 'NOK', kiid: true, category: 'Equity' }])),
  fetchKiidStatus: vi.fn(() => Promise.resolve({ total: 1, withKiid: 1, missingKiid: 0, allCompliant: true, fundsMissingKiid: [] })),
}));

vi.mock('../../services/newsService', () => ({
  fetchWsjNews: vi.fn(() => Promise.resolve([{ title: 'Test News', link: '#', pubDate: '2026-05-26' }])),
}));

describe('DashboardPanel', () => {
  it('renders the dashboard panel with all sections', async () => {
    render(<DashboardPanel />);
    await waitFor(() => {
      expect(screen.getByTestId('dashboard-panel')).toBeInTheDocument();
    });
    expect(screen.getByText('Nordic PM Dashboard')).toBeInTheDocument();
  });
});
