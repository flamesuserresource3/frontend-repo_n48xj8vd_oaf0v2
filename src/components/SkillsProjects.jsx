import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { title: 'React & Vite', desc: 'SPA architecture, hooks, performance.' },
  { title: 'Tailwind CSS', desc: 'Design systems and utility-first UI.' },
  { title: 'Three.js/Spline', desc: 'Immersive 3D experiences on web.' },
  { title: 'FastAPI', desc: 'Robust Python APIs with async I/O.' },
];

const projects = [
  { title: 'Neon Dashboard', desc: 'A synthwave admin dashboard with charts.' },
  { title: '3D Product Viewer', desc: 'Interactive Spline + React showcase.' },
  { title: 'Portfolio v2', desc: 'Animated portfolio with glass UI.' },
];

const Card = ({ title, desc }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow-[0_0_25px_rgba(236,72,153,0.15)] hover:shadow-[0_0_35px_rgba(236,72,153,0.35)] transition"
  >
    <h3 className="text-lg font-semibold text-white tracking-wide">{title}</h3>
    <p className="mt-2 text-sm text-white/75">{desc}</p>
    <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500" />
  </motion.div>
);

const SkillsProjects = () => {
  return (
    <section id="skills" className="relative z-10 mx-auto mt-24 max-w-6xl px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div id="projects">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
          <p className="mt-1 text-white/70">Selected works that blend design and engineering.</p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.title} title={p.title} desc={p.desc} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
          <p className="mt-1 text-white/70">Core capabilities I bring to every build.</p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <Card key={s.title} title={s.title} desc={s.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsProjects;
