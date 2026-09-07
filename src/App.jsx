import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
} from 'react';
import {
  CalendarDaysIcon,
  ChartBarSquareIcon,
} from '@heroicons/react/24/outline';

import DashboardPanel from './features/dashboard/components/DashboardPanel';
import SuggestionBoard from './features/dashboard/components/SuggestionBoard';
import VacationPlanner from './features/dashboard/components/VacationPlanner';

const AnnualPlanPage = lazy(() => import('./features/annual-plan/AnnualPlanPage'));

function DashboardView() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row">
      <div className="min-w-0 flex-1">
        <DashboardPanel />
      </div>
      <aside className="w-full shrink-0 lg:w-72" aria-label="Team planning">
        <SuggestionBoard />
        <div className="mt-6">
          <VacationPlanner />
        </div>
      </aside>
    </div>
  );
}

function App() {
  const getViewFromHash = () => (
    window.location.hash === '#annual-plan' ? 'annual-plan' : 'dashboard'
  );
  const [activeView, setActiveView] = useState(getViewFromHash);

  useEffect(() => {
    const handleHashChange = () => setActiveView(getViewFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changeView = (view) => {
    window.location.hash = view === 'annual-plan' ? 'annual-plan' : 'dashboard';
    setActiveView(view);
  };

  return (
    <div className="App min-h-screen stb-gradient-light" data-testid="app">
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4">
          <span className="text-sm font-bold tracking-tight text-neutral-800">
            Nordic Product Management
          </span>
          <div className="flex rounded-xl bg-neutral-100 p-1">
            <button
              aria-current={activeView === 'dashboard' ? 'page' : undefined}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                activeView === 'dashboard'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => changeView('dashboard')}
              type="button"
            >
              <ChartBarSquareIcon aria-hidden="true" className="h-4 w-4" />
              Dashboard
            </button>
            <button
              aria-current={activeView === 'annual-plan' ? 'page' : undefined}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                activeView === 'annual-plan'
                  ? 'bg-white text-primary-600 shadow-sm'
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

      <main className="px-4 py-8 sm:py-10">
        {activeView === 'dashboard' ? (
          <DashboardView />
        ) : (
          <Suspense
            fallback={(
              <p className="py-20 text-center text-sm text-neutral-600" role="status">
                Opening annual plan…
              </p>
            )}
          >
            <AnnualPlanPage />
          </Suspense>
        )}
      </main>
    </div>
  );
}

export default App;
