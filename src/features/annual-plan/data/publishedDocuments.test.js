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
    const monthlyFactsheet = publishedDocuments.find(
      (document) => document.document === 'Monthly Factsheet' && document.domicile === 'NO',
    );
    const adHocRules = publishedDocuments.find(
      (document) => document.document === 'Fund Rules' && document.domicile === 'SE',
    );

    expect(augustReport).toMatchObject({
      month: 'Augusti',
      schedule: { kind: 'fixed', months: [7] },
    });
    expect(monthlyFactsheet.schedule).toMatchObject({
      kind: 'monthly',
      months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    });
    expect(adHocRules).toMatchObject({
      schedule: { kind: 'unscheduled', months: [] },
      responsible: 'Lars',
    });
  });
});
