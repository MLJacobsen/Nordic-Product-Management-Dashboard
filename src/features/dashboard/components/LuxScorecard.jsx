import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import scorecardData from '../data/scorecardData';

function ScorecardTable({ items, columns, onRowClick, expandedRef }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-neutral-200">
            <th className="text-left py-1.5 px-2 text-neutral-500 font-medium">#</th>
            <th className="text-left py-1.5 px-2 text-neutral-500 font-medium">Indicator</th>
            {columns.map((col) => (
              <th key={col.key} className="text-right py-1.5 px-2 text-neutral-500 font-medium">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const isClickable = onRowClick && item.jul !== 0 && item.jul !== '100%';
            const isExpanded = expandedRef === item.ref;
            return (
              <tr
                key={item.ref}
                className={`border-b border-neutral-100 ${
                  isClickable ? 'cursor-pointer hover:bg-blue-50' : 'hover:bg-neutral-50'
                } ${isExpanded ? 'bg-blue-50' : ''}`}
                onClick={() => isClickable && onRowClick(item.ref)}
              >
                <td className="py-1.5 px-2 text-neutral-400">{item.ref}</td>
                <td className="py-1.5 px-2 text-neutral-700 font-medium flex items-center gap-1">
                  {item.indicator}
                  {isClickable && (
                    <span className="text-blue-400 text-[9px]">{isExpanded ? '▼' : '▶'}</span>
                  )}
                </td>
                {columns.map((col) => (
                  <td key={col.key} className="py-1.5 px-2 text-right text-neutral-800 font-mono">
                    {typeof item[col.key] === 'number' ? item[col.key].toLocaleString('en-GB') : item[col.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function DealingBreakdown() {
  const { dealingByFund } = scorecardData;
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
    >
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mt-2 ml-6">
        <p className="text-[10px] font-semibold text-blue-700 mb-2">Dealing breakdown by share class (Jun 2026)</p>
        <table className="w-full text-[10px]">
          <thead>
            <tr className="border-b border-blue-200">
              <th className="text-left py-1 px-1 text-blue-600">Share Class</th>
              <th className="text-right py-1 px-1 text-blue-600">Subs</th>
              <th className="text-right py-1 px-1 text-blue-600">Reds</th>
              <th className="text-right py-1 px-1 text-blue-600">Transfers</th>
              <th className="text-right py-1 px-1 text-blue-600 font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            {dealingByFund.map((row) => (
              <tr key={row.fund} className="border-b border-blue-50">
                <td className="py-1 px-1 text-neutral-700">{row.fund}</td>
                <td className="py-1 px-1 text-right text-green-700 font-mono">{row.subscriptions}</td>
                <td className="py-1 px-1 text-right text-red-600 font-mono">{row.redemptions}</td>
                <td className="py-1 px-1 text-right text-neutral-600 font-mono">{row.transfers}</td>
                <td className="py-1 px-1 text-right text-neutral-800 font-bold font-mono">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function HoldingsBreakdown() {
  const { holdingsByFund } = scorecardData;
  const total = holdingsByFund.reduce((s, h) => s + h.holders, 0);
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
    >
      <div className="bg-purple-50 border border-purple-100 rounded-lg p-3 mt-2 ml-6">
        <p className="text-[10px] font-semibold text-purple-700 mb-2">Holdings by share class ({total} total)</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-[10px]">
          {holdingsByFund.map((row) => (
            <div key={row.fund} className="flex justify-between">
              <span className="text-neutral-600 truncate mr-2">{row.fund}</span>
              <span className="font-mono text-neutral-800 font-medium">{row.holders}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ResidencyBreakdown() {
  const { shareholderByResidency } = scorecardData;
  const maxPct = shareholderByResidency[0]?.pct || 1;
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
    >
      <div className="bg-purple-50 border border-purple-100 rounded-lg p-3 mt-2 ml-6">
        <p className="text-[10px] font-semibold text-purple-700 mb-2">Shareholder residency distribution</p>
        <div className="space-y-1">
          {shareholderByResidency.map((row) => (
            <div key={row.residency} className="flex items-center gap-2 text-[10px]">
              <span className="w-24 text-neutral-600 shrink-0">{row.residency}</span>
              <div className="flex-1 h-3 bg-purple-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-400 rounded-full"
                  style={{ width: `${(row.pct / maxPct) * 100}%` }}
                />
              </div>
              <span className="font-mono text-neutral-700 w-8 text-right">{row.count}</span>
              <span className="font-mono text-neutral-400 w-12 text-right">{row.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StatusBadge({ status }) {
  const isNone = status === 'None';
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
        isNone ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      }`}
    >
      {isNone ? '✓ None reported' : status}
    </span>
  );
}

function LuxScorecard() {
  const { dealing, registration, cash, lateTrading, complaints, period } = scorecardData;
  const [expandedSection, setExpandedSection] = useState(null);

  const monthColumns = [
    { key: 'jul', label: 'Jul 2026' },
    { key: 'jun', label: 'Jun 2026' },
    { key: 'ytd', label: 'YTD' },
  ];

  const cashColumns = [
    { key: 'jul', label: 'Jul 2026' },
    { key: 'jun', label: 'Jun 2026' },
  ];

  const toggleSection = (ref) => {
    setExpandedSection(expandedSection === ref ? null : ref);
  };

  return (
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="lux-scorecard"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-800">
          SICAV Score Card
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">
            Click rows for details
          </span>
          <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
            {period} · Source: JPMorgan
          </span>
        </div>
      </div>

      {/* Dealing Stats */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          {dealing.title}
        </h4>
        <ScorecardTable
          items={dealing.items}
          columns={monthColumns}
          onRowClick={toggleSection}
          expandedRef={expandedSection}
        />
        <AnimatePresence>
          {[1, 2, 3, 4, 7, 8].includes(expandedSection) && <DealingBreakdown />}
        </AnimatePresence>
      </div>

      {/* Registration Stats */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
          {registration.title}
        </h4>
        <ScorecardTable
          items={registration.items}
          columns={monthColumns}
          onRowClick={toggleSection}
          expandedRef={expandedSection}
        />
        <AnimatePresence>
          {expandedSection === 9 && <ResidencyBreakdown />}
          {expandedSection === 11 && <HoldingsBreakdown />}
        </AnimatePresence>
      </div>

      {/* Cash */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
          {cash.title}
        </h4>
        {cash.sections.map((section) => (
          <div key={section.label} className="ml-3">
            <p className="text-[11px] font-medium text-neutral-500 mb-1">{section.label}</p>
            <ScorecardTable items={section.items} columns={cashColumns} />
          </div>
        ))}
        <div className="ml-3">
          <p className="text-[11px] font-medium text-neutral-500 mb-1">Other</p>
          <ScorecardTable items={cash.other} columns={cashColumns} />
        </div>
      </div>

      {/* Late Trading */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
          {lateTrading.title}
        </h4>
        <StatusBadge status={lateTrading.status} />
      </div>

      {/* Complaints & Errors */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          {complaints.title}
        </h4>
        <div className="flex gap-4">
          <div>
            <span className="text-[10px] text-neutral-400 block mb-1">Complaints</span>
            <StatusBadge status={complaints.complaintsStatus} />
          </div>
          <div>
            <span className="text-[10px] text-neutral-400 block mb-1">Errors & Omissions</span>
            <StatusBadge status={complaints.errorsStatus} />
          </div>
        </div>
      </div>

      <p className="text-[10px] text-neutral-400 italic">
        As at last business day of reporting month. Source: JPMorgan Fund Services. Click highlighted rows for detailed breakdowns.
      </p>
    </motion.div>
  );
}

export default LuxScorecard;
