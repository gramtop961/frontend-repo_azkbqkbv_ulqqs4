import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — your message has been noted.');
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50">Let’s build something remarkable</h2>
            <p className="mt-4 text-zinc-400 max-w-xl">
              I collaborate with teams that value craft and clarity. Share a few details and I’ll get back
              to you soon.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ['Response', 'within 48h'],
                ['Timezone', 'UTC ±2'],
                ['Availability', 'limited'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-zinc-100 font-medium">{k}</div>
                  <div className="text-zinc-400 text-sm">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-zinc-300">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm text-zinc-300">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm text-zinc-300">Message</label>
                <textarea
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                  placeholder="Tell me about your project, goals, and timelines"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-5 py-2.5 text-sm font-medium shadow-[0_8px_30px_rgba(236,72,153,0.35)] transition-colors"
                >
                  Send message
                </button>
                <span className="text-sm text-emerald-400/90">{status}</span>
              </div>
            </div>

            {/* soft aura */}
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
