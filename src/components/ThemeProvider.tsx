"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

const THEME_KEYS = ['default', 'violet', 'amber', 'emerald'] as const;
type ThemeKey = (typeof THEME_KEYS)[number];

interface ThemeContextValue {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ThemeProvider
 * Manages accent theme via CSS variables on <html data-theme>
 */
export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('default');

  // Load stored theme on mount
  useEffect(() => {
    const stored = window.localStorage.getItem('accent-theme');
    if (stored && THEME_KEYS.includes(stored as ThemeKey)) {
      setThemeState(stored as ThemeKey);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'default') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    window.localStorage.setItem('accent-theme', theme);
  }, [theme]);

  const setTheme = (value: ThemeKey) => setThemeState(value);

  const cycleTheme = () => {
    const index = THEME_KEYS.indexOf(theme);
    const next = (index + 1) % THEME_KEYS.length;
    setThemeState(THEME_KEYS[next]);
  };

  const value = useMemo(
    () => ({ theme, setTheme, cycleTheme }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * Hook to access theme context
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}
