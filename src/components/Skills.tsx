/**
 * Skills Component
 * Displays technical skills organized by category
 * Features animated skill badges
 */

'use client';

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Flask'],
  },
  {
    title: 'Databases',
    skills: ['SQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-dark-900 border-t border-dark-700"
    >
      <div className="container-section">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Skills & Technologies
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={category.title}
              className={`card p-6 md:p-8 animate-fade-in-up delay-${index * 100}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-primary-400 mb-6">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary-500/10 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30 hover:bg-primary-500/20 hover:border-primary-500/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
