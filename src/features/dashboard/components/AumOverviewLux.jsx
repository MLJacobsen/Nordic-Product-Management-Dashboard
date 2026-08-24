import React from 'react';
import { motion } from 'framer-motion';
import snowflakeAumLux, { luxShareClassCount, aumLuxDataDate } from '../data/snowflakeAumLux';

function AumOverviewLux() {
  const totalAum = snowflakeAumLux.reduce((sum, f) => sum + f.aumMillEur, 0);
  const sorted = [...snowflakeAumLux].sort((a, b) => b.aumMillEur - a.aumMillEur);

  const formatAum = (mill) => {
    if (mill >= 1000) return `${(mill / 1000).toFixed(1)} bn`;
    return `${mill.toLocaleString('en-GB')} mn`;
  };

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="aum-overview-lux"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-neutral-800">
          Total AUM – LU Domiciled Funds
        </h3>
        <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
          ❄️ Snowflake
        </span>
      </div>

      {/* Total */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-4 border border-primary-200">
        <p className="text-xs text-neutral-500 mb-1">Total AUM</p>
        <p className="text-2xl font-bold text-primary-800">
          {(totalAum / 1000).toFixed(1)} mrd EUR
        </p>
        <p className="text-[10px] text-neutral-400 mt-1">
          {snowflakeAumLux.length} funds · {luxShareClassCount} share classes · As of {aumLuxDataDate}
        </p>
      </div>

      {/* All funds */}
      <div className="space-y-1.5">
        {sorted.map((fund, i) => (
          <div key={fund.fundId} className="flex items-center justify-between text-xs py-0.5 border-b border-neutral-50">
            <span className="text-neutral-600 truncate flex-1 mr-2">
              <span className="text-neutral-400 mr-1">{i + 1}.</span>
              {fund.name}
            </span>
            <span className="font-semibold text-neutral-800 shrink-0">
              {formatAum(fund.aumMillEur)} EUR
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default AumOverviewLux;
