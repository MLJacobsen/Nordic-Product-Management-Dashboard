import React from 'react';
import { motion } from 'framer-motion';
import FundNavTable from './FundNavTable';
import KiidStatus from './KiidStatus';
import MonthlyReportStatus from './MonthlyReportStatus';
import NewsFeed from './NewsFeed';
import VffOverview from './VffOverview';
import { fetchWsjNews, fetchE24News, fetchDagensIndustriNews } from '../services/newsService';

function DashboardPanel() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      data-testid="dashboard-panel"
    >
      {/* Storebrand-style header with hero image */}
      <div className="stb-gradient relative overflow-hidden rounded-2xl shadow-card">
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

      {/* Two-column layout: KPIs left, News + images right */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left column — KPIs and fund data */}
        <div className="flex-1 min-w-0 space-y-6">
          {/* Status cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <KiidStatus />
            <MonthlyReportStatus />
          </div>

          {/* VFF Overview */}
          <div className="bg-white rounded-2xl shadow-card p-6">
            <VffOverview />
          </div>

          {/* Fund NAV table */}
          <div className="bg-white rounded-2xl shadow-card p-6">
            <FundNavTable />
          </div>
        </div>

        {/* Right column — News feeds + imagery */}
        <div className="w-full lg:w-80 shrink-0 space-y-6">
          {/* Storebrand imagery card */}
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src="https://www.storebrandam.com/globalassets/storebrand-asset-management/pictures/photos/nature/nature-water-mountain.jpg?width=400&quality=75&format=webp"
              alt="Nordic nature"
              className="w-full h-36 object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* WSJ Markets */}
          <div className="bg-white rounded-2xl shadow-card p-5">
            <NewsFeed
              title="WSJ Markets"
              fetchFn={fetchWsjNews}
              icon="🇺🇸"
              testId="wsj-news-feed"
            />
          </div>

          {/* E24 */}
          <div className="bg-white rounded-2xl shadow-card p-5">
            <NewsFeed
              title="E24"
              fetchFn={fetchE24News}
              icon="🇳🇴"
              testId="e24-news-feed"
            />
          </div>

          {/* Dagens Industri */}
          <div className="bg-white rounded-2xl shadow-card p-5">
            <NewsFeed
              title="Dagens Industri"
              fetchFn={fetchDagensIndustriNews}
              icon="🇸🇪"
              testId="di-news-feed"
            />
          </div>

          {/* Second decorative image */}
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src="https://www.storebrandam.com/globalassets/storebrand-asset-management/pictures/photos/nature/nature-forest-light.jpg?width=400&quality=75&format=webp"
              alt="Nordic forest"
              className="w-full h-32 object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardPanel;
