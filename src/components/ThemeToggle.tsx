"use client";

import { useTheme } from './ThemeProvider';

const LABELS: Record<string, string> = {
  default: 'Cyan',
  violet: 'Violet',
  amber: 'Amber',
  emerald: 'Emerald',
};

/**
 * ThemeToggle
 * Cycles through accent color themes using CSS variables.
 */
export default function ThemeToggle() {
  const { theme, cycleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="inline-flex items-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] px-3 py-2 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
      aria-label="Toggle theme color"
    >
      <span
        className="inline-block h-3 w-3 rounded-full shadow-sm"
        style={{
          background: 'var(--accent)',
          boxShadow: '0 0 12px var(--glow)',
        }}
      />
      <span>{LABELS[theme] ?? 'Theme'}</span>
    </button>
  );
}
