import React from 'react';
import { motion } from 'framer-motion';
import scorecardData from '../data/scorecardData';

function ScorecardTable({ items, columns }) {
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
          {items.map((item) => (
            <tr key={item.ref} className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="py-1.5 px-2 text-neutral-400">{item.ref}</td>
              <td className="py-1.5 px-2 text-neutral-700 font-medium">{item.indicator}</td>
              {columns.map((col) => (
                <td key={col.key} className="py-1.5 px-2 text-right text-neutral-800 font-mono">
                  {typeof item[col.key] === 'number' ? item[col.key].toLocaleString('en-GB') : item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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

  const monthColumns = [
    { key: 'may', label: 'May 2026' },
    { key: 'apr', label: 'Apr 2026' },
    { key: 'ytd', label: 'YTD' },
  ];

  const cashColumns = [
    { key: 'may', label: 'May 2026' },
    { key: 'apr', label: 'Apr 2026' },
  ];

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
        <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
          {period} · Source: JPMorgan
        </span>
      </div>

      {/* Dealing Stats */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          {dealing.title}
        </h4>
        <ScorecardTable items={dealing.items} columns={monthColumns} />
      </div>

      {/* Registration Stats */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
          {registration.title}
        </h4>
        <ScorecardTable items={registration.items} columns={monthColumns} />
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
        As at last business day of reporting month. Source: JPMorgan Fund Services.
      </p>
    </motion.div>
  );
}

export default LuxScorecard;
