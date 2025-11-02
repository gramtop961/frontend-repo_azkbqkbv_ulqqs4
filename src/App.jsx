import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-zinc-200 selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      {/* Subtle starry background texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.06),transparent_40%)]" />

      {/* Content */}
      <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md/40 bg-black/20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-fuchsia-500 shadow-[0_0_24px_4px_rgba(236,72,153,0.55)]" />
            <span className="font-semibold tracking-tight text-zinc-100">Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white/90 transition-colors">About</a>
            <a href="#projects" className="hover:text-white/90 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white/90 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-12 mt-20">
        <div className="mx-auto max-w-7xl px-6 text-sm text-zinc-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Crafted with care — design-driven development</p>
          <a href="#top" className="hover:text-zinc-200 transition-colors">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
