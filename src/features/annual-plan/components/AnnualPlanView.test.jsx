import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { publishedDocuments } from '../data/publishedDocuments';
import { AnnualPlanContent } from './AnnualPlanView';

describe('AnnualPlanContent', () => {
  test('shows recurring records in every month and keeps unscheduled records discoverable', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    expect(screen.getByRole('button', { name: 'Monthly Factsheet, January: 4 records' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Monthly Factsheet, December: 4 records' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Fund Rules, Ad hoc: 2 records' })).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Annual wheel' }));
    await user.click(screen.getByTestId('annual-wheel-month-0'));
    expect(screen.getAllByRole('button', { name: /Monthly Factsheet/i })).toHaveLength(4);
    expect(screen.getByRole('heading', { name: 'Ad hoc & unscheduled' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /^Fund Rules/i })).toHaveLength(2);
  });

  test('filters by search, domicile, owner, and legal requirement', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    await user.type(screen.getByRole('searchbox', { name: 'Search document text' }), 'sustainability');
    expect(screen.getByTestId('matching-count')).toHaveTextContent('8');

    await user.clear(screen.getByRole('searchbox', { name: 'Search document text' }));
    await user.selectOptions(screen.getByRole('combobox', { name: 'Filter by domicile' }), 'LU');
    await user.selectOptions(screen.getByRole('combobox', { name: 'Filter by responsible person' }), 'Marit');
    await user.selectOptions(screen.getByRole('combobox', { name: 'Filter by legal requirement' }), 'no');

    expect(screen.getByTestId('matching-count')).toHaveTextContent('1');
  });

  test('explains summary metrics and uses them as record filters', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    expect(screen.getByText('One workbook row equals one record')).toBeInTheDocument();
    expect(screen.getByText(/Monthly rows still count once here/i)).toBeInTheDocument();
    expect(screen.getByText(/Rows marked “Yes”/i)).toBeInTheDocument();
    expect(screen.getByText(/each one repeats across all 12 months/i)).toBeInTheDocument();
    expect(screen.getByText(/dedicated Ad hoc column/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset filters' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Show monthly schedule filter' }));
    expect(screen.getByTestId('matching-count')).toHaveTextContent('4');
    expect(screen.getByRole('button', { name: 'Remove monthly schedule filter' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('heading', { name: 'Records explorer' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Reset filters' }));
    expect(screen.getByTestId('matching-count')).toHaveTextContent('50');
    expect(screen.getByRole('button', { name: 'Reset filters' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Show no fixed month filter' }));
    expect(screen.getByTestId('matching-count')).toHaveTextContent('8');

    await user.click(screen.getByRole('button', { name: 'Remove no fixed month filter' }));
    await user.click(screen.getByRole('button', { name: 'Show legal requirement filter' }));
    expect(screen.getByTestId('matching-count')).toHaveTextContent('38');
    expect(screen.getByRole('combobox', { name: 'Filter by legal requirement' })).toHaveValue('yes');
  });

  test('opens full document details with keyboard activation and closes with Escape', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    await user.click(screen.getByRole('tab', { name: 'Annual wheel' }));
    await user.click(screen.getByTestId('annual-wheel-month-3'));
    const documentButton = screen.getAllByRole('button', { name: /Annual Report/i })[0];
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
    render(<AnnualPlanContent documents={publishedDocuments} />);

    await user.type(screen.getByRole('searchbox', { name: 'Search document text' }), 'not-a-document');
    expect(screen.getByRole('heading', { name: 'No records match these filters' })).toBeInTheDocument();

    await user.click(screen.getAllByRole('button', { name: 'Clear filters' })[0]);
    expect(screen.getByTestId('matching-count')).toHaveTextContent(String(publishedDocuments.length));
  });

  test('expands overview rows and opens a focused record group', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    await user.click(screen.getByRole('button', { name: /^Annual Report 4 total records$/i }));
    expect(screen.getByRole('button', { name: /SE April Anna Yes/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Annual Report, April: 4 records' }));
    expect(screen.getByRole('region', { name: 'Annual Report records' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /SE Anna Legal requirement/i }));
    expect(screen.getByRole('dialog', { name: 'Annual Report' })).toBeInTheDocument();
  });

  test('offers a sortable explorer for every filtered workbook row', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    await user.click(screen.getByRole('tab', { name: 'All records' }));
    expect(screen.getByRole('heading', { name: 'Records explorer' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Open details for/i })).toHaveLength(publishedDocuments.length);

    const domicileHeader = screen.getByRole('columnheader', { name: /Domicile/i });
    expect(domicileHeader).toHaveAttribute('aria-sort', 'none');
    await user.click(screen.getByRole('button', { name: 'Domicile' }));
    expect(domicileHeader).toHaveAttribute('aria-sort', 'ascending');
  });
});
