/**
 * Footer Component
 * Simple footer with copyright information
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-md py-6 md:py-8">
      <div className="shell flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-300" style={{ color: 'var(--muted)' }}>
        <p>&copy; {currentYear} Nishant Kumar Maurya. All rights reserved.</p>
        <p>
          Built with <span className="text-accent">Next.js</span> &{' '}
          <span className="text-accent">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
