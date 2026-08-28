import React from 'react';

import { AnnualPlanContent } from './components/AnnualPlanView';
import {
  documentOverviewMetadata,
  publishedDocuments,
} from './data/publishedDocuments';

export default function AnnualPlanPage() {
  return (
    <AnnualPlanContent
      documents={publishedDocuments}
      sourceName={documentOverviewMetadata.source}
    />
  );
}
