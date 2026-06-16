import React, { createContext, useState, useContext, useEffect } from 'react';

const STORAGE_KEY = 'suggestion-board';

const SuggestionContext = createContext();

export const useSuggestionContext = () => useContext(SuggestionContext);

export const SuggestionProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(suggestions));
  }, [suggestions]);

  const addSuggestion = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newSuggestion = {
      id: `suggestion-${Date.now()}`,
      text: trimmed,
      votes: 0,
      createdAt: Date.now(),
    };
    setSuggestions((prev) => [...prev, newSuggestion]);
  };

  const upvoteSuggestion = (id) => {
    setSuggestions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, votes: s.votes + 1 } : s))
    );
  };

  return (
    <SuggestionContext.Provider value={{ suggestions, addSuggestion, upvoteSuggestion }}>
      {children}
    </SuggestionContext.Provider>
  );
};
