import React, { useState } from 'react';
import { motion } from 'framer-motion';
import seNavData from '../data/seNavData';

function FundNavTableSE() {
  const [showAll, setShowAll] = useState(false);
  const funds = seNavData.funds;
  const displayed = showAll ? funds : funds.slice(0, 15);

  return (
    <div data-testid="fund-nav-table-se">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-neutral-800">Fund NAV - SE Domiciled Funds</h3>
        <span className="text-[10px] text-neutral-400">{seNavData.valuationDate}</span>
      </div>
      <div className="overflow-y-auto max-h-96">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-white">
            <tr className="text-left text-neutral-500 border-b border-neutral-200">
              <th className="pb-2 font-medium">Fund</th>
              <th className="pb-2 font-medium text-right">NAV (SEK)</th>
            </tr>
          </thead>
          <tbody>
            {displayed.map((fund, index) => (
              <motion.tr
                key={fund.isin}
                className="border-b border-neutral-50 hover:bg-primary-50/50"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.02 }}
              >
                <td className="py-2 text-neutral-700">{fund.name}</td>
                <td className="py-2 text-right font-mono text-neutral-800">
                  {fund.nav.toLocaleString('sv-SE', { minimumFractionDigits: 2 })}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {funds.length > 15 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 text-xs text-primary-600 hover:text-primary-800 font-medium transition-colors"
        >
          {showAll ? '▲ Show fewer' : `▼ Show all ${funds.length} funds`}
        </button>
      )}
    </div>
  );
}

export default FundNavTableSE;
