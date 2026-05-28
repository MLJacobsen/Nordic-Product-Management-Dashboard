import React from 'react';
import { motion } from 'framer-motion';
import FundNavTable from './FundNavTable';
import KiidStatus from './KiidStatus';
import MonthlyReportStatus from './MonthlyReportStatus';
import NewFundLaunches from './NewFundLaunches';
import NewsFeed from './NewsFeed';
import VffOverview from './VffOverview';
import { fetchWsjNews, fetchE24News, fetchDagensIndustriNews } from '../services/newsService';

// Storebrand imagery from their public CDN — verified URLs
const STB_IMAGES = {
  banner: 'https://www.storebrandam.com/globalassets/storebrand-asset-management/pictures/photos/banner-photo/banner-stb-front-page.jpg?width=1200&quality=75&format=webp',
  logo: 'https://www.storebrandam.com/globalassets/storebrand-asset-management/pictures/logos/stb-logo-pos.svg',
  nature1: 'https://www.storebrandam.com/globalassets/storebrand-asset-management/pictures/photos/nature/ima254529.jpg?width=600&quality=75&format=webp',
  people: 'https://www.storebrandam.com/globalassets/storebrand-asset-management/pictures/people/portfolio-managers/tore_jorgen_rye_tj.jpg?width=600&quality=75&format=webp',
  ogImage: 'https://www.storebrandam.com/globalassets/storebrand-asset-management/pictures/logos/storebrand-asset-management-page-share.jpg?width=600&quality=75&format=webp',
};

function ImageCard({ src, alt, caption }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-card relative group">
      <img
        src={src}
        alt={alt}
        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => { e.target.parentElement.style.display = 'none'; }}
      />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
          <p className="text-xs text-white font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
}

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
          src={STB_IMAGES.banner}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
        />
        <div className="relative p-8 pb-10">
          <img
            src={STB_IMAGES.logo}
            alt="Storebrand Asset Management"
            className="h-7 mb-5 brightness-0 invert"
          />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Nordic Product Management Dashboard
          </h2>
          <p className="text-sm text-primary-200 mt-1 opacity-80">Storebrand Asset Management</p>
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

          {/* Decorative image divider */}
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={STB_IMAGES.nature1}
              alt="Storebrand – Ledende nordisk kapitalforvalter"
              className="w-full h-44 object-cover"
              onError={(e) => { e.target.parentElement.style.display = 'none'; }}
            />
          </div>

          {/* VFF Overview */}
          <div className="bg-white rounded-2xl shadow-card p-6">
            <VffOverview />
          </div>

          {/* New Fund Launches 2026 */}
          <div className="bg-white rounded-2xl shadow-card p-6">
            <NewFundLaunches />
          </div>

          {/* Another imagery section */}
          <div className="grid grid-cols-2 gap-4">
            <ImageCard
              src={STB_IMAGES.people}
              alt="Porteføljeforvaltere"
              caption="Våre eksperter"
            />
            <ImageCard
              src={STB_IMAGES.ogImage}
              alt="Storebrand Asset Management"
              caption="Nordisk kapitalforvaltning"
            />
          </div>

          {/* Fund NAV table */}
          <div className="bg-white rounded-2xl shadow-card p-6">
            <FundNavTable />
          </div>
        </div>

        {/* Right column — News feeds + imagery */}
        <div className="w-full lg:w-80 shrink-0 space-y-6">
          {/* Storebrand imagery card */}
          <ImageCard
            src={STB_IMAGES.banner}
            alt="Storebrand"
            caption="Investing for a sustainable future"
          />

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

          {/* Storebrand brand message */}
          <div className="stb-gradient rounded-2xl p-5 shadow-card">
            <p className="text-white text-sm font-medium leading-relaxed">
              «Vi forvalter kapital med mål om langsiktig verdiskaping og bærekraftig utvikling.»
            </p>
            <p className="text-primary-200 text-xs mt-2 opacity-70">— Storebrand Asset Management</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardPanel;
