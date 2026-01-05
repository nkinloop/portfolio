/**
 * Home Page
 * Minimal intro landing (no long scroll)
 */

import Link from 'next/link';

export default function Home() {
  return (
    <section className="page-padding">
      <div className="shell">
        <div className="relative glass-card animate-fade-in-up">
          <div className="absolute inset-0 blur-3xl opacity-60" style={{ background: 'radial-gradient(circle at 20% 20%, var(--glow), transparent 40%)' }}></div>
          <div className="relative space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Software Engineer | Full-Stack & ML Enthusiast</p>
            <h1 className="page-title leading-tight">
              Nishant Kumar Maurya
            </h1>
            <p className="page-lead max-w-2xl">
              I build practical full-stack and machine learning solutions with a focus on clean architecture, real-world usability, and continuous learning.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="chip chip-accent">Full Stack Development</span>
              <span className="chip">UI Engineering</span>
              <span className="chip">API Design</span>
              <span className="chip">Cloud</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/projects" className="btn-primary">View Projects</Link>
              <Link href="/contact" className="btn-ghost">Contact Me</Link>
              <Link href="/about" className="btn-ghost">About</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
