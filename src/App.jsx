import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

import { TaskProvider } from './context/TaskContext';
import { TagProvider } from './context/TagContext';
import { ListProvider } from './context/ListContext';

import GlobalTaskForm from './features/tasks/components/GlobalTaskForm';
import TaskBoard from './features/lists/components/TaskBoard';

const AnnualPlanPage = lazy(() => import('./features/annual-plan/AnnualPlanPage'));

function TaskDashboard() {
  const [showInput, setShowInput] = useState(false);

  return (
    <TaskProvider>
      <TagProvider>
        <ListProvider>
          <div className="w-full max-w-6xl mx-auto">
              <motion.div 
                className="mb-6 bg-white rounded-2xl shadow-soft p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                data-testid="app-header"
              >
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold text-neutral-800 tracking-tight">Task Dashboard</h1>
                  {/* Stats will be displayed from TaskContext */}
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
              
              {/* The TaskBoard component now manages all task lists */}
            <TaskBoard />
          </div>
        </ListProvider>
      </TagProvider>
    </TaskProvider>
  );
}

function App() {
  const getViewFromHash = () => (
    window.location.hash === '#annual-plan' ? 'annual-plan' : 'tasks'
  );
  const [activeView, setActiveView] = useState(getViewFromHash);

  useEffect(() => {
    const handleHashChange = () => setActiveView(getViewFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changeView = (view) => {
    window.location.hash = view === 'annual-plan' ? 'annual-plan' : 'tasks';
    setActiveView(view);
  };

  return (
    <div
      className="App min-h-screen bg-[linear-gradient(145deg,#f4faf7_0%,#f8f7f2_48%,#eef7f4_100%)]"
      data-testid="app"
    >
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/90 px-4 py-3 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4">
          <span className="text-sm font-bold tracking-tight text-neutral-800">
            Nordic Product Management
          </span>
          <div className="flex rounded-xl bg-neutral-100 p-1">
            <button
              aria-current={activeView === 'tasks' ? 'page' : undefined}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                activeView === 'tasks'
                  ? 'bg-white text-primary-700 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => changeView('tasks')}
              type="button"
            >
              <CheckCircleIcon aria-hidden="true" className="h-4 w-4" />
              Tasks
            </button>
            <button
              aria-current={activeView === 'annual-plan' ? 'page' : undefined}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                activeView === 'annual-plan'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => changeView('annual-plan')}
              type="button"
            >
              <CalendarDaysIcon aria-hidden="true" className="h-4 w-4" />
              Annual plan
            </button>
          </div>
        </div>
      </nav>

      <main className="px-4 py-6 sm:px-6 sm:py-10">
        {activeView === 'tasks' ? (
          <TaskDashboard />
        ) : (
          <Suspense fallback={<p className="py-20 text-center text-sm text-neutral-600" role="status">Opening annual plan…</p>}>
            <AnnualPlanPage />
          </Suspense>
        )}
      </main>
    </div>
  );
}

export default App;
