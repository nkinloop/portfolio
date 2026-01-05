/**
 * About Page
 * Concise bio with highlights and values.
 */

import Link from 'next/link';

export const metadata = {
  title: 'About | Nishant Kumar Maurya',
};

export default function AboutPage() {
  return (
    <section className="page-padding">
      <div className="shell space-y-8">
        <div className="glass-card animate-fade-in-up space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">About</p>
          <h1 className="page-title">Nishant Kumar Maurya</h1>
          <p className="page-lead max-w-3xl">
            I am a Computer Science and Engineering undergraduate at SASTRA Deemed University, currently in my final year. I enjoy building end-to-end applications that combine backend logic, databases, and intelligent features. My interests span full-stack web development, machine learning applications, and software engineering fundamentals. I believe in writing maintainable code, following SDLC principles, and learning by building real projects rather than just theoretical models.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="chip chip-accent">Full-Stack</span>
            <span className="chip">Machine Learning</span>
            <span className="chip">Clean Architecture</span>
            <span className="chip">SDLC</span>
          </div>
        </div>

        <div className="glass-card space-y-3">
          <h2 className="text-2xl font-semibold text-slate-50">Education</h2>
          <div className="space-y-1">
            <p className="text-lg font-semibold text-slate-100">Bachelor of Technology – Computer Science & Engineering</p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>SASTRA Deemed University, Thanjavur</p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>CGPA: 7.03 / 10</p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>Duration: 2022 – 2026</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {[{
            title: 'How I build',
            body: 'End-to-end delivery with emphasis on clean code, testing, and real-world usability.'
          },{
            title: 'Interests',
            body: 'Full-stack web, ML applications, data handling, and deployment workflows.'
          },{
            title: 'Principles',
            body: 'Maintainability, SDLC discipline, documentation, and continuous learning by shipping.'
          }].map((item) => (
            <div key={item.title} className="glass-card space-y-2">
              <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
              <p className="text-sm text-slate-300" style={{ color: 'var(--muted)' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card space-y-3">
          <h2 className="text-2xl font-semibold text-slate-50">Certifications</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>Introduction to Artificial Intelligence – Coursera (2025)</li>
            <li>Data Science – Infosys Springboard (2025)</li>
            <li>Databases with Python (MySQL, SQLite, MongoDB) – Udemy (2025)</li>
            <li>Career Essentials in Software Development – Microsoft & LinkedIn (2024)</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/projects" className="btn-primary">View Projects</Link>
          <Link href="/contact" className="btn-ghost">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}
