import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import KiidStatus from '../KiidStatus';

vi.mock('../../services/fundService', () => ({
  fetchKiidStatus: vi.fn(() =>
    Promise.resolve({
      total: 5,
      withKiid: 3,
      missingKiid: 2,
      allCompliant: false,
      fundsMissingKiid: [
        { id: 'fund-a', name: 'Fund A' },
        { id: 'fund-b', name: 'Fund B' },
      ],
    })
  ),
}));

describe('KiidStatus', () => {
  it('renders loading state initially', () => {
    render(<KiidStatus />);
    expect(screen.getByTestId('kiid-loading')).toBeInTheDocument();
  });

  it('renders non-compliant state with missing funds', async () => {
    render(<KiidStatus />);
    await waitFor(() => {
      expect(screen.getByTestId('kiid-status')).toBeInTheDocument();
    });
    expect(screen.getByTestId('kiid-ratio')).toHaveTextContent('3/5');
    expect(screen.getByTestId('kiid-non-compliant')).toBeInTheDocument();
    expect(screen.getByText('• Fund A')).toBeInTheDocument();
    expect(screen.getByText('• Fund B')).toBeInTheDocument();
  });
});
