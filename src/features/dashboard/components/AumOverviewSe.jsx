import React, { useState } from 'react';
import { motion } from 'framer-motion';
import snowflakeAumSe, { aumSeDataDate, seShareClassCount } from '../data/snowflakeAumSe';

function AumOverviewSe() {
  const [expanded, setExpanded] = useState(false);

  const totalAum = snowflakeAumSe.reduce((sum, f) => sum + f.aumMillSek, 0);
  const sorted = [...snowflakeAumSe].sort((a, b) => b.aumMillSek - a.aumMillSek);
  const top5 = sorted.slice(0, 5);

  const formatAum = (mill) => {
    if (mill >= 1000) return `${(mill / 1000).toFixed(1)} bn`;
    return `${mill.toLocaleString('en-GB')} MSEK`;
  };

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="aum-overview-se"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-neutral-800">
          Total AUM – SE Domiciled Funds
        </h3>
        <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
          ❄️ {aumSeDataDate}
        </span>
      </div>

      {/* Total */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-4 border border-primary-200">
        <p className="text-xs text-neutral-500 mb-1">Total AUM</p>
        <p className="text-2xl font-bold text-primary-800">
          {(totalAum / 1000).toFixed(1)} mdr SEK
        </p>
        <p className="text-[10px] text-neutral-400 mt-1">
          {snowflakeAumSe.length} funds · {seShareClassCount} share classes · As of {new Date().toLocaleDateString('en-GB')}
        </p>
      </div>

      {/* Top 5 */}
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-neutral-500">Top 5 Funds (AUM)</p>
        {top5.map((fund, i) => (
          <div key={fund.fundId} className="flex items-center justify-between text-xs">
            <span className="text-neutral-600 truncate flex-1 mr-2">
              <span className="text-neutral-400 mr-1">{i + 1}.</span>
              {fund.name}
            </span>
            <span className="font-semibold text-neutral-800 shrink-0">
              {formatAum(fund.aumMillSek)}
            </span>
          </div>
        ))}
      </div>

      {/* Expandable full list */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[11px] text-primary-600 hover:text-primary-800 font-medium"
      >
        {expanded ? '▲ Hide all funds' : '▼ Show all funds'}
      </button>

      {expanded && (
        <motion.div
          className="space-y-1 max-h-64 overflow-y-auto"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          {sorted.map((fund, i) => (
            <div key={fund.fundId} className="flex items-center justify-between text-[11px] py-0.5 border-b border-neutral-50">
              <span className="text-neutral-600 truncate flex-1 mr-2">
                <span className="text-neutral-300 mr-1">{i + 1}.</span>
                {fund.name}
              </span>
              <span className="font-medium text-neutral-700 shrink-0">
                {fund.aumMillSek.toLocaleString('en-GB')} MSEK
              </span>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default AumOverviewSe;
