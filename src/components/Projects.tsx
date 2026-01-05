/**
 * Projects Component
 * Displays featured projects in a grid layout
 * Each card includes description, tech stack, and GitHub link
 */

'use client';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'HealthCheck – AI Symptom Analyzer',
    description:
      'AI-powered symptom analyzer with chatbot-like guidance for early health insights, backed by an ML model and clean reporting.',
    technologies: ['Python', 'Flask', 'SQLite', 'Machine Learning'],
    githubUrl: 'https://github.com/devotemaurya/Health_ai',
  },
  {
    title: 'Crop Yield Prediction',
    description:
      'Predicts crop yield from soil and weather parameters, offering interactive visualizations to support smarter agricultural planning.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    githubUrl: 'https://github.com/devotemaurya/crop-yield-prediction',
  },
  {
    title: 'Diabetes Prediction System',
    description:
      'Compares multiple ML models (SVM, Logistic Regression) to forecast diabetes risk, focusing on accuracy and interpretability.',
    technologies: ['Python', 'NumPy', 'Pandas', 'SVM', 'Logistic Regression'],
    githubUrl: 'https://github.com/devotemaurya/Diabetes-prediction',
  },
  {
    title: 'Mandir Website – Dugdheshwar Nath Mahadev Temple',
    description:
      'Informational temple website with gallery, events, feedback form (FormSubmit), contributor list, smooth scrolling, and Google Translate integration.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Google Translate', 'FormSubmit'],
    githubUrl: 'https://github.com/devotemaurya/Temple',
    liveUrl: 'https://elaborate-madeleine-6ae70b.netlify.app/',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 border-t border-dark-700"
    >
      <div className="container-section">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className={`card p-6 md:p-8 flex flex-col animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold text-slate-50 mb-3 line-clamp-2 hover:text-primary-400 transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-500/10 text-primary-300 rounded text-xs font-medium border border-primary-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors group"
                  aria-label="GitHub repository"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.371 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.418-4.042-1.418-.545-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.762-1.605-2.665-.305-5.468-1.334-5.468-5.931 0-1.31.47-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.605-.015 2.901-.015 3.293 0 .318.192.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  <span className="sr-only">GitHub repository</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 font-semibold hover:text-primary-300 transition-colors group"
                  >
                    View Live
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
