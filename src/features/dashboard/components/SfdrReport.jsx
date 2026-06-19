import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sfdrData from '../data/sfdrData';

function CoverageGauge({ value }) {
  if (value === null) return <span className="text-[9px] text-neutral-400">N/A</span>;
  const color = value >= 90 ? 'text-green-600' : value >= 70 ? 'text-yellow-600' : 'text-red-500';
  const barColor = value >= 90 ? 'bg-green-500' : value >= 70 ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <div className="flex items-center gap-1">
      <div className="w-10 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${value}%` }} />
      </div>
      <span className={`text-[9px] font-mono ${color}`}>{value.toFixed(0)}%</span>
    </div>
  );
}

function ArticleBadge({ article }) {
  const colors = article === 'Article 9'
    ? 'bg-green-50 text-green-700 border-green-200'
    : 'bg-primary-50 text-primary-700 border-primary-200';
  return (
    <span className={`text-[9px] px-1.5 py-0.5 rounded border ${colors} font-medium`}>
      {article}
    </span>
  );
}

function IndicatorCard({ pai, label, value, unit, coverage, category }) {
  const categoryColors = {
    climate: 'border-l-secondary-500',
    energy: 'border-l-yellow-500',
    biodiversity: 'border-l-green-600',
    water: 'border-l-blue-500',
    waste: 'border-l-purple-500',
    social: 'border-l-primary-400',
  };

  const formatValue = (v) => {
    if (v === 0) return '0';
    if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
    if (v >= 1000) return `${(v / 1000).toFixed(0)}K`;
    return v.toFixed(2);
  };

  return (
    <div className={`bg-white rounded-lg p-3 border-l-2 shadow-sm ${categoryColors[category] || 'border-l-neutral-300'}`}>
      <div className="flex items-start justify-between mb-1">
        <span className="text-[9px] text-neutral-500 font-medium">{pai}</span>
        <CoverageGauge value={coverage} />
      </div>
      <p className="text-[10px] text-neutral-600 mb-1">{label}</p>
      <p className="text-lg font-bold text-neutral-800 leading-tight">
        {formatValue(value)}
        <span className="text-[9px] text-neutral-400 ml-1 font-normal">{unit}</span>
      </p>
    </div>
  );
}

