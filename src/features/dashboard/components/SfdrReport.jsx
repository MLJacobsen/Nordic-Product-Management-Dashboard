import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sfdrData from '../data/sfdrData';

function CoverageGauge({ value }) {
  if (value === null) return <span className="text-[9px] text-neutral-500">N/A</span>;
  const color = value >= 90 ? 'text-green-400' : value >= 70 ? 'text-yellow-400' : 'text-red-400';
  return (
    <div className="flex items-center gap-1">
      <div className="w-10 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${value >= 90 ? 'bg-green-400' : value >= 70 ? 'bg-yellow-400' : 'bg-red-400'}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className={`text-[9px] font-mono ${color}`}>{value.toFixed(0)}%</span>
    </div>
  );
}

function ArticleBadge({ article }) {
  const colors = article === 'Article 9'
    ? 'bg-green-900/50 text-green-300 border-green-700'
    : 'bg-blue-900/50 text-blue-300 border-blue-700';
  return (
    <span className={`text-[9px] px-1.5 py-0.5 rounded border ${colors} font-medium`}>
      {article}
    </span>
  );
}

function IndicatorCard({ pai, label, value, unit, coverage, category }) {
  const categoryColors = {
    climate: 'border-l-orange-500',
    energy: 'border-l-yellow-500',
    biodiversity: 'border-l-green-500',
    water: 'border-l-blue-500',
    waste: 'border-l-purple-500',
    social: 'border-l-pink-500',
  };

  const formatValue = (v) => {
    if (v === 0) return '0';
    if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
    if (v >= 1000) return `${(v / 1000).toFixed(0)}K`;
    return v.toFixed(2);
  };

  return (
    <div className={`bg-neutral-800 rounded-lg p-3 border-l-2 ${categoryColors[category] || 'border-l-neutral-500'}`}>
      <div className="flex items-start justify-between mb-1">
        <span className="text-[9px] text-neutral-400 font-medium">{pai}</span>
        <CoverageGauge value={coverage} />
      </div>
      <p className="text-[10px] text-neutral-300 mb-1">{label}</p>
      <p className="text-lg font-bold text-white leading-tight">
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
    <motion.div
      className="bg-neutral-900 rounded-2xl p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="sfdr-report"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold text-white">
            Sustainable Financial Disclosure Reporting
          </h3>
          <p className="text-[10px] text-neutral-400">
            PAI Indicators · Climate & Environment-Related
          </p>
        </div>
        <div className="text-right">
          <span className="text-[9px] text-neutral-500 block">Source: Snowflake ESG_KPI</span>
          <span className="text-[9px] text-neutral-500">Report: {sfdrData.reportDate}</span>
        </div>
      </div>

      {/* Fund selector */}
      <div className="flex flex-wrap gap-2 mb-5">
        {sfdrData.funds.map((f) => (
          <button
            key={f.portfolio}
            onClick={() => setSelectedFund(f.portfolio)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
              selectedFund === f.portfolio
                ? 'bg-blue-600 text-white'
                : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'
            }`}
          >
            {f.name}
          </button>
        ))}
      </div>

      {/* Fund summary */}
      <div className="flex items-center gap-4 mb-5 bg-neutral-800/50 rounded-lg p-3">
        <div>
          <p className="text-sm font-semibold text-white">{fund.name}</p>
          <p className="text-[10px] text-neutral-400">{fund.portfolio}</p>
        </div>
        <ArticleBadge article={fund.sfdrArticle} />
        <div className="ml-auto text-right">
          <p className="text-[9px] text-neutral-400">Sustainable Investment</p>
          <p className="text-xl font-bold text-green-400">{fund.sustainableInvestment}%</p>
        </div>
      </div>

      {/* Climate & GHG */}
      <div className="mb-4">
        <h4 className="text-[11px] font-semibold text-orange-400 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full" />
          Greenhouse Gas Emissions
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
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
      </div>

      {/* Energy */}
      <div className="mb-4">
        <h4 className="text-[11px] font-semibold text-yellow-400 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full" />
          Energy
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
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
      </div>

      {/* Biodiversity, Water, Waste */}
      <div className="mb-4">
        <h4 className="text-[11px] font-semibold text-green-400 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Biodiversity, Water & Waste
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
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
      </div>

      {/* Social */}
      <div className="mb-4">
        <h4 className="text-[11px] font-semibold text-pink-400 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-pink-500 rounded-full" />
          Social & Governance
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
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
      </div>

      {/* Comparison table */}
      <div className="mt-5 bg-neutral-800 rounded-lg p-3">
        <h4 className="text-[10px] font-semibold text-neutral-300 mb-2">
          Fund Comparison — Key Metrics
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-[9px]">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="text-left py-1 px-1 text-neutral-400">Fund</th>
                <th className="text-center py-1 px-1 text-neutral-400">SFDR</th>
                <th className="text-right py-1 px-1 text-neutral-400">SI %</th>
                <th className="text-right py-1 px-1 text-neutral-400">Carbon Fp</th>
                <th className="text-right py-1 px-1 text-neutral-400">Fossil %</th>
                <th className="text-right py-1 px-1 text-neutral-400">♀ Board</th>
              </tr>
            </thead>
            <tbody>
              {sfdrData.funds.map((f) => (
                <tr
                  key={f.portfolio}
                  className={`border-b border-neutral-700/50 ${f.portfolio === selectedFund ? 'bg-blue-900/20' : ''}`}
                >
                  <td className="py-1.5 px-1 text-neutral-200 font-medium">{f.name}</td>
                  <td className="py-1.5 px-1 text-center">
                    <ArticleBadge article={f.sfdrArticle} />
                  </td>
                  <td className="py-1.5 px-1 text-right text-green-400 font-mono">{f.sustainableInvestment}%</td>
                  <td className="py-1.5 px-1 text-right text-neutral-200 font-mono">{f.indicators.carbonFootprint.value.toFixed(0)}</td>
                  <td className="py-1.5 px-1 text-right text-neutral-200 font-mono">{f.indicators.fossilFuelExposure.value.toFixed(2)}%</td>
                  <td className="py-1.5 px-1 text-right text-neutral-200 font-mono">{f.indicators.femaleBoardRatio.value.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[9px] text-neutral-500 mt-3 italic">
        Data sourced from S&P Trucost via Snowflake. Coverage indicates % of portfolio with available data.
        PAI = Principal Adverse Impact indicators (EU SFDR Regulation).
      </p>
    </motion.div>
  );
}

export default SfdrReport;
