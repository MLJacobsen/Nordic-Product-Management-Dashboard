import React from 'react';
import { motion } from 'framer-motion';
import fbfData from '../data/fbfData';

/**
 * Returns true if we're between the 5th and 15th of a month AND the data
 * file hasn't been updated for the previous month yet.
 */
function needsUpdate(dataMonth, dataYear) {
  const now = new Date();
  const day = now.getDate();
  if (day < 5 || day > 15) return false;
  const expectedMonth = now.getMonth(); // 0-indexed current = expected previous (1-indexed)
  const expectedYear = expectedMonth === 0 ? now.getFullYear() - 1 : now.getFullYear();
  const expMonth = expectedMonth === 0 ? 12 : expectedMonth;
  return dataYear < expectedYear || (dataYear === expectedYear && dataMonth < expMonth);
}

function FbfOverview() {
  const { period, summary, monthlyHistory, totals, dataMonth, dataYear } = fbfData;
  const updateNeeded = needsUpdate(dataMonth, dataYear);

  const maxChartValue = Math.max(...monthlyHistory.map((m) => Math.abs(m.netFlow)));

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="fbf-overview"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-800">FBF Nettosparande</h3>
        <span className="text-xs text-neutral-400">{period}</span>
      </div>

      {updateNeeded && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700">
          ⚠️ Nya siffror kan finnas — uppdatera fbfData.js (5:e–15:e varje mån.)
        </div>
      )}

      {/* Summary */}
      <p className="text-sm text-neutral-600 italic whitespace-pre-line">{summary}</p>

      {/* Monthly bar chart */}
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Storebrand Nettosparande (mdr SEK)</p>
        {monthlyHistory.map((item) => (
          <div key={item.month} className="flex items-center gap-2 text-xs">
            <span className="w-16 text-neutral-500 shrink-0">{item.month}</span>
            <div className="flex-1 h-4 bg-neutral-100 rounded-full overflow-hidden">
              {item.netFlow >= 0 ? (
                <motion.div
                  className="h-full rounded-full bg-primary-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.netFlow / maxChartValue) * 100}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              ) : (
                <motion.div
                  className="h-full rounded-full bg-red-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${(Math.abs(item.netFlow) / maxChartValue) * 100}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              )}
            </div>
            <span className={`w-10 text-right font-mono ${item.netFlow >= 0 ? 'text-neutral-700' : 'text-red-600'}`}>
              {item.netFlow.toFixed(1)}
            </span>
          </div>
        ))}
      </div>

      {/* Key figures */}
      <div className="bg-neutral-50 rounded-lg p-3">
        <p className="text-xs font-semibold text-neutral-600 mb-1">Total Storebrand Sverige</p>
        <div className="space-y-1 text-xs text-neutral-700">
          <p>
            Nettosparande: <span className="font-semibold">{totals.netFlow} {totals.netFlowUnit}</span>
            <span className="text-neutral-400"> ({totals.marketShareFlow}% av FBF)</span>
          </p>
          <p>
            Förvaltningskapital: <span className="font-semibold">{totals.aum} {totals.aumUnit}</span>
            <span className="text-neutral-400"> ({totals.marketShareAum}% av FBF)</span>
          </p>
        </div>
      </div>

      {/* Source link */}
      <a
        href="https://fondbolagen.se/fakta-index/manadsstatistik/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xs text-primary-500 hover:text-primary-700 transition-colors"
      >
        Källa: Fondbolagens Förening →
      </a>
    </motion.div>
  );
}

export default FbfOverview;
