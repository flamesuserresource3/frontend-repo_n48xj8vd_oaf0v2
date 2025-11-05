import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[560px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/tz8rR7dU3k8bDk3s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Neon-Retro Portfolio
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg">
            I craft interactive web experiences with 3D, motion, and a splash of synthwave aesthetics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/90 px-5 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:bg-cyan-400/90 transition">
              <Rocket className="h-4 w-4" /> View Projects
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-pink-400/30 bg-pink-500/20 px-5 py-3 text-sm font-medium text-pink-100 hover:bg-pink-500/30 transition">
              <ExternalLink className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
