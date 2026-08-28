import React from 'react';
import { expect, vi, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Add custom jest-dom matchers
expect.extend(matchers);

// Clean up after each test
afterEach(() => {
  cleanup();
});

// Mock framer-motion to avoid animation-related test issues
vi.mock('framer-motion', () => {
  return {
    motion: {
      div: ({ children, ...props }) => React.createElement('div', props, children),
      button: ({ children, ...props }) => React.createElement('button', props, children),
      form: ({ children, ...props }) => React.createElement('form', props, children),
      li: ({ children, ...props }) => React.createElement('li', props, children),
      p: ({ children, ...props }) => React.createElement('p', props, children),
      tr: ({ children, ...props }) => React.createElement('tr', props, children)
    },
    AnimatePresence: ({ children }) => children,
  };
});
