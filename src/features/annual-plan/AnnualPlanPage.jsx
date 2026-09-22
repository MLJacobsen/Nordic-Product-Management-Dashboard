import React, { useState } from 'react';

import { AnnualPlanContent } from './components/AnnualPlanView';
import {
  documentOverviewMetadata,
  publishedDocuments,
} from './data/publishedDocuments';
import { useSharedWorkbook } from './data/useSharedWorkbook';

export default function AnnualPlanPage() {
  const [editingActive, setEditingActive] = useState(false);
  const sharedWorkbook = useSharedWorkbook(publishedDocuments, editingActive);

  return (
    <AnnualPlanContent
      documents={sharedWorkbook.documents}
      onEditActivityChange={setEditingActive}
      sharedWorkbook={sharedWorkbook}
      sourceName={documentOverviewMetadata.source}
      sourceUrl={documentOverviewMetadata.sourceUrl}
    />
  );
}
