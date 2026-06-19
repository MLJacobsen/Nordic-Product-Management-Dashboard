import React from 'react';
import { motion } from 'framer-motion';
import snowflakeAumIre from '../data/snowflakeAumIre';

function AumOverviewIre() {
  const totalAum = snowflakeAumIre.reduce((sum, f) => sum + f.aumUsd, 0);
  const sorted = [...snowflakeAumIre].sort((a, b) => b.aumUsd - a.aumUsd);
  const asOfDate = snowflakeAumIre[0]?.asOfDate || '';

  const fmtUsd = (val) => {
    if (val >= 1e9) return `$${(val / 1e9).toFixed(2)} bn`;
    if (val >= 1e6) return `$${(val / 1e6).toFixed(1)} mn`;
    return `$${val.toLocaleString('en-US')}`;
  };

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="aum-overview-ire"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-neutral-800">
          Total AUM – IE Domiciled Funds
        </h3>
        <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
          Manual
        </span>
      </div>

      {/* Total */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-4 border border-primary-200">
        <p className="text-xs text-neutral-500 mb-1">Total AUM</p>
        <p className="text-2xl font-bold text-primary-800">
          {fmtUsd(totalAum)}
        </p>
        <p className="text-[10px] text-neutral-400 mt-1">
          {snowflakeAumIre.length} funds · As of {new Date(asOfDate).toLocaleDateString('en-GB')}
        </p>
      </div>

      {/* Fund list */}
      <div className="space-y-1.5">
        {sorted.map((fund, i) => (
          <div key={fund.fundId} className="flex items-center justify-between text-xs py-0.5 border-b border-neutral-50">
            <span className="text-neutral-600 truncate flex-1 mr-2">
              <span className="text-neutral-400 mr-1">{i + 1}.</span>
              {fund.name}
            </span>
            <span className="font-semibold text-neutral-800 shrink-0">
              {fmtUsd(fund.aumUsd)}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default AumOverviewIre;
