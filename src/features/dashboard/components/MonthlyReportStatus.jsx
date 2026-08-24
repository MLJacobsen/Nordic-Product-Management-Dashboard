import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchMonthlyReportStatus } from '../services/fundService';

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function MonthlyReportStatus() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMonthlyReportStatus().then((data) => {
      setStatus(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse h-24 bg-neutral-100 rounded-xl" data-testid="monthly-report-loading" />
    );
  }

  const { allUploaded, uploaded, total, lateFunds, expectedKey, isPastDeadline } = status;

  // Parse expectedKey (e.g. "2026-04") for display
  const [year, monthStr] = expectedKey.split('-');
  const monthLabel = monthNames[parseInt(monthStr, 10) - 1];
  const periodLabel = `${monthLabel} ${year}`;

  const isLateState = isPastDeadline && !allUploaded;

  return (
    <motion.div
      className={`rounded-xl p-4 ${
        allUploaded
          ? 'bg-green-50 border border-green-200'
          : isLateState
            ? 'bg-red-50 border border-red-200'
            : 'bg-blue-100 border border-blue-200'
      }`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      data-testid="monthly-report-status"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-neutral-800">Monthly Report</h3>
        <span
          className={`text-2xl font-bold ${
            allUploaded ? 'text-green-600' : isLateState ? 'text-red-600' : 'text-blue-700'
          }`}
          data-testid="monthly-report-ratio"
        >
          {uploaded}/{total}
        </span>
      </div>

      <p className="text-xs text-neutral-500 mb-2">
        Expected report: <span className="font-medium">{periodLabel}</span>
        {isPastDeadline ? (
          <span className="ml-2 text-red-500 font-medium">(deadline passed — 5th of month)</span>
        ) : (
          <span className="ml-2 text-neutral-400">(deadline: 5th {monthNames[new Date().getMonth()]})</span>
        )}
      </p>

      {allUploaded ? (
        <p className="text-green-700 text-sm font-medium" data-testid="monthly-report-ok">
          ✓ All funds have uploaded monthly report for {periodLabel}
        </p>
      ) : isLateState ? (
        <div data-testid="monthly-report-late">
          <p className="text-red-700 text-sm font-medium mb-1">
            ✗ {lateFunds.length} funds missing monthly report (late)
          </p>
          <ul className="text-red-600 text-xs space-y-0.5 max-h-32 overflow-y-auto">
            {lateFunds.map((f) => (
              <li key={f.id}>• {f.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div data-testid="monthly-report-pending">
          <p className="text-blue-700 text-sm font-medium mb-1">
            ⏳ {total - uploaded} funds have not uploaded yet (deadline: 5th of month)
          </p>
          <ul className="text-blue-600 text-xs space-y-0.5 max-h-32 overflow-y-auto">
            {lateFunds.map((f) => (
              <li key={f.id}>• {f.name}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default MonthlyReportStatus;
