import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchFunds } from '../services/fundService';

function FundNavTable() {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFunds().then((data) => {
      setFunds(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-2" data-testid="fund-nav-loading">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-8 bg-neutral-100 rounded" />
        ))}
      </div>
    );
  }

  return (
    <div data-testid="fund-nav-table">
      <h3 className="text-lg font-semibold text-neutral-800 mb-3">Fund NAV</h3>
      <div className="overflow-y-auto max-h-80">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-white">
            <tr className="text-left text-neutral-500 border-b border-neutral-200">
              <th className="pb-2 font-medium">Fund</th>
              <th className="pb-2 font-medium text-right">NAV</th>
            </tr>
          </thead>
          <tbody>
            {funds.map((fund, index) => (
              <motion.tr
                key={fund.id}
                className="border-b border-neutral-50 hover:bg-primary-50/50"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                data-testid={`fund-row-${fund.id}`}
              >
                <td className="py-2 text-neutral-700">{fund.name}</td>
                <td className="py-2 text-right font-mono text-neutral-800">
                  {fund.nav.toLocaleString('nb-NO', { minimumFractionDigits: 2 })}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FundNavTable;
