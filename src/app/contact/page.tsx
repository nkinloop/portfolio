/**
 * Contact Page
 * Glassmorphism card with row layout and accent links.
 */

import Link from 'next/link';

export const metadata = {
  title: 'Contact | Nishant Kumar Maurya',
};

const CONTACT_ROWS = [
  {
    label: 'Name',
    value: 'Nishant Kumar Maurya',
    href: undefined,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'mauryank320@gmail.com',
    href: 'mailto:mauryank320@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 6 7.114 5.093a1.5 1.5 0 0 0 1.772 0L20 6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11A1.5 1.5 0 0 1 4.5 5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Nishant Kumar Maurya',
    href: 'https://www.linkedin.com/in/nishant-kumar-maurya-3875482ba/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441H9.22s.047-8.83 0-9.741h3.554v1.38c.47-.726 1.31-1.761 3.189-1.761 2.328 0 4.074 1.519 4.074 4.781v5.341zM5.337 8.433c-1.144 0-1.889-.754-1.889-1.698 0-.959.761-1.698 1.925-1.698s1.889.739 1.906 1.698c0 .944-.744 1.698-1.942 1.698h0zM3.665 20.452h3.338V10.71H3.665v9.742z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'devotemaurya',
    href: 'https://github.com/devotemaurya',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.386 7.862 10.908.575.107.786-.247.786-.553 0-.273-.01-1.183-.015-2.145-3.198.696-3.873-1.366-3.873-1.366-.524-1.33-1.28-1.685-1.28-1.685-1.046-.716.08-.702.08-.702 1.157.082 1.766 1.188 1.766 1.188 1.029 1.764 2.7 1.255 3.357.96.103-.745.403-1.255.733-1.543-2.553-.291-5.236-1.277-5.236-5.686 0-1.256.45-2.283 1.187-3.088-.119-.291-.515-1.463.113-3.05 0 0 .967-.31 3.17 1.181a11.08 11.08 0 0 1 2.886-.388c.979.005 1.966.132 2.886.388 2.2-1.491 3.165-1.181 3.165-1.181.63 1.587.234 2.759.116 3.05.74.805 1.185 1.832 1.185 3.088 0 4.42-2.688 5.391-5.253 5.676.41.354.777 1.06.777 2.137 0 1.543-.014 2.787-.014 3.167 0 .308.208.666.793.552C20.213 21.382 23.5 17.084 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'Website',
    value: 'nkmaurya.online',
    href: 'https://nkmaurya.online',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a8 8 0 1 0 8 8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M12 4s2.5 2.667 2.5 8S12 20 12 20s-2.5-2.667-2.5-8S12 4 12 4Z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-[#050915] via-[#0a1022] to-[#050915]">
      <div className="w-full max-w-xl">
        <div className="glass-card relative overflow-hidden">
          {/* Glow accents */}
          <div className="pointer-events-none absolute -top-20 -left-10 h-48 w-48 rounded-full bg-[var(--glow)] blur-3xl opacity-60"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-56 w-56 rounded-full bg-[var(--glow)] blur-3xl opacity-50"></div>

          <div className="relative space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-accent">Contact</p>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-50">Let’s get in touch</h1>
              <p className="text-sm md:text-base" style={{ color: 'var(--muted)' }}>
                I’m always open to discussing projects, internships, and learning opportunities.
              </p>
            </div>

            <div className="space-y-3">
              {CONTACT_ROWS.map((item) => {
                const Content = (
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--accent)] shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{item.label}</span>
                      <span className="text-base md:text-lg font-semibold text-slate-100 hover:text-[var(--accent)] transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="block rounded-xl border border-[var(--glass-border)] bg-[var(--glass)]/70 px-4 py-3 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)]"
                  >
                    {Content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[var(--glass-border)] bg-[var(--glass)]/70 px-4 py-3"
                  >
                    {Content}
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/"
                className="btn-primary w-full justify-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
