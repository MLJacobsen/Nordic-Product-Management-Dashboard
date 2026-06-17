import React from 'react';
import { motion } from 'framer-motion';
import vffData from '../data/vffData';

/**
 * Returns true if we're between the 5th and 15th of a month AND the data
 * file hasn't been updated for the previous month yet.
 */
function needsUpdate(dataMonth, dataYear) {
  const now = new Date();
  const day = now.getDate();
  if (day < 5 || day > 15) return false;
  // Expected: data should cover (currentMonth - 1)
  const expectedMonth = now.getMonth(); // 0-indexed current = expected previous (1-indexed)
  const expectedYear = expectedMonth === 0 ? now.getFullYear() - 1 : now.getFullYear();
  const expMonth = expectedMonth === 0 ? 12 : expectedMonth; // 1-indexed prev month
  return dataYear < expectedYear || (dataYear === expectedYear && dataMonth < expMonth);
}

function VffInflowBar({ label, value, max, color }) {
  const percentage = Math.max(0, (value / max) * 100);
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-16 text-neutral-500 shrink-0">{label}</span>
      <div className="flex-1 h-4 bg-neutral-100 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      <span className="w-12 text-right font-mono text-neutral-700">{value.toFixed(1)}</span>
    </div>
  );
}

function VffOverview() {
  const { month, summary, totalSAM, privateSAM, monthlyHistory, dataMonth, dataYear } = vffData;
  const updateNeeded = needsUpdate(dataMonth, dataYear);

  // Find max value for chart scaling
  const maxChartValue = Math.max(...monthlyHistory.map((m) => Math.abs(m.sam)));

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="vff-overview"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-800">VFF Nettotegning</h3>
        <span className="text-xs text-neutral-400">{month}</span>
      </div>

      {updateNeeded && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700">
          ⚠️ Nye tall kan være tilgjengelige — oppdater vffData.js (5.–15. hver mnd.)
        </div>
      )}

      {/* Summary */}
      <p className="text-sm text-neutral-600 italic">{summary}</p>

      {/* Monthly bar chart */}
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">SAM Nettotegning (mrd. kr.)</p>
        {monthlyHistory.map((item) => (
          <div key={item.month} className="flex items-center gap-2 text-xs">
            <span className="w-16 text-neutral-500 shrink-0">{item.month.slice(0, 3)}</span>
            <div className="flex-1 h-4 bg-neutral-100 rounded-full overflow-hidden relative">
              {item.sam >= 0 ? (
                <motion.div
                  className="h-full rounded-full bg-primary-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.sam / maxChartValue) * 100}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              ) : (
                <motion.div
                  className="h-full rounded-full bg-red-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${(Math.abs(item.sam) / maxChartValue) * 100}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              )}
            </div>
            <span className={`w-10 text-right font-mono ${item.sam >= 0 ? 'text-neutral-700' : 'text-red-600'}`}>
              {item.sam.toFixed(1)}
            </span>
          </div>
        ))}
      </div>

      {/* Key figures */}
      <div className="grid grid-cols-1 gap-3 pt-2">
        <div className="bg-neutral-50 rounded-lg p-3">
          <p className="text-xs font-semibold text-neutral-600 mb-1">Total SAM</p>
          <div className="space-y-1 text-xs text-neutral-700">
            <p>
              Nettotegning: <span className="font-semibold">{totalSAM.netSubscription} mrd. kr.</span>
              <span className="text-neutral-400"> ({totalSAM.netSubscriptionShare}% av VFF: {totalSAM.netSubscriptionVffTotal} mrd.)</span>
            </p>
            <p>
              Forvaltningskapital: <span className="font-semibold">{totalSAM.aum} mrd. kr.</span>
              <span className="text-neutral-400"> ({totalSAM.aumShare}% av VFF: {totalSAM.aumVffTotal} mrd.)</span>
            </p>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-lg p-3">
          <p className="text-xs font-semibold text-neutral-600 mb-1">Privatkunder SAM</p>
          <div className="space-y-1 text-xs text-neutral-700">
            <p>
              Nettotegning: <span className="font-semibold">{(privateSAM.netSubscription * 1000).toFixed(0)} mill. kr.</span>
              <span className="text-neutral-400"> ({privateSAM.netSubscriptionShare}% av VFF: {privateSAM.netSubscriptionVffTotal} mrd.)</span>
            </p>
            <p>
              Forvaltningskapital: <span className="font-semibold">{privateSAM.aum} mrd. kr.</span>
              <span className="text-neutral-400"> ({privateSAM.aumShare}% av VFF: {privateSAM.aumVffTotal} mrd.)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Source link */}
      <a
        href="https://vff.no/statistikk"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xs text-primary-500 hover:text-primary-700 transition-colors"
      >
        Kilde: VFF Statistikk →
      </a>
    </motion.div>
  );
}

export default VffOverview;
