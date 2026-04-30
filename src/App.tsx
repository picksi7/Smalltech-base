import type { RouteRecord } from 'vite-react-ssg'
import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import SiteLayout from '@/components/site/SiteLayout'
import Home from './pages/Home'
import Manifesto from './pages/Manifesto'
import Research from './pages/Research'
import Community from './pages/Community'
import Partnership from './pages/Partnership'
import Materials from './pages/Materials'
import Join from './pages/Join'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient()

declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...args: unknown[]) => void;
  }
}

// Отправляет в Яндекс Метрику виртуальный хит при каждой смене маршрута.
// В SSG-режиме useEffect не выполняется при пререндере — трекинг работает только в браузере.
function MetrikaPageTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.ym === "function") {
      window.ym(108988295, "hit", window.location.href, {
        referrer: document.referrer,
        title: document.title,
      });
    }
  }, [location.pathname]);

  return null;
}

function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MetrikaPageTracker />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  )
}

// Route definitions used by vite-react-ssg for SSG prerender
// BrowserRouter is used instead of HashRouter so each route gets its own HTML file
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: (
      <Providers>
        <SiteLayout />
      </Providers>
    ),
    entry: 'src/App.tsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'manifesto', element: <Manifesto /> },
      { path: 'research', element: <Research /> },
      { path: 'community', element: <Community /> },
      { path: 'partnership', element: <Partnership /> },
      { path: 'materials', element: <Materials /> },
      { path: 'join', element: <Join /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
