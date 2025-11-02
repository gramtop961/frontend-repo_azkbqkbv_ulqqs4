import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Commerce',
    description: 'A frictionless storefront with cinematic product reveals and buttery scrolling.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    gradient: 'from-fuchsia-500/30 via-purple-500/20 to-blue-500/20',
  },
  {
    title: 'Cortex Dashboard',
    description: 'Real-time analytics visualizations with adaptive theming and tactile gestures.',
    tags: ['React', 'D3', 'Radix UI'],
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
  },
  {
    title: 'Astra Docs',
    description: 'Developer docs engine focused on readability, search, and micro-interactions.',
    tags: ['Next.js', 'MDX', 'Algolia'],
    gradient: 'from-amber-500/20 via-rose-500/20 to-fuchsia-500/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 md:mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50">Projects</h2>
            <p className="mt-3 text-zinc-400 max-w-2xl">
              A selection of recent work that blends aesthetics, motion, and performance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-6 min-h-[220px] flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-zinc-100 group-hover:tracking-tight transition-all">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-zinc-300/90 text-sm">
                    {p.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-black/30 border border-white/10 px-3 py-1 text-xs text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ scale: 1.02 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl group-hover:bg-white/20"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
