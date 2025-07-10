'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { DocsNavigation } from '@/lib/docs-navigation';

interface DocsContextType {
  navigation: DocsNavigation;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  currentPath: string;
  setCurrentPath: (path: string) => void;
}

const DocsContext = createContext<DocsContextType | undefined>(undefined);

interface DocsProviderProps {
  children: React.ReactNode;
  navigation: DocsNavigation;
}

export function DocsProvider({ children, navigation }: DocsProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  // Update current path when location changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Close sidebar on mobile when navigating
  useEffect(() => {
    setSidebarOpen(false);
  }, [currentPath]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Command/Ctrl + K to open search
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setSearchOpen(true);
      }

      // Escape to close search
      if (event.key === 'Escape') {
        setSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const value: DocsContextType = {
    navigation,
    sidebarOpen,
    setSidebarOpen,
    searchOpen,
    setSearchOpen,
    currentPath,
    setCurrentPath,
  };

  return (
    <DocsContext.Provider value={value}>
      {children}
    </DocsContext.Provider>
  );
}

export function useDocs() {
  const context = useContext(DocsContext);
  if (context === undefined) {
    throw new Error('useDocs must be used within a DocsProvider');
  }
  return context;
}
