import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HandThumbUpIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { useSuggestionContext } from '../../../context/SuggestionContext';

function SuggestionBoard() {
  const { suggestions, addSuggestion, upvoteSuggestion } = useSuggestionContext();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addSuggestion(inputValue);
    setInputValue('');
  };

  const sorted = [...suggestions].sort((a, b) => {
    if (b.votes !== a.votes) return b.votes - a.votes;
    return a.createdAt - b.createdAt;
  });

  return (
    <div
      className="bg-white rounded-xl shadow-soft w-full flex flex-col"
      data-testid="suggestion-board"
    >
      {/* Header */}
      <div className="list-header p-4 border-b border-neutral-100 flex items-center gap-2">
        <LightBulbIcon className="h-5 w-5 text-primary-500" />
        <h2 className="font-medium text-lg text-neutral-800">Suggestion Board</h2>
      </div>

      {/* Input area */}
      <div className="p-4 border-b border-neutral-100">
        <form onSubmit={handleSubmit} className="flex gap-2" data-testid="suggestion-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Share a suggestion…"
            className="flex-1 text-sm border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent placeholder-neutral-400"
            data-testid="suggestion-input"
          />
          <motion.button
            type="submit"
            disabled={!inputValue.trim()}
            className="px-4 py-2 text-sm font-medium bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-200 disabled:text-neutral-400 text-white rounded-lg transition-colors"
            whileTap={inputValue.trim() ? { scale: 0.97 } : {}}
            data-testid="suggestion-submit"
          >
            Add
          </motion.button>
        </form>
      </div>

      {/* Suggestions list */}
      <div className="list-body p-4 grow overflow-y-auto max-h-[50vh] flex flex-col gap-2">
        <AnimatePresence>
          {sorted.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-neutral-500 py-4 font-medium text-sm"
              data-testid="suggestion-empty"
            >
              No suggestions yet — be the first!
            </motion.p>
          ) : (
            sorted.map((suggestion) => (
              <motion.div
                key={suggestion.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-start justify-between gap-3 rounded-xl border border-neutral-100 bg-white hover:border-primary-100 hover:bg-primary-50/30 p-3 shadow-xs transition-all duration-200"
                data-testid={`suggestion-card-${suggestion.id}`}
              >
                <p className="text-sm text-neutral-800 flex-1">{suggestion.text}</p>
                <motion.button
                  type="button"
                  onClick={() => upvoteSuggestion(suggestion.id)}
                  className="flex items-center gap-1 text-xs font-medium text-primary-600 hover:text-primary-800 bg-primary-50 hover:bg-primary-100 px-2 py-1 rounded-lg transition-colors shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.93 }}
                  data-testid={`upvote-${suggestion.id}`}
                >
                  <HandThumbUpIcon className="h-3.5 w-3.5" />
                  <span data-testid={`vote-count-${suggestion.id}`}>{suggestion.votes}</span>
                </motion.button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SuggestionBoard;
