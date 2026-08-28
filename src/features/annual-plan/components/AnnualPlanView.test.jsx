import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { sampleDocuments } from '../data/sampleDocuments';
import { AnnualPlanContent } from './AnnualPlanView';

describe('AnnualPlanContent', () => {
  test('shows recurring records in every month and keeps unscheduled records discoverable', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={sampleDocuments} sampleMode />);

    await user.click(screen.getByTestId('annual-wheel-month-0'));
    expect(screen.getByRole('button', { name: /Monthly Factsheet/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ad hoc & unscheduled' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Fund Rules/i })).toBeInTheDocument();
  });

  test('filters by search, domicile, owner, and legal requirement', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={sampleDocuments} />);

    await user.type(screen.getByRole('searchbox', { name: 'Search document text' }), 'sustainability');
    expect(screen.getByTestId('matching-count')).toHaveTextContent('1');

    await user.clear(screen.getByRole('searchbox', { name: 'Search document text' }));
    await user.selectOptions(screen.getByRole('combobox', { name: 'Filter by domicile' }), 'LU');
    await user.selectOptions(screen.getByRole('combobox', { name: 'Filter by responsible person' }), 'Marit');
    await user.selectOptions(screen.getByRole('combobox', { name: 'Filter by legal requirement' }), 'no');

    expect(screen.getByTestId('matching-count')).toHaveTextContent('1');
  });

  test('opens full document details with keyboard activation and closes with Escape', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={sampleDocuments} />);

    await user.click(screen.getByTestId('annual-wheel-month-3'));
    const documentButton = screen.getByRole('button', { name: /Annual Report/i });
    documentButton.focus();
    await user.keyboard('{Enter}');

    expect(screen.getByRole('dialog', { name: 'Annual Report' })).toBeInTheDocument();
    expect(screen.getByText('UCITS Directive Art. 69')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'https://storebrand.fondlista.se/' })).toHaveAttribute(
      'rel',
      'noreferrer',
    );

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(documentButton).toHaveFocus();
  });

  test('clears active filters from the empty state', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={sampleDocuments} />);

    await user.type(screen.getByRole('searchbox', { name: 'Search document text' }), 'not-a-document');
    expect(screen.getByRole('heading', { name: 'No records match these filters' })).toBeInTheDocument();

    await user.click(screen.getAllByRole('button', { name: 'Clear filters' })[0]);
    expect(screen.getByTestId('matching-count')).toHaveTextContent(String(sampleDocuments.length));
  });
});
