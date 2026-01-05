/**
 * Hero Component
 * Main landing section with name, title, and CTA buttons
 * Features smooth animations and gradients
 */

'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-light"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-light" style={{ animationDelay: '2s' }}></div>

      {/* Main content */}
      <div className="container-section relative z-10 text-center">
        {/* Hero Title */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="gradient-text">Nishant Kumar Maurya</span>
        </h1>

        {/* Hero Subtitle */}
        <h2
          className={`text-xl md:text-3xl text-primary-400 font-semibold mb-6 transition-all duration-1000 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Software Engineer / Full Stack Developer
        </h2>

        {/* Hero Tagline */}
        <p
          className={`text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Building elegant solutions to complex problems with clean code and innovative thinking. Passionate about creating exceptional user experiences and learning new technologies.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a href="#projects" className="btn-primary text-center">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary text-center">
            Contact Me
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
