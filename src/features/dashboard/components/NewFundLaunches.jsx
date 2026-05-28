import React from 'react';
import { motion } from 'framer-motion';
import newFunds2026 from '../data/newFunds2026';

function PerformanceChart({ fund }) {
  const { performance } = fund;
  if (!performance || performance.length < 2) return null;

  const navValues = performance.map((p) => p.nav);
  const minNav = Math.min(...navValues) - 1;
  const maxNav = Math.max(...navValues) + 1;
  const range = maxNav - minNav;

  const width = 200;
  const height = 60;
  const padding = 4;

  const points = performance.map((p, i) => {
    const x = padding + (i / (performance.length - 1)) * (width - 2 * padding);
    const y = height - padding - ((p.nav - minNav) / range) * (height - 2 * padding);
    return `${x},${y}`;
  });

  const polyline = points.join(' ');
  const totalReturn = ((navValues[navValues.length - 1] / navValues[0]) - 1) * 100;
  const isPositive = totalReturn >= 0;

  return (
    <div className="flex items-center gap-3">
      <svg width={width} height={height} className="shrink-0">
        <polyline
          points={polyline}
          fill="none"
          stroke={isPositive ? '#16a34a' : '#dc2626'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Start and end dots */}
        <circle cx={points.split(' ')[0].split(',')[0]} cy={points.split(' ')[0].split(',')[1]} r="2.5" fill={isPositive ? '#16a34a' : '#dc2626'} />
        <circle
          cx={performance.length > 0 ? padding + ((performance.length - 1) / (performance.length - 1)) * (width - 2 * padding) : 0}
          cy={height - padding - ((navValues[navValues.length - 1] - minNav) / range) * (height - 2 * padding)}
          r="2.5"
          fill={isPositive ? '#16a34a' : '#dc2626'}
        />
      </svg>
      <span className={`text-sm font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? '+' : ''}{totalReturn.toFixed(2)}%
      </span>
    </div>
  );
}

function NewFundLaunches() {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="new-fund-launches"
    >
      <h3 className="text-lg font-semibold text-neutral-800">
        New Fund Launches 2026 – Performances
      </h3>

      <div className="space-y-3">
        {newFunds2026.map((fund, index) => (
          <motion.div
            key={fund.id}
            className="bg-neutral-50 rounded-xl p-4 border border-neutral-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-neutral-800 truncate">{fund.name}</h4>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {fund.category} · Lansert {new Date(fund.launchDate).toLocaleDateString('no-NO', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5 italic">{fund.description}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <PerformanceChart fund={fund} />
                <div className="text-right">
                  <span className="text-sm font-bold text-neutral-800">{fund.nav.toFixed(2)}</span>
                  <span className="text-xs text-neutral-500 ml-1">{fund.currency}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-[10px] text-neutral-400 italic">
        Avkastning siden lansering. Historisk avkastning er ingen garanti for fremtidig avkastning.
      </p>
    </motion.div>
  );
}

export default NewFundLaunches;
