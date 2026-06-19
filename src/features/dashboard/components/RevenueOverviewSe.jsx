import React, { useState } from 'react';
import { motion } from 'framer-motion';
import fundRevenueSeData from '../data/fundRevenueSe';

function RevenueOverviewSe() {
  const [showAll, setShowAll] = useState(false);

  const sorted = [...fundRevenueSeData].sort((a, b) => b.estRevenueMillSek - a.estRevenueMillSek);
  const totalRevenue = sorted.reduce((sum, f) => sum + f.estRevenueMillSek, 0);
  const top10 = sorted.slice(0, 10);
  const displayList = showAll ? sorted : top10;

  const formatMsek = (val) => {
    if (val >= 1000) return `${(val / 1000).toFixed(2)} mdr`;
    return `${val.toFixed(0)} MSEK`;
  };

  const maxRevenue = sorted[0]?.estRevenueMillSek || 1;

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="revenue-overview-se"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-800">
          Revenue per Fund – SE Domiciled
        </h3>
        <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
          Est. annual ongoing charge
        </span>
      </div>

      {/* Total revenue card */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-neutral-500 mb-0.5">Estimated total annual revenue (ongoing charges)</p>
            <p className="text-2xl font-bold text-green-800">
              {formatMsek(totalRevenue)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-neutral-500">{sorted.length} funds</p>
            <p className="text-xs text-neutral-400">AUM × OC</p>
          </div>
        </div>
      </div>

      {/* Revenue ranking */}
      <div className="space-y-2">
        {displayList.map((fund, i) => (
          <div key={fund.fundId} className="flex items-center gap-3 text-xs">
            <span className="w-5 text-neutral-400 text-right shrink-0">{i + 1}.</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-medium text-neutral-700 truncate mr-2">{fund.name}</span>
                <span className="font-bold text-green-700 shrink-0">
                  {fund.estRevenueMillSek.toFixed(1)} MSEK
                </span>
              </div>
              {/* Revenue bar */}
              <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(fund.estRevenueMillSek / maxRevenue) * 100}%` }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                />
              </div>
              <div className="flex justify-between mt-0.5 text-[10px] text-neutral-400">
                <span>AUM: {fund.aumMillSek.toLocaleString('en-GB')} MSEK</span>
                <span>OC: {fund.terPct.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle show all */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-[11px] text-primary-600 hover:text-primary-800 font-medium"
      >
        {showAll ? `▲ Show top 10` : `▼ Show all ${sorted.length} funds`}
      </button>

      <p className="text-[10px] text-neutral-400 italic">
        Estimated based on AUM × Ongoing Charge. Excludes performance fees and transaction fees.
      </p>
    </motion.div>
  );
}

export default RevenueOverviewSe;
