import React from 'react';
import { motion } from 'framer-motion';

function PlannerGuidelines() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="planner-guidelines"
    >
      {/* Header */}
      <div className="stb-gradient rounded-2xl p-6 shadow-card">
        <h2 className="text-2xl font-bold text-white">Microsoft Planner Guidelines</h2>
        <p className="text-primary-200 text-sm mt-1 opacity-80">
          Nordic Product Management | One-page operating principles for structured team use
        </p>
      </div>

      {/* Intro */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
        <p className="text-sm text-neutral-700">
          Planner is a shared team overview — not a personal to-do list. It is used to manage key deadlines, major deliverables and visible ownership.
        </p>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Purpose */}
        <div className="bg-white rounded-xl border border-primary-200 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-primary-800 mb-2">Purpose</h3>
          <p className="text-sm text-neutral-600">
            Use Planner to create a concise team overview of what matters most: deadlines, significant cross-team work and clear ownership.
          </p>
        </div>

        {/* Task standard */}
        <div className="bg-white rounded-xl border border-primary-200 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-primary-800 mb-2">Task standard</h3>
          <p className="text-sm text-neutral-600">
            Each item should have a clear action-oriented title, owner(s), due date and — where relevant — link to supporting material.
          </p>
        </div>

        {/* What to include */}
        <div className="bg-white rounded-xl border border-primary-200 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-primary-800 mb-3">What to include</h3>
          <ul className="text-sm text-neutral-600 space-y-1.5">
            <li>• Important deadlines (regulatory, external, launches)</li>
            <li>• Major deliverables and high-impact work</li>
            <li>• Recurring governance: Board Meetings, Leadership Group (LG), Client Office</li>
            <li>• Clear ownership (one or more responsible persons — ownership must be explicit)</li>
          </ul>
        </div>

        {/* Recurring activities */}
        <div className="bg-white rounded-xl border border-primary-200 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-primary-800 mb-2">Recurring activities</h3>
          <p className="text-sm text-neutral-600">
            Use standardised Planner items for Board Meetings, LG and Client Office. Include date, owner and expected deliverables.
          </p>
        </div>

        {/* What not to include */}
        <div className="bg-white rounded-xl border border-primary-200 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-primary-800 mb-3">What not to include</h3>
          <ul className="text-sm text-neutral-600 space-y-1.5">
            <li>• Personal to-do lists</li>
            <li>• Small or ad hoc tasks</li>
            <li>• Detailed project plans</li>
            <li>• Low-impact activities</li>
          </ul>
          <p className="text-xs text-red-700 font-medium mt-3 italic">
            Rule: If team visibility is not needed, do not add it.
          </p>
        </div>

        {/* Best practice */}
        <div className="bg-white rounded-xl border border-primary-200 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-primary-800 mb-3">Best practice</h3>
          <ul className="text-sm text-neutral-600 space-y-1.5">
            <li>• Keep the setup simple and consistent</li>
            <li>• Use Planner actively in team meetings</li>
            <li>• Avoid duplication — detail lives elsewhere</li>
            <li>• Make ownership easy to see</li>
            <li>• Use Teams integration to keep the overview accessible</li>
          </ul>
        </div>
      </div>

      {/* Guiding principle */}
      <div className="stb-gradient rounded-2xl p-5 shadow-card text-center">
        <p className="text-white text-base font-bold">
          Guiding principle: If others need visibility, add it to Planner. If not, keep it elsewhere.
        </p>
      </div>

      <p className="text-[10px] text-neutral-400 italic text-center">
        Internal working guideline | Nordic Product Management
      </p>
    </motion.div>
  );
}

export default PlannerGuidelines;
