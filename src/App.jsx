import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsProjects from './components/SkillsProjects';
import AboutContact from './components/AboutContact';

const Stars = ({ count = 45 }) => {
  const stars = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      color: Math.random() > 0.5 ? 'rgba(34,211,238,0.9)' : 'rgba(236,72,153,0.9)',
    })), [count]
  );

  return (
    <>
      <style>
        {`
          @keyframes floatPulse {
            0%, 100% { transform: translateY(0); opacity: 0.7; }
            50% { transform: translateY(-6px); opacity: 1; }
          }
        `}
      </style>
      <div className="pointer-events-none absolute inset-0">
        {stars.map(({ id, top, left, size, delay, color }) => (
          <span
            key={id}
            className="absolute rounded-full"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              background: color,
              boxShadow: `0 0 8px ${color}`,
              animation: `floatPulse 3s ease-in-out ${delay}s infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default function App() {
  const [theme, setTheme] = useState('neon');

  return (
    <div className={theme === 'neon' ? 'min-h-screen bg-[#0a0b14] text-white' : 'min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white'}>
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(34,211,238,0.25) 1px, transparent 1px), radial-gradient(circle at 1px 1px, rgba(236,72,153,0.18) 1px, transparent 1px)',
            backgroundSize: '40px 40px, 60px 60px',
          }}
        />
      </div>

      <Stars />

      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'neon' ? 'minimal' : 'neon'))} />

      <main className="pt-24">
        <Hero />
        <SkillsProjects />
        <AboutContact />
      </main>

      <footer className="relative z-10 mt-24 border-t border-white/10/10 bg-black/20 py-8 text-center text-sm text-white/70">
        <p>
          © {new Date().getFullYear()} Bhaskar Talukder • Built with React + Tailwind • Neon vibes ⚡
        </p>
      </footer>
    </div>
  );
}
