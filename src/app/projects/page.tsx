/**
 * Projects Page
 * Glass cards with tech tags and GitHub links.
 */

import Link from 'next/link';

export const metadata = {
  title: 'Projects | Nishant Kumar Maurya',
};

const PROJECTS = [
  {
    title: 'HealthCheck – AI Symptom Analyzer',
    stack: ['Flask', 'Python', 'SQLite', 'Machine Learning'],
    description:
      'Healthcare web app that accepts symptoms, predicts likely conditions via an ML model, and guides users through a chatbot-style flow with downloadable reports.',
    features: [
      'AI-powered symptom analysis',
      'Chat-style interaction for guidance',
      'Symptom history and report export',
      'Secure data handling on SQLite',
    ],
    learnings: [
      'ML model integration into web apps',
      'Validation and error handling for health inputs',
      'Deploying Flask apps with persistence',
    ],
    repo: 'https://github.com/devotemaurya/Health_ai',
  },
  {
    title: 'Crop Yield Prediction',
    stack: ['Python', 'Random Forest', 'Streamlit'],
    description:
      'Predicts crop yield using soil and climate features with an interactive UI for scenario testing and visual insights.',
    features: [
      'Random Forest baseline with tuning',
      'Feature importance and charts',
      'Streamlit UI for quick experiments',
    ],
    learnings: [
      'Feature engineering for agri datasets',
      'Model evaluation and cross-validation',
      'Lightweight deployment with Streamlit',
    ],
    repo: 'https://github.com/devotemaurya/crop-yield-prediction',
  },
  {
    title: 'Diabetes Prediction System',
    stack: ['Python', 'SVM', 'Logistic Regression'],
    description:
      'Compares multiple ML classifiers to estimate diabetes risk, with emphasis on accuracy, interpretability, and dataset preprocessing.',
    features: [
      'SVM and Logistic Regression baselines',
      'Data cleaning and validation',
      'Evaluation with accuracy and error analysis',
    ],
    learnings: [
      'Model comparison workflows',
      'Bias/variance considerations',
      'Communicating model performance',
    ],
    repo: 'https://github.com/devotemaurya/Diabetes-prediction',
  },
  {
    title: 'Mandir Website – Dugdheshwar Nath Mahadev Temple',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A spiritual showcase site with gallery, events, contributor list, feedback form via FormSubmit, smooth scrolling, and Google Translate integration.',
    features: [
      'Gallery and events sections',
      'Google Translate toggle',
      'Feedback form wired with FormSubmit',
      'Smooth scrolling and responsive UI',
    ],
    learnings: [
      'Designing thematic static sites',
      'Accessibility-minded navigation',
      'Static hosting and form handling',
    ],
    repo: 'https://github.com/devotemaurya/Temple',
    live: 'https://elaborate-madeleine-6ae70b.netlify.app/',
  },
];

export default function ProjectsPage() {
  return (
    <section className="page-padding">
      <div className="shell space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Projects</p>
          <h1 className="page-title">Selected work</h1>
          <p className="page-lead max-w-3xl">
            A snapshot of products and experiments—focused on usability, reliability, and measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-7">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.title}
              className="glass-card space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                <span className="badge">{project.stack[0]}</span>
              </div>
              <p className="text-sm md:text-base" style={{ color: 'var(--muted)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-200">Key Features</h4>
                <ul className="list-disc list-inside text-sm" style={{ color: 'var(--muted)' }}>
                  {project.features?.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-200">What I Learned</h4>
                <ul className="list-disc list-inside text-sm" style={{ color: 'var(--muted)' }}>
                  {project.learnings?.map((learn) => (
                    <li key={learn}>{learn}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:translate-x-1 transition-transform"
                  aria-label="GitHub repository"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.371 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.418-4.042-1.418-.545-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.762-1.605-2.665-.305-5.468-1.334-5.468-5.931 0-1.31.47-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.605-.015 2.901-.015 3.293 0 .318.192.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="sr-only">GitHub repository</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>

                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-slate-200 font-semibold hover:translate-x-1 transition-transform"
                  >
                    Live Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
