import {
  documentOverviewMetadata,
  publishedDocuments,
} from './publishedDocuments';

describe('published document overview', () => {
  test('contains the complete current Overview worksheet snapshot', () => {
    expect(documentOverviewMetadata).toEqual({
      source: 'Document overview.xlsx',
      sourceUrl: 'https://storebrand.sharepoint.com/sites/NordiskProdukt/Felles/2%20Governing%20Documents/Document%20overview.xlsx?d=w770e3d7fec1a4edb9be5ec513b5ce478&csf=1&web=1&e=twSUIg',
      worksheet: 'Overview',
    });
    expect(publishedDocuments).toHaveLength(50);
    expect(publishedDocuments.every((document) => document.description)).toBe(true);
    expect(publishedDocuments.every((document) => document.responsible)).toBe(true);
  });

  test('preserves the current names, owners, and header-driven fields', () => {
    const fundRules = publishedDocuments.find(
      (document) => document.document === 'Fund Rules / Articles of Association'
        && document.domicile === 'SE',
    );
    const informationBrochure = publishedDocuments.find(
      (document) => document.document === 'Information Brochure',
    );

    expect(fundRules).toMatchObject({
      responsible: 'Lars',
      schedule: { kind: 'unscheduled', months: [] },
    });
    expect(informationBrochure).toMatchObject({
      domicile: 'SE',
      producedBy: expect.stringContaining('In design'),
      responsible: 'Anna',
    });
  });

  test('normalizes monthly and quarterly source rows without duplicating records', () => {
    const monthlyReports = publishedDocuments.filter(
      (document) => document.document === 'Monthly Fund Report',
    );
    const quarterlyReport = publishedDocuments.find(
      (document) => document.document === 'Quarterly Fund Report',
    );

    expect(monthlyReports).toHaveLength(4);
    expect(
      monthlyReports.every(
        (document) => document.schedule.kind === 'monthly'
          && document.schedule.months.length === 12,
      ),
    ).toBe(true);
    expect(quarterlyReport).toMatchObject({
      domicile: 'IE',
      responsible: 'Marit',
      schedule: { kind: 'quarterly', months: [2, 5, 8, 11] },
    });
    expect(publishedDocuments).toHaveLength(50);
  });
});
