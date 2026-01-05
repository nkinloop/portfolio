/**
 * Contact Component
 * Contact information and social media links
 * Features hover animations and clear CTAs
 */

'use client';

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
      </svg>
    ),
    label: 'Email',
    href: 'mailto:mauryank320@gmail.com',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
      </svg>
    ),
    label: 'GitHub',
    href: 'https://github.com/devotemaurya',
    external: true,
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.83 0-9.741h3.554v1.38c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.394 3.745 4.389v5.58zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.708 0-.955.77-1.71 1.958-1.71 1.187 0 1.927.755 1.940 1.71 0 .95-.753 1.708-1.983 1.708zm1.946 11.597H3.392V9.711h3.891v10.741zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
      </svg>
    ),
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nishant-kumar-maurya-b65746276/',
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-dark-900 border-t border-dark-700"
    >
      <div className="container-section">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text">
          Get In Touch
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-12">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello!
        </p>

        {/* Contact Links */}
        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {CONTACT_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : ''}
              className={`card p-6 md:p-8 flex flex-col items-center justify-center text-center group hover:bg-primary-500/5 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary-400 mb-4 group-hover:scale-110 group-hover:text-primary-300 transition-all duration-300">
                {link.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-primary-400 transition-colors">
                {link.label}
              </h3>
              <p className="text-slate-400 text-sm mt-2 group-hover:text-slate-300 transition-colors">
                {link.label === 'Email' ? 'mauryank320@gmail.com' : `Visit my ${link.label}`}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="mailto:mauryank320@gmail.com" className="btn-primary">
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
