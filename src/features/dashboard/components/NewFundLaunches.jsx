import React, { useState } from 'react';
import { motion } from 'framer-motion';
import newFunds2026 from '../data/newFunds2026';

function PerformanceChart({ fund }) {
  const [hovered, setHovered] = useState(null);
  const { performance } = fund;
  if (!performance || performance.length < 2) return null;

  const navValues = performance.map((p) => p.nav);
  const minNav = Math.min(...navValues) - 1;
  const maxNav = Math.max(...navValues) + 1;
  const range = maxNav - minNav;

  const width = 200;
  const height = 60;
  const padding = 4;

  const pointsData = performance.map((p, i) => {
    const x = padding + (i / (performance.length - 1)) * (width - 2 * padding);
    const y = height - padding - ((p.nav - minNav) / range) * (height - 2 * padding);
    return { x, y, month: p.month, nav: p.nav };
  });

  const polyline = pointsData.map((p) => `${p.x},${p.y}`).join(' ');
  const totalReturn = ((navValues[navValues.length - 1] / navValues[0]) - 1) * 100;
  const isPositive = totalReturn >= 0;
  const color = isPositive ? '#16a34a' : '#dc2626';

  return (
    <div className="flex items-center gap-3">
      <a
        href={fund.url}
        target="_blank"
        rel="noopener noreferrer"
        title="Klikk for å se fondssiden"
        className="relative cursor-pointer"
        onMouseLeave={() => setHovered(null)}
      >
        <svg width={width} height={height} className="shrink-0 hover:opacity-80 transition-opacity">
          <polyline
            points={polyline}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Data points — interactive */}
          {pointsData.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={hovered === i ? 4.5 : 2.5}
              fill={color}
              className="transition-all duration-150"
              onMouseEnter={() => setHovered(i)}
            />
          ))}
        </svg>
        {/* Tooltip on hover */}
        {hovered !== null && (
          <div
            className="absolute -top-8 bg-neutral-800 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none z-10"
            style={{ left: pointsData[hovered].x - 20 }}
          >
            {pointsData[hovered].month}: {pointsData[hovered].nav.toFixed(2)}
          </div>
        )}
      </a>
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
        New Fund Launches 2026 – Performance
      </h3>

      <div className="space-y-3">
        {newFunds2026.map((fund, index) => (
          <motion.div
            key={fund.id}
            className="bg-neutral-50 rounded-xl p-4 border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all duration-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex-1 min-w-0">
                <a
                  href={fund.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-neutral-800 hover:text-primary-700 transition-colors truncate block"
                >
                  {fund.name} ↗
                </a>
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
        Avkastning siden lansering. Historisk avkastning er ingen garanti for fremtidig avkastning. Klikk på graf eller fondsnavn for å gå til fondssiden.
      </p>
    </motion.div>
  );
}

export default NewFundLaunches;
