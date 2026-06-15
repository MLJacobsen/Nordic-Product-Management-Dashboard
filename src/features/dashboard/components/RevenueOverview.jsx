import React, { useState } from 'react';
import { motion } from 'framer-motion';
import fundRevenueData from '../data/fundRevenue';

function RevenueOverview() {
  const [showAll, setShowAll] = useState(false);

  const sorted = [...fundRevenueData].sort((a, b) => b.estRevenueMillNok - a.estRevenueMillNok);
  const totalRevenue = sorted.reduce((sum, f) => sum + f.estRevenueMillNok, 0);
  const top10 = sorted.slice(0, 10);
  const displayList = showAll ? sorted : top10;

  const formatMnok = (val) => {
    if (val >= 1000) return `${(val / 1000).toFixed(2)} mrd`;
    return `${val.toFixed(0)} MNOK`;
  };

  // Bar width relative to max
  const maxRevenue = sorted[0]?.estRevenueMillNok || 1;

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="revenue-overview"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-800">
          Revenue per Fund – NO Domiciled
        </h3>
        <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
          Est. årlig forvaltningshonorar
        </span>
      </div>

      {/* Total revenue card */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-neutral-500 mb-0.5">Estimert total årlig inntekt (forvaltningshonorar)</p>
            <p className="text-2xl font-bold text-green-800">
              {formatMnok(totalRevenue)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-neutral-500">{sorted.length} fond</p>
            <p className="text-xs text-neutral-400">AUM × TER</p>
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
                  {fund.estRevenueMillNok.toFixed(1)} MNOK
                </span>
              </div>
              {/* Revenue bar */}
              <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(fund.estRevenueMillNok / maxRevenue) * 100}%` }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                />
              </div>
              <div className="flex justify-between mt-0.5 text-[10px] text-neutral-400">
                <span>AUM: {fund.aumMillNok.toLocaleString('no-NO')} MNOK</span>
                <span>TER: {fund.terPct.toFixed(2)}%</span>
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
        {showAll ? `▲ Vis topp 10` : `▼ Vis alle ${sorted.length} fond`}
      </button>

      <p className="text-[10px] text-neutral-400 italic">
        Estimert basert på AUM × TER (forvaltningshonorar). Ekskluderer eventuelle suksesshonorarer og transaksjonsgebyrer.
      </p>
    </motion.div>
  );
}

export default RevenueOverview;
