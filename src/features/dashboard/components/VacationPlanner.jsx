import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WEEKS = {
  Juni: [23, 24, 25, 26],
  Juli: [27, 28, 29, 30, 31],
  August: [32, 33, 34, 35],
};

const STORAGE_KEY = 'stb-vacation-planner-2026';

function loadFromStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function VacationPlanner() {
  const [people, setPeople] = useState(loadFromStorage);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(people));
  }, [people]);

  const addPerson = (e) => {
    e.preventDefault();
    const name = newName.trim();
    if (!name || people.some((p) => p.name === name)) return;
    setPeople([...people, { name, weeks: [] }]);
    setNewName('');
  };

  const toggleWeek = (personIndex, week) => {
    setPeople((prev) =>
      prev.map((p, i) => {
        if (i !== personIndex) return p;
        const weeks = p.weeks.includes(week)
          ? p.weeks.filter((w) => w !== week)
          : [...p.weeks, week];
        return { ...p, weeks };
      })
    );
  };

  const removePerson = (index) => {
    setPeople((prev) => prev.filter((_, i) => i !== index));
  };

  const allWeeks = Object.values(WEEKS).flat();

  return (
    <div className="bg-white rounded-2xl shadow-card p-4" data-testid="vacation-planner">
      <h3 className="text-sm font-bold text-neutral-800 mb-3">🌴 Vacation Planner – Summer 2026</h3>

      {/* Add person form */}
      <form onSubmit={addPerson} className="flex gap-2 mb-3">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Add name..."
          className="flex-1 text-xs px-2 py-1.5 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400"
        />
        <button
          type="submit"
          className="text-xs px-3 py-1.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
        >
          +
        </button>
      </form>

      {/* Calendar grid */}
      {people.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr>
                <th className="text-left text-neutral-500 font-medium pb-1 pr-2">Name</th>
                {Object.entries(WEEKS).map(([month, weeks]) => (
                  <th
                    key={month}
                    colSpan={weeks.length}
                    className="text-center text-neutral-500 font-medium pb-1"
                  >
                    {month}
                  </th>
                ))}
                <th></th>
              </tr>
              <tr>
                <td></td>
                {allWeeks.map((w) => (
                  <td key={w} className="text-center text-neutral-400 pb-1 px-0.5">
                    {w}
                  </td>
                ))}
                <td></td>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {people.map((person, pIdx) => (
                  <motion.tr
                    key={person.name}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    <td className="pr-2 py-1 font-medium text-neutral-700 whitespace-nowrap max-w-[80px] truncate">
                      {person.name}
                    </td>
                    {allWeeks.map((week) => {
                      const isSelected = person.weeks.includes(week);
                      return (
                        <td key={week} className="px-0.5 py-1">
                          <button
                            type="button"
                            onClick={() => toggleWeek(pIdx, week)}
                            className={`w-4 h-4 rounded-sm border transition-colors ${
                              isSelected
                                ? 'bg-green-500 border-green-600'
                                : 'bg-neutral-50 border-neutral-200 hover:border-green-400'
                            }`}
                            title={`Week ${week}`}
                          />
                        </td>
                      );
                    })}
                    <td className="pl-1">
                      <button
                        onClick={() => removePerson(pIdx)}
                        className="text-neutral-300 hover:text-red-500 transition-colors"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      )}

      {people.length === 0 && (
        <p className="text-xs text-neutral-400 italic">None added yet. Add a name to mark vacation.</p>
      )}

      {people.length > 0 && (
        <p className="text-[10px] text-neutral-400 mt-2">Click on week number to mark vacation (green = vacation)</p>
      )}
    </div>
  );
}

export default VacationPlanner;
