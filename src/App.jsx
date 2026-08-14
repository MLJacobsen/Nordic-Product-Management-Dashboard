import React from 'react';
import { motion } from 'framer-motion';

import DashboardPanel from './features/dashboard/components/DashboardPanel';
import VacationPlanner from './features/dashboard/components/VacationPlanner';
import SuggestionBoard from './features/dashboard/components/SuggestionBoard';

function App() {
  return (
    <div className="App min-h-screen stb-gradient-light flex flex-col items-center py-12 px-4" data-testid="app">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6">
        {/* Nordic PM Dashboard — main content */}
        <div className="flex-1 min-w-0">
          <DashboardPanel />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-72 shrink-0">
          <SuggestionBoard />
          <div className="mt-6">
            <VacationPlanner />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
