import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SharedWorkbookStatus from './SharedWorkbookStatus';

const handlers = {
  onRefresh: vi.fn(),
  onSignIn: vi.fn(),
  onSignOut: vi.fn(),
};

describe('SharedWorkbookStatus', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('clearly labels the public snapshot as read-only when Graph is not configured', () => {
    render(
      <SharedWorkbookStatus
        {...handlers}
        account={null}
        config={{ enabled: false }}
        state={{ error: '', status: 'unconfigured' }}
      />,
    );

    expect(screen.getByRole('region', { name: 'Shared responsibility editing' })).toHaveTextContent(
      'Public overview · responsibility editing is not configured',
    );
    expect(screen.queryByRole('button', { name: 'Sign in' })).not.toBeInTheDocument();
  });

  test('offers sign-in only when delegated editing is configured', async () => {
    const user = userEvent.setup();
    render(
      <SharedWorkbookStatus
        {...handlers}
        account={null}
        config={{ enabled: true }}
        state={{ error: '', status: 'signedOut' }}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Sign in' }));
    expect(handlers.onSignIn).toHaveBeenCalledOnce();
  });

  test('surfaces workbook errors and retains refresh and sign-out actions', async () => {
    const user = userEvent.setup();
    render(
      <SharedWorkbookStatus
        {...handlers}
        account={{ name: 'Authorized User' }}
        config={{ enabled: true }}
        state={{
          error: 'Responsibility changed in the workbook.',
          lastSyncedAt: new Date(),
          status: 'conflict',
        }}
      />,
    );

    expect(screen.getByText('Responsibility changed in the workbook.')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Refresh' }));
    await user.click(screen.getByRole('button', { name: 'Sign out' }));
    expect(handlers.onRefresh).toHaveBeenCalledOnce();
    expect(handlers.onSignOut).toHaveBeenCalledOnce();
  });
});
