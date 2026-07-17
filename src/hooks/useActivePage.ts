import { useState, useCallback } from 'react';
import type { Page } from '../types';

export function useActivePage() {
  const [activePage, setActivePage] = useState<Page>('home');

  const navigate = useCallback((page: Page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  }, []);

  return { activePage, navigate };
}
