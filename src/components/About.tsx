/**
 * About Component
 * Introduction section with professional background
 * Highlights interests and expertise areas
 */

'use client';

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 border-t border-dark-700"
    >
      <div className="container-section">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          About Me
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Main Content */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a passionate software engineer with expertise in full-stack development. I love crafting web applications that are not only functional but also provide exceptional user experiences. With a strong foundation in multiple programming languages and web technologies, I thrive on solving complex problems and continuously learning new technologies.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              My interests lie in building scalable systems, exploring modern development practices, and contributing to open-source projects. I believe in writing clean, maintainable code and following industry best practices.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-colors">
                <div className="text-primary-400 font-semibold">Problem Solving</div>
                <div className="text-slate-400 text-sm mt-1">Tackling complex challenges</div>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-colors">
                <div className="text-primary-400 font-semibold">Learning</div>
                <div className="text-slate-400 text-sm mt-1">Exploring new technologies</div>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-colors">
                <div className="text-primary-400 font-semibold">Code Quality</div>
                <div className="text-slate-400 text-sm mt-1">Clean & maintainable code</div>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-colors">
                <div className="text-primary-400 font-semibold">Collaboration</div>
                <div className="text-slate-400 text-sm mt-1">Working with great teams</div>
              </div>
            </div>
          </div>

          {/* Right - Visual Interest */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-dark-800 border border-primary-500/30 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="h-2 bg-primary-500/30 rounded-full w-3/4"></div>
                  <div className="h-2 bg-primary-500/20 rounded-full w-full"></div>
                  <div className="h-2 bg-primary-500/30 rounded-full w-4/5"></div>
                  <div className="h-2 bg-primary-500/20 rounded-full w-3/4"></div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="h-2 bg-primary-500/30 rounded-full w-full"></div>
                  <div className="h-2 bg-primary-500/20 rounded-full w-4/5"></div>
                  <div className="h-2 bg-primary-500/30 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
