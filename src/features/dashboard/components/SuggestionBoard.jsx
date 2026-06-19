import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

const STORAGE_KEY = 'nordic-pm-suggestions';

function loadSuggestions() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveSuggestions(suggestions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(suggestions));
}

function SuggestionBoard() {
  const [suggestions, setSuggestions] = useState(loadSuggestions);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    saveSuggestions(suggestions);
  }, [suggestions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newSuggestion = {
      id: Date.now().toString(),
      name: name.trim() || 'Anonymous',
      text: text.trim(),
      createdAt: new Date().toISOString(),
    };
    setSuggestions([newSuggestion, ...suggestions]);
    setName('');
    setText('');
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setSuggestions(suggestions.filter((s) => s.id !== id));
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-soft p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="suggestion-board"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-neutral-800 tracking-tight">
          Suggestion Board
        </h2>
        <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
          {suggestions.length} {suggestions.length === 1 ? 'idea' : 'ideas'}
        </span>
      </div>

      <p className="text-xs text-neutral-500 mb-4">
        Submit ideas for what to include in the dashboard.
      </p>

      <AnimatePresence>
        {showForm ? (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-2 mb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-sm px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <textarea
              placeholder="Your suggestion..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="w-full text-sm px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
              required
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 py-2 px-3 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg font-medium transition-colors"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="py-2 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 text-sm rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.button
            className="flex items-center justify-center w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors mb-4"
            onClick={() => setShowForm(true)}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Suggestion
          </motion.button>
        )}
      </AnimatePresence>

      {/* Suggestions list */}
      <div className="space-y-2 max-h-96 overflow-y-auto">
        <AnimatePresence>
          {suggestions.map((s) => (
            <motion.div
              key={s.id}
              className="group bg-neutral-50 rounded-lg p-3 border border-neutral-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              layout
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm text-neutral-700 flex-1">{s.text}</p>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-red-500 transition-all shrink-0 mt-0.5"
                  title="Delete suggestion"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] text-neutral-400">
                  — {s.name}
                </span>
                <span className="text-[10px] text-neutral-300">
                  {new Date(s.createdAt).toLocaleDateString('en-GB')}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {suggestions.length === 0 && (
          <p className="text-xs text-neutral-400 text-center py-4">
            No suggestions yet. Be the first to add one!
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default SuggestionBoard;