function SfdrReport() {
  const [selectedFund, setSelectedFund] = useState(sfdrData.funds[0].portfolio);
  const fund = sfdrData.funds.find((f) => f.portfolio === selectedFund);
  const { indicatorMeta } = sfdrData;

  const climateIndicators = ['ghgEmissions', 'carbonFootprint', 'ghgIntensity', 'fossilFuelExposure'];
  const energyIndicators = ['nonRenewConsumption', 'nonRenewProduction', 'energyIntensity'];
  const envIndicators = ['biodiversity', 'emissionsToWater', 'hazardousWaste'];
  const socialIndicators = ['ungcViolations', 'femaleBoardRatio', 'controversialWeapons'];

  return (
    <div className="space-y-6" data-testid="sfdr-report">
      {/* Header card */}
      <motion.div
        className="bg-white rounded-2xl shadow-card p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-lg font-bold text-primary-700">
              Sustainable Financial Disclosure Reporting
            </h3>
            <p className="text-xs text-neutral-500">
              PAI Indicators · Climate & Environment-Related
            </p>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-neutral-400 block">Source: Snowflake ESG_KPI</span>
            <span className="text-[10px] text-neutral-400">Report: {sfdrData.reportDate}</span>
          </div>
        </div>

        {/* Fund selector */}
        <div className="flex flex-wrap gap-2 mb-5">
          {sfdrData.funds.map((f) => (
            <button
              key={f.portfolio}
              onClick={() => setSelectedFund(f.portfolio)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                selectedFund === f.portfolio
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:text-primary-700 hover:bg-primary-50'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Fund summary */}
        <div className="flex items-center gap-4 bg-primary-50/50 border border-primary-100 rounded-xl p-4">
          <div>
            <p className="text-sm font-semibold text-neutral-800">{fund.name}</p>
            <p className="text-[10px] text-neutral-500">{fund.portfolio}</p>
          </div>
          <ArticleBadge article={fund.sfdrArticle} />
          <div className="ml-auto text-right">
            <p className="text-[10px] text-neutral-500">Sustainable Investment</p>
            <p className="text-xl font-bold text-green-600">{fund.sustainableInvestment}%</p>
          </div>
        </div>
      </motion.div>

      {/* Climate & GHG */}
      <motion.div
        className="bg-white rounded-2xl shadow-card p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <h4 className="text-xs font-semibold text-secondary-600 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-secondary-500 rounded-full" />
          Greenhouse Gas Emissions
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {climateIndicators.map((key) => (
            <IndicatorCard
              key={key}
              pai={indicatorMeta[key].pai}
              label={indicatorMeta[key].label}
              value={fund.indicators[key].value}
              unit={fund.indicators[key].unit}
              coverage={fund.indicators[key].coverage}
              category={indicatorMeta[key].category}
            />
          ))}
        </div>
      </motion.div>

      {/* Energy */}
      <motion.div
        className="bg-white rounded-2xl shadow-card p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h4 className="text-xs font-semibold text-yellow-600 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full" />
          Energy
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {energyIndicators.map((key) => (
            <IndicatorCard
              key={key}
              pai={indicatorMeta[key].pai}
              label={indicatorMeta[key].label}
              value={fund.indicators[key].value}
              unit={fund.indicators[key].unit}
              coverage={fund.indicators[key].coverage}
              category={indicatorMeta[key].category}
            />
          ))}
        </div>
      </motion.div>

      {/* Biodiversity, Water, Waste */}
      <motion.div
        className="bg-white rounded-2xl shadow-card p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <h4 className="text-xs font-semibold text-green-600 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-600 rounded-full" />
          Biodiversity, Water & Waste
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {envIndicators.map((key) => (
            <IndicatorCard
              key={key}
              pai={indicatorMeta[key].pai}
              label={indicatorMeta[key].label}
              value={fund.indicators[key].value}
              unit={fund.indicators[key].unit}
              coverage={fund.indicators[key].coverage}
              category={indicatorMeta[key].category}
            />
          ))}
        </div>
      </motion.div>

      {/* Social */}
      <motion.div
        className="bg-white rounded-2xl shadow-card p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h4 className="text-xs font-semibold text-primary-500 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-primary-400 rounded-full" />
          Social & Governance
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {socialIndicators.map((key) => (
            <IndicatorCard
              key={key}
              pai={indicatorMeta[key].pai}
              label={indicatorMeta[key].label}
              value={fund.indicators[key].value}
              unit={fund.indicators[key].unit}
              coverage={fund.indicators[key].coverage}
              category={indicatorMeta[key].category}
            />
          ))}
        </div>
      </motion.div>

      {/* Comparison table */}
      <motion.div
        className="bg-white rounded-2xl shadow-card p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <h4 className="text-xs font-semibold text-neutral-700 mb-3">
          Fund Comparison — Key Metrics
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-2 px-2 text-neutral-500 font-medium">Fund</th>
                <th className="text-center py-2 px-2 text-neutral-500 font-medium">SFDR</th>
                <th className="text-right py-2 px-2 text-neutral-500 font-medium">SI %</th>
                <th className="text-right py-2 px-2 text-neutral-500 font-medium">Carbon Fp</th>
                <th className="text-right py-2 px-2 text-neutral-500 font-medium">Fossil %</th>
                <th className="text-right py-2 px-2 text-neutral-500 font-medium">♀ Board</th>
              </tr>
            </thead>
            <tbody>
              {sfdrData.funds.map((f) => (
                <tr
                  key={f.portfolio}
                  className={`border-b border-neutral-100 hover:bg-neutral-50 transition-colors ${
                    f.portfolio === selectedFund ? 'bg-primary-50/40' : ''
                  }`}
                >
                  <td className="py-2 px-2 text-neutral-700 font-medium">{f.name}</td>
                  <td className="py-2 px-2 text-center">
                    <ArticleBadge article={f.sfdrArticle} />
                  </td>
                  <td className="py-2 px-2 text-right text-green-600 font-mono font-semibold">{f.sustainableInvestment}%</td>
                  <td className="py-2 px-2 text-right text-neutral-700 font-mono">{f.indicators.carbonFootprint.value.toFixed(0)}</td>
                  <td className="py-2 px-2 text-right text-neutral-700 font-mono">{f.indicators.fossilFuelExposure.value.toFixed(2)}%</td>
                  <td className="py-2 px-2 text-right text-neutral-700 font-mono">{f.indicators.femaleBoardRatio.value.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-neutral-400 mt-4 italic">
          Data sourced from S&P Trucost via Snowflake. Coverage indicates % of portfolio with available data.
          PAI = Principal Adverse Impact indicators (EU SFDR Regulation).
        </p>
      </motion.div>
    </div>
  );
}

export default SfdrReport;
