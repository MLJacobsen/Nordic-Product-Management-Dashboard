import {
  documentOverviewMetadata,
  publishedDocuments,
} from './publishedDocuments';

describe('published document overview', () => {
  test('contains the complete supplied workbook snapshot', () => {
    expect(documentOverviewMetadata).toEqual({
      source: 'Document overview.xlsx',
      sourceUrl: 'https://storebrand.sharepoint.com/sites/NordiskProdukt/Felles/2%20Governing%20Documents/Document%20overview.xlsx?d=w770e3d7fec1a4edb9be5ec513b5ce478&csf=1&web=1&e=twSUIg',
      worksheet: 'Sheet1',
    });
    expect(publishedDocuments).toHaveLength(50);
  });

  test('preserves workbook details and normalized schedules', () => {
    const augustReport = publishedDocuments.find(
      (document) => document.document === 'Semi-Annual Report' && document.domicile === 'SE',
    );
    const monthlyFundReport = publishedDocuments.find(
      (document) => document.document === 'Monthly Fund Report' && document.domicile === 'NO',
    );
    const adHocRules = publishedDocuments.find(
      (document) => document.document === 'Fund Rules' && document.domicile === 'SE',
    );

    expect(augustReport).toMatchObject({
      month: 'Augusti',
      schedule: { kind: 'fixed', months: [7] },
    });
    expect(monthlyFundReport.schedule).toMatchObject({
      kind: 'monthly',
      months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    });
    expect(adHocRules).toMatchObject({
      schedule: { kind: 'unscheduled', months: [] },
      responsible: 'Lars',
    });
  });

  test('contains the approved document names and market-specific delivery months', () => {
    const annualReports = publishedDocuments.filter(
      (document) => document.document === 'Annual Report',
    );
    const semiAnnualReports = publishedDocuments.filter(
      (document) => document.document === 'Semi-Annual Report',
    );
    const monthlyFundReports = publishedDocuments.filter(
      (document) => document.document === 'Monthly Fund Report',
    );
    const emtDocuments = publishedDocuments.filter((document) => document.document === 'EMT');
    const ucitKiids = publishedDocuments.filter((document) => document.document === 'UCIT KIID');

    expect(annualReports.find((document) => document.domicile === 'IE')).toMatchObject({
      month: 'January',
      schedule: { kind: 'fixed', months: [0] },
    });
    expect(
      annualReports
        .filter((document) => document.domicile !== 'IE')
        .every((document) => document.month === 'April'),
    ).toBe(true);

    expect(semiAnnualReports.find((document) => document.domicile === 'IE')).toMatchObject({
      month: 'May',
      schedule: { kind: 'fixed', months: [4] },
    });
    expect(
      semiAnnualReports
        .filter((document) => document.domicile !== 'IE')
        .every((document) => document.month === 'Augusti'),
    ).toBe(true);

    expect(monthlyFundReports).toHaveLength(4);
    expect(
      publishedDocuments.some((document) => document.document === 'Monthly Factsheet'),
    ).toBe(false);
    expect(monthlyFundReports.every((document) => document.schedule.kind === 'monthly')).toBe(true);

    expect(emtDocuments).toHaveLength(4);
    expect(
      emtDocuments.every(
        (document) => document.month === 'December' && document.schedule.months[0] === 11,
      ),
    ).toBe(true);

    expect(ucitKiids).toHaveLength(2);
    expect(
      ucitKiids.every(
        (document) => document.month === 'December' && document.schedule.months[0] === 11,
      ),
    ).toBe(true);
  });
});
