import React, { useState } from 'react';
import { motion } from 'framer-motion';
import luxFlowData from '../data/luxFlowData';

function needsUpdate(dataMonth, dataYear) {
  const now = new Date();
  const day = now.getDate();
  if (day > 5) return false;
  const expectedMonth = now.getMonth(); // 0-indexed current = expected previous (1-indexed)
  const expectedYear = expectedMonth === 0 ? now.getFullYear() - 1 : now.getFullYear();
  const expMonth = expectedMonth === 0 ? 12 : expectedMonth;
  return dataYear < expectedYear || (dataYear === expectedYear && dataMonth < expMonth);
}

function LuxFlowOverview() {
  const [view, setView] = useState('monthly');
  const { period, ytdPeriod, monthly, ytd, dataMonth, dataYear } = luxFlowData;
  const updateNeeded = needsUpdate(dataMonth, dataYear);

  const data = view === 'monthly' ? monthly : ytd;
  const title = view === 'monthly' ? period : ytdPeriod;

  const formatEur = (val) => {
    const abs = Math.abs(val);
    if (abs >= 1000000) return `€${(val / 1000000).toFixed(1)}M`;
    if (abs >= 1000) return `€${(val / 1000).toFixed(0)}K`;
    return `€${val.toFixed(0)}`;
  };

  const maxAbsFlow = Math.max(...data.funds.map((f) => Math.abs(f.netFlow)));

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="lux-flow-overview"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-neutral-800">
          SICAV Flows
        </h3>
        <div className="flex gap-1 bg-neutral-100 rounded-lg p-0.5">
          <button
            onClick={() => setView('monthly')}
            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
              view === 'monthly' ? 'bg-white text-primary-700 shadow-sm' : 'text-neutral-500'
            }`}
          >
            {period}
          </button>
          <button
            onClick={() => setView('ytd')}
            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
              view === 'ytd' ? 'bg-white text-primary-700 shadow-sm' : 'text-neutral-500'
            }`}
          >
            YTD
          </button>
        </div>
      </div>

      {updateNeeded && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700">
          ⚠️ Nye flow-tall kan være tilgjengelige — oppdater luxFlowData.js (1.–5. hver mnd.)
        </div>
      )}

      {/* Summary card */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-4 border border-primary-200">
        <p className="text-xs text-neutral-500 mb-1">Netto flow — {title}</p>
        <p className={`text-2xl font-bold ${data.totalNetFlow >= 0 ? 'text-green-700' : 'text-red-700'}`}>
          {formatEur(data.totalNetFlow)}
        </p>
        <div className="flex gap-4 mt-1.5 text-[10px] text-neutral-500">
          <span>Inflows: <span className="text-green-600 font-medium">{formatEur(data.totalInflows)}</span></span>
          <span>Outflows: <span className="text-red-600 font-medium">{formatEur(data.totalOutflows)}</span></span>
        </div>
      </div>

      {/* Per-fund breakdown */}
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Per fund</p>
        {data.funds.map((fund) => (
          <div key={fund.name} className="flex items-center gap-2 text-xs">
            <span className="w-36 text-neutral-600 truncate shrink-0">{fund.name.replace('Storebrand ', 'Stb ').replace('Skagen ', 'SKA ')}</span>
            <div className="flex-1 h-4 bg-neutral-100 rounded-full overflow-hidden relative">
              {fund.netFlow >= 0 ? (
                <motion.div
                  className="h-full rounded-full bg-green-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${(fund.netFlow / maxAbsFlow) * 100}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              ) : (
                <motion.div
                  className="h-full rounded-full bg-red-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${(Math.abs(fund.netFlow) / maxAbsFlow) * 100}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              )}
            </div>
            <span className={`w-16 text-right font-mono text-[11px] ${fund.netFlow >= 0 ? 'text-green-700' : 'text-red-600'}`}>
              {formatEur(fund.netFlow)}
            </span>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-neutral-400 italic">
        {luxFlowData.note}
      </p>
    </motion.div>
  );
}

export default LuxFlowOverview;
