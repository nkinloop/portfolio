/**
 * Skills Page
 * Categories with glass cards and badges.
 */

export const metadata = {
  title: 'Skills | Nishant Kumar Maurya',
};

const SKILLS = [
  {
    title: 'Programming Languages',
    items: ['Python', 'C++', 'C', 'Java (Basics)', 'JavaScript (Basics)'],
  },
  {
    title: 'Web Development',
    items: ['Flask', 'HTML5', 'CSS3', 'SQLite', 'REST APIs'],
  },
  {
    title: 'Machine Learning',
    items: ['scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Streamlit'],
  },
  {
    title: 'Core Concepts',
    items: ['Object Oriented Programming (OOP)', 'Software Development Life Cycle (SDLC)', 'Debugging & Testing', 'Documentation'],
  },
];

export default function SkillsPage() {
  return (
    <section className="page-padding">
      <div className="shell space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Skills</p>
          <h1 className="page-title">Tools I work with</h1>
          <p className="page-lead max-w-3xl">
            A practical set of technologies I use to ship reliable, maintainable products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {SKILLS.map((group, idx) => (
            <div
              key={group.title}
              className="glass-card space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <h3 className="text-xl font-semibold text-slate-50">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="badge">
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
