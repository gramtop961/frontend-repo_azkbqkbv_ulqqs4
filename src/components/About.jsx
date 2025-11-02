import React from 'react';
import { Rocket, Code2, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { icon: <Code2 className="h-5 w-5" />, label: 'TypeScript / React' },
  { icon: <Palette className="h-5 w-5" />, label: 'Design Systems' },
  { icon: <Rocket className="h-5 w-5" />, label: 'Performance' },
  { icon: <Sparkles className="h-5 w-5" />, label: 'Motion & 3D' },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50">
              About
            </h2>
            <p className="mt-6 text-zinc-300/90 leading-relaxed">
              I combine a designer’s sensitivity with an engineer’s precision. My process starts
              with narrative and interaction principles, then moves into systems that scale. I value
              accessibility, subtlety, and performance as much as aesthetics.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200"
                >
                  <span className="text-fuchsia-400">{s.icon}</span>
                  {s.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 overflow-hidden">
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <h3 className="text-sm uppercase tracking-widest text-zinc-400">Philosophy</h3>
              <p className="mt-3 text-zinc-300/90 text-sm leading-relaxed">
                Design is how it works and how it feels. I prototype rapidly, validate through micro-
                interactions, and refine with real content. The result is a product that feels
                inevitable.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {['Clarity', 'Rhythm', 'Delight'].map((k) => (
                  <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-sm">
                    <span className="block text-zinc-100 font-medium">{k}</span>
                    <span className="text-zinc-400 text-xs">principle</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
