import React from 'react';
import { motion } from 'framer-motion';
import FundNavTable from './FundNavTable';
import KiidStatus from './KiidStatus';
import WsjNewsFeed from './WsjNewsFeed';
import VffOverview from './VffOverview';

function DashboardPanel() {
  return (
    <motion.aside
      className="space-y-0 overflow-hidden rounded-2xl shadow-card"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      data-testid="dashboard-panel"
    >
      {/* Storebrand-style header with hero image */}
      <div className="stb-gradient relative overflow-hidden">
        <img
          src="https://www.storebrandam.com/globalassets/storebrand-asset-management/pictures/photos/banner-photo/banner-stb-front-page.jpg?width=800&quality=75&format=webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="relative p-6 pb-8">
          <img
            src="https://www.storebrandam.com/globalassets/storebrand-asset-management/pictures/logos/stb-logo-pos.svg"
            alt="Storebrand Asset Management"
            className="h-6 mb-4 brightness-0 invert"
          />
          <h2 className="text-xl font-bold text-white tracking-tight">
            Nordic Product Management Dashboard
          </h2>
          <p className="text-sm text-primary-200 mt-1">Storebrand Asset Management</p>
        </div>
      </div>

      {/* Dashboard content sections */}
      <div className="bg-white p-6 space-y-6">
        <KiidStatus />
        <VffOverview />
      </div>

      <div className="bg-neutral-50 p-6 space-y-6">
        <FundNavTable />
      </div>

      <div className="bg-white p-6 space-y-6 border-t border-neutral-100">
        <WsjNewsFeed />
      </div>
    </motion.aside>
  );
}

export default DashboardPanel;
