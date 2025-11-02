import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 600], [0, -60]);
  const yFast = useTransform(scrollY, [0, 600], [0, -120]);
  const blur = useTransform(scrollY, [0, 600], [0, 4]);

  return (
    <section id="top" className="relative h-[100dvh] overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient glow overlays (non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: ySlow, filter: blur.to(v => `blur(${v}px)`) }}
          className="absolute -inset-x-10 -top-20 h-80 bg-gradient-to-b from-fuchsia-500/20 via-purple-500/10 to-transparent"
        />
        <motion.div
          style={{ y: yFast, opacity: 0.8 }}
          className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-slate-950 via-black/40 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_3px_rgba(52,211,153,0.55)]" />
              Available for select projects — 2025
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-zinc-50">
              Design-driven frontend developer crafting premium, interactive web experiences.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-300/90 max-w-2xl">
              I merge aesthetics, motion, and performance to build elegant interfaces with modern
              technologies — focusing on clarity, depth, and delightful details.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-5 py-2.5 text-sm font-medium shadow-[0_8px_30px_rgba(236,72,153,0.35)] transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-sm text-zinc-200 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
