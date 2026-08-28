import React, { useState } from 'react';
import { motion } from 'framer-motion';
import luxNavData from '../data/luxNavData';

function LuxNavOverview() {
  const [expandedFund, setExpandedFund] = useState(null);

  const { valuationDate, funds } = luxNavData;

  // Check if data might be stale (older than 3 business days)
  // JPM NAVs arrive T+1 to T+3, so valuation date is typically 1-3 days behind
  const today = new Date();
  const valDate = new Date(valuationDate + 'T00:00:00');
  const diffDays = Math.floor((today - valDate) / (1000 * 60 * 60 * 24));
  const isStale = diffDays > 4; // Allow up to 4 calendar days (covers weekends)

  // Check if we're in the update window (before 11 AM on a weekday)
  const hour = today.getHours();
  const isWeekday = today.getDay() >= 1 && today.getDay() <= 5;
  const pendingUpdate = isStale && isWeekday && hour >= 5 && hour < 11;

  const formatDate = (dateStr) => {
    const [y, m, d] = dateStr.split('-');
    return `${d}.${m}.${y}`;
  };

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="lux-nav-overview"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-neutral-800">
          NAV Overview – LUX Funds
        </h3>
        <span className="text-[10px] text-neutral-400">
          {formatDate(valuationDate)}
        </span>
      </div>

      {pendingUpdate && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700">
          ⏳ Waiting for today's NAV from JP Morgan (~10:00)
        </div>
      )}

      {isStale && !pendingUpdate && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700">
          ⚠️ NAV not updated today — update luxNavData.js
        </div>
      )}

      {/* Fund cards */}
      <div className="space-y-2">
        {funds.map((fund) => {
          const primaryClass = fund.shareClasses[0];
          const isExpanded = expandedFund === fund.name;

          return (
            <div key={fund.name} className="border border-neutral-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedFund(isExpanded ? null : fund.name)}
                className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-neutral-50 transition-colors text-left"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-neutral-800 truncate">{fund.name}</p>
                  <p className="text-[10px] text-neutral-400">
                    {fund.shareClasses.length} share class{fund.shareClasses.length > 1 ? 'es' : ''}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <p className="text-xs font-mono font-semibold text-neutral-800">
                      {primaryClass.nav.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}
                    </p>
                    <p className="text-[10px] text-neutral-400">{primaryClass.ccy}</p>
                  </div>
                  <span className={`text-[11px] font-medium px-1.5 py-0.5 rounded ${
                    primaryClass.changePct >= 0
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-700'
                  }`}>
                    {primaryClass.changePct >= 0 ? '+' : ''}{primaryClass.changePct.toFixed(2)}%
                  </span>
                  <span className="text-neutral-300 text-xs">{isExpanded ? '▲' : '▼'}</span>
                </div>
              </button>

              {isExpanded && (
                <motion.div
                  className="border-t border-neutral-100 bg-neutral-50 px-3 py-2 space-y-1.5"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  {fund.shareClasses.map((sc) => (
                    <div key={sc.isin} className="flex items-center justify-between text-[11px]">
                      <div className="flex-1 min-w-0">
                        <span className="text-neutral-600 truncate block">{sc.label}</span>
                        <span className="text-neutral-300 text-[9px]">{sc.isin}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-neutral-700">
                          {sc.nav.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} {sc.ccy}
                        </span>
                        <span className={`font-medium ${sc.changePct >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {sc.changePct >= 0 ? '+' : ''}{sc.changePct.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-neutral-400 italic">
        Source: JP Morgan NAV Report · lux.navproductionteam@jpmorgan.com
      </p>
    </motion.div>
  );
}

export default LuxNavOverview;
