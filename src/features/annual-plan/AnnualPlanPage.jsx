import React from 'react';

import AnnualPlanView from './components/AnnualPlanView';
import { AnnualPlanProvider } from './context/AnnualPlanContext';

export default function AnnualPlanPage() {
  return (
    <AnnualPlanProvider>
      <AnnualPlanView />
    </AnnualPlanProvider>
  );
}
