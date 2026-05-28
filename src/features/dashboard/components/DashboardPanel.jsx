import React from 'react';
import { motion } from 'framer-motion';
import FundNavTable from './FundNavTable';
import KiidStatus from './KiidStatus';
import WsjNewsFeed from './WsjNewsFeed';
import VffOverview from './VffOverview';

function DashboardPanel() {
  return (
    <motion.aside
      className="bg-white rounded-2xl shadow-soft p-6 space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      data-testid="dashboard-panel"
    >
      <h2 className="text-xl font-bold text-neutral-800 tracking-tight">
        Nordic PM Dashboard
      </h2>

      <KiidStatus />
      <VffOverview />
      <FundNavTable />
      <WsjNewsFeed />
    </motion.aside>
  );
}

export default DashboardPanel;
