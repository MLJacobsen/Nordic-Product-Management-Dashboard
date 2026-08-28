import documentOverview from './documentOverview.json';
import { parseWorkbookRange } from './workbookParser';

export const PUBLISHED_WORKBOOK_URL = 'https://storebrand.sharepoint.com/sites/NordiskProdukt/Felles/2%20Governing%20Documents/Document%20overview.xlsx?d=w770e3d7fec1a4edb9be5ec513b5ce478&csf=1&web=1&e=twSUIg';

export const publishedDocuments = parseWorkbookRange(documentOverview.values);
export const documentOverviewMetadata = {
  source: documentOverview.source,
  sourceUrl: PUBLISHED_WORKBOOK_URL,
  worksheet: documentOverview.worksheet,
};
