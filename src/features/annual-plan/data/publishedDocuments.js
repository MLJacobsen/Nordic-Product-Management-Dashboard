import documentOverview from './documentOverview.json';
import { parseWorkbookRange } from './workbookParser';

export const publishedDocuments = parseWorkbookRange(documentOverview.values);
export const documentOverviewMetadata = {
  source: documentOverview.source,
  worksheet: documentOverview.worksheet,
};
