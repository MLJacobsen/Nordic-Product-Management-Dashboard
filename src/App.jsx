import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';

import { TaskProvider } from './context/TaskContext';
import { TagProvider } from './context/TagContext';
import { ListProvider } from './context/ListContext';

import GlobalTaskForm from './features/tasks/components/GlobalTaskForm';
import TaskBoard from './features/lists/components/TaskBoard';
import DashboardPanel from './features/dashboard/components/DashboardPanel';

function App() {
  const [showInput, setShowInput] = useState(false);

  return (
    <TaskProvider>
      <TagProvider>
        <ListProvider>
          <div className="App min-h-screen stb-gradient-light flex flex-col items-center py-12 px-4" data-testid="app">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6">
              {/* Nordic PM Dashboard — main content */}
              <div className="flex-1 min-w-0">
                <DashboardPanel />
              </div>

              {/* Task board — sidebar */}
              <div className="w-full lg:w-96 shrink-0">
                <motion.div 
                  className="mb-6 bg-white rounded-2xl shadow-soft p-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  data-testid="app-header"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-neutral-800 tracking-tight">Task Board</h1>
                  </div>
                  
                  <AnimatePresence>
                    {showInput ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                        data-testid="task-form-container"
                      >
                        <GlobalTaskForm onCancel={() => setShowInput(false)} />
                      </motion.div>
                    ) : (
                      <motion.button
                        className="flex items-center justify-center w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors"
                        onClick={() => setShowInput(true)}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        data-testid="show-task-form-button"
                      >
                        <PlusIcon className="h-5 w-5 mr-2" />
                        Add New Task
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <TaskBoard />
              </div>
            </div>
          </div>
        </ListProvider>
      </TagProvider>
    </TaskProvider>
  );
}

export default App;
