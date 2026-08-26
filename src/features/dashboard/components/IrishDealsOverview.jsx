import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import irishDealsData from '../data/irishDealsData';

const monthLabel = (m) => {
  const [y, mo] = m.split('-');
  const names = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${names[parseInt(mo, 10) - 1]} ${y.slice(2)}`;
};

const fmtCcy = (val, ccy) => {
  const abs = Math.abs(val);
  const prefix = val < 0 ? '-' : '';
  if (abs >= 1e9) return `${prefix}${ccy} ${(abs / 1e9).toFixed(2)}bn`;
  if (abs >= 1e6) return `${prefix}${ccy} ${(abs / 1e6).toFixed(2)}m`;
  if (abs >= 1e3) return `${prefix}${ccy} ${(abs / 1e3).toFixed(0)}k`;
  return `${prefix}${ccy} ${abs.toLocaleString('en-GB')}`;
};

function IrishDealsOverview() {
  const [expandedFund, setExpandedFund] = useState(null);
  const { funds, period } = irishDealsData;

  const totalDeals = funds.reduce((s, f) => s + f.totalDeals, 0);

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="irish-deals-overview"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-neutral-800">
          Irish Funds — YTD Deal Overview
        </h3>
        <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
          {totalDeals} deals
        </span>
      </div>

      <p className="text-[10px] text-neutral-400">{period} · AMX UCITS CCF platform</p>

      {funds.map((fund) => {
        const isExpanded = expandedFund === fund.isin;
        const isPositiveNet = fund.netFlow >= 0;

        // 2026 YTD subset
        const ytd2026 = fund.monthly.filter((m) => m.month.startsWith('2026'));
        const ytdIn = ytd2026.reduce((s, m) => s + m.inflow, 0);
        const ytdOut = ytd2026.reduce((s, m) => s + m.outflow, 0);
        const ytdNet = ytdIn + ytdOut;

        return (
          <motion.div
            key={fund.isin}
            className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
            layout
          >
            <button
              className="w-full text-left p-4 hover:bg-neutral-50 transition-colors"
              onClick={() => setExpandedFund(isExpanded ? null : fund.isin)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-neutral-800">{fund.name}</span>
                <span className="text-[10px] text-neutral-400">{fund.ccy}</span>
              </div>
              <p className="text-[10px] text-neutral-400 mb-2">ISIN: {fund.isin}</p>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-[10px] text-neutral-400">Inflows</p>
                  <p className="text-xs font-semibold text-green-600">
                    {fmtCcy(fund.totalInflows, fund.ccy)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400">Outflows</p>
                  <p className="text-xs font-semibold text-red-500">
                    {fmtCcy(fund.totalOutflows, fund.ccy)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400">Net Flow</p>
                  <p className={`text-xs font-bold ${isPositiveNet ? 'text-green-700' : 'text-red-600'}`}>
                    {fmtCcy(fund.netFlow, fund.ccy)}
                  </p>
                </div>
              </div>

              {/* 2026 YTD summary */}
              <div className="mt-2 pt-2 border-t border-neutral-100">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium text-neutral-500">2026 YTD</span>
                  <span className={`text-[11px] font-bold ${ytdNet >= 0 ? 'text-green-700' : 'text-red-600'}`}>
                    Net: {fmtCcy(ytdNet, fund.ccy)}
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-primary-500 mt-2">
                {isExpanded ? '▲ Hide monthly' : '▼ Show monthly breakdown'}
              </p>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="px-4 pb-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="space-y-1">
                    <div className="grid grid-cols-5 text-[10px] text-neutral-400 font-medium pb-1 border-b border-neutral-100">
                      <span>Month</span>
                      <span className="text-right">Inflows</span>
                      <span className="text-right">Outflows</span>
                      <span className="text-right">Net</span>
                      <span className="text-right">Deals</span>
                    </div>
                    {fund.monthly.map((m) => {
                      const net = m.inflow + m.outflow;
                      const is2026 = m.month.startsWith('2026');
                      return (
                        <div
                          key={m.month}
                          className={`grid grid-cols-5 text-[11px] py-0.5 ${is2026 ? 'bg-primary-50 rounded px-1 -mx-1 font-medium' : ''}`}
                        >
                          <span className="text-neutral-600">{monthLabel(m.month)}</span>
                          <span className="text-right text-green-600">
                            {m.inflow > 0 ? fmtCcy(m.inflow, '') : '—'}
                          </span>
                          <span className="text-right text-red-500">
                            {m.outflow < 0 ? fmtCcy(m.outflow, '') : '—'}
                          </span>
                          <span className={`text-right font-medium ${net >= 0 ? 'text-green-700' : 'text-red-600'}`}>
                            {fmtCcy(net, '')}
                          </span>
                          <span className="text-right text-neutral-400">{m.deals}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default IrishDealsOverview;
