import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { publishedDocuments } from '../data/publishedDocuments';
import { AnnualPlanContent } from './AnnualPlanView';

describe('AnnualPlanContent', () => {
  test('opens the published workbook in a new tab', () => {
    render(
      <AnnualPlanContent
        documents={publishedDocuments}
        sourceUrl="https://example.com/document-overview.xlsx"
      />,
    );

    expect(screen.getByRole('link', { name: 'Open published workbook: Document overview.xlsx' }))
      .toHaveAttribute('href', 'https://example.com/document-overview.xlsx');
    expect(screen.getByRole('link', { name: 'Open published workbook: Document overview.xlsx' }))
      .toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: 'Open published workbook: Document overview.xlsx' }))
      .toHaveAttribute('rel', 'noreferrer');
  });

  test('shows the approved schedules in every derived annual-plan view', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    expect(screen.getByRole('button', { name: 'Annual Report, January: 1 record' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Annual Report, April: 3 records' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Semi-Annual Report, May: 1 record' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Semi-Annual Report, August: 3 records' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'EMT, January: 3 records' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'EMT, October: 1 record' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'UCIT KIID, January: 1 record' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'UCIT KIID, October: 1 record' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Quarterly Fund Report, March: 1 record' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Quarterly Fund Report, December: 1 record' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Monthly Fund Report, January: 4 records' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Monthly Fund Report, December: 4 records' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Fund Rules / Articles of Association, Ad hoc: 2 records' })).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Annual wheel' }));
    await user.click(screen.getByTestId('annual-wheel-month-0'));
    expect(screen.getAllByRole('button', { name: /Monthly Fund Report/i })).toHaveLength(4);
    expect(screen.getByRole('region', { name: 'Ad hoc documents' })).toBeInTheDocument();
  });

  test('keeps ad hoc documents prominent, filter-aware, and directly accessible', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    const adHocRegion = screen.getByRole('region', { name: 'Ad hoc documents' });
    expect(adHocRegion).toBeInTheDocument();
    expect(screen.getByTestId('ad-hoc-spotlight-count')).toHaveTextContent('13');
    expect(screen.getByText('13 total in the master overview')).toBeInTheDocument();

    const fundRulesButton = screen.getByRole('button', { name: 'Open details for Fund Rules / Articles of Association, SE' });
    expect(fundRulesButton).toHaveAccessibleDescription(
      /Legally binding document outlining the fund's management framework/i,
    );
    await user.click(fundRulesButton);
    expect(screen.getByRole('dialog', { name: 'Fund Rules / Articles of Association' })).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(fundRulesButton).toHaveFocus();

    await user.type(screen.getByRole('searchbox', { name: 'Search document text' }), 'not-a-document');
    expect(screen.getByTestId('ad-hoc-spotlight-count')).toHaveTextContent('0');
    await user.click(screen.getByRole('button', { name: 'Show all 13 ad hoc documents' }));
    expect(screen.getByTestId('ad-hoc-spotlight-count')).toHaveTextContent('13');
    expect(screen.getByTestId('matching-count')).toHaveTextContent('13');
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

  test('explains summary metrics and uses them as document filters', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    expect(screen.queryByText('One workbook row equals one record')).not.toBeInTheDocument();
    expect(screen.getByText('Choose your scope')).toBeInTheDocument();
    expect(screen.getByText(/A number in a month is the count/i)).toBeInTheDocument();
    expect(screen.getByText(/Select a document name to expand/i)).toBeInTheDocument();
    expect(screen.getByText('Documents in overview')).toBeInTheDocument();
    expect(screen.getByText('Recurring monthly documents')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ad hoc documents' })).toBeInTheDocument();
    expect(screen.getByText(/Documents marked “Yes”/i)).toBeInTheDocument();
    expect(screen.getByText(/shown across all 12 months/i)).toBeInTheDocument();
    expect(screen.getByText(/dedicated Ad hoc column/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset filters' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Show recurring monthly documents filter' }));
    expect(screen.getByTestId('matching-count')).toHaveTextContent('4');
    expect(screen.getByRole('button', { name: 'Remove recurring monthly documents filter' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('heading', { name: 'Records explorer' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Reset filters' }));
    expect(screen.getByTestId('matching-count')).toHaveTextContent('50');
    expect(screen.getByRole('button', { name: 'Reset filters' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Show ad hoc documents filter' }));
    expect(screen.getByTestId('matching-count')).toHaveTextContent('13');

    await user.click(screen.getByRole('button', { name: 'Remove ad hoc documents filter' }));
    await user.click(screen.getByRole('button', { name: 'Show legal requirement filter' }));
    expect(screen.getByTestId('matching-count')).toHaveTextContent('37');
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

    const dialog = screen.getByRole('dialog', { name: 'Annual Report' });
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText('UCITS Directive Art. 69')).toBeInTheDocument();
    expect(within(dialog).getByText(/Audited annual report presenting the fund's financial statements/i)).toBeInTheDocument();
    expect(within(dialog).getByText(/Auxality produces the report/i)).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(documentButton).toHaveFocus();
  });

  test('clears active filters from the empty state', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    await user.type(screen.getByRole('searchbox', { name: 'Search document text' }), 'not-a-document');
    expect(screen.getByRole('heading', { name: 'No documents match these filters' })).toBeInTheDocument();

    await user.click(screen.getAllByRole('button', { name: 'Clear filters' })[0]);
    expect(screen.getByTestId('matching-count')).toHaveTextContent(String(publishedDocuments.length));
  });

  test('expands overview rows and opens a focused record group', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    await user.click(screen.getByRole('button', { name: /^Annual Report 4 total records/i }));
    expect(screen.getByRole('button', { name: /SE April Anna/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Annual Report, April: 3 records' }));
    const focusedRecords = screen.getByRole('region', { name: 'Annual Report records' });
    expect(focusedRecords).toBeInTheDocument();
    await user.click(within(focusedRecords).getByRole('button', { name: /^SE Anna/i }));
    expect(screen.getByRole('dialog', { name: 'Annual Report' })).toBeInTheDocument();
  });

  test('offers a sortable explorer for every filtered workbook row', async () => {
    const user = userEvent.setup();
    render(<AnnualPlanContent documents={publishedDocuments} />);

    await user.click(screen.getByRole('tab', { name: 'All records' }));
    const recordsExplorer = screen.getByRole('region', { name: 'Records explorer' });
    expect(recordsExplorer).toBeInTheDocument();
    expect(within(recordsExplorer).getAllByRole('button', { name: /Open details for/i })).toHaveLength(
      publishedDocuments.length,
    );

    const domicileHeader = screen.getByRole('columnheader', { name: /Domicile/i });
    expect(domicileHeader).toHaveAttribute('aria-sort', 'none');
    await user.click(screen.getByRole('button', { name: 'Domicile' }));
    expect(domicileHeader).toHaveAttribute('aria-sort', 'ascending');
  });

  test('edits multiple responsible people only through the shared workbook callback', async () => {
    const user = userEvent.setup();
    const updateResponsible = vi.fn(async (document, people) => ({
      ...document,
      responsible: people.join(' / '),
    }));
    render(
      <AnnualPlanContent
        documents={publishedDocuments}
        sharedWorkbook={{
          account: { name: 'Authorized User' },
          canEdit: true,
          config: { enabled: true },
          refresh: vi.fn(),
          signIn: vi.fn(),
          signOut: vi.fn(),
          state: { error: '', lastSyncedAt: new Date(), message: '', status: 'ready' },
          updateResponsible,
        }}
      />,
    );

    await user.click(screen.getByRole('button', { name: /^Annual Report 4 total records/i }));
    await user.click(screen.getByRole('button', { name: /SE April Anna/i }));
    const dialog = screen.getByRole('dialog', { name: 'Annual Report' });

    await user.type(within(dialog).getByRole('textbox', { name: 'Add one or more people' }), 'Nina, Marit');
    await user.click(within(dialog).getByRole('button', { name: 'Save to shared workbook' }));

    expect(updateResponsible).toHaveBeenCalledWith(
      expect.objectContaining({ document: 'Annual Report', domicile: 'SE', responsible: 'Anna' }),
      ['Anna', 'Nina', 'Marit'],
    );
  });
});
