import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsProjects from './components/SkillsProjects';
import AboutContact from './components/AboutContact';

function App() {
  const [theme, setTheme] = useState('neon'); // 'neon' | 'minimal'

  const bgClass = useMemo(
    () =>
      theme === 'neon'
        ? 'bg-[#0a0b14]'
        : 'bg-gradient-to-b from-slate-900 via-slate-950 to-black',
    [theme]
  );

  return (
    <div className={`${bgClass} text-white min-h-screen relative`}>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'neon' ? 'minimal' : 'neon'))} />

      {/* Neon grid background */}
      <div className="pointer-events-none fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.25),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Stars / particles */}
      <Stars />

      <main className="relative">
        <Hero theme={theme} />
        <AboutContact />
        <SkillsProjects theme={theme} />
        <footer className="py-14 text-center text-sm text-cyan-100/70">
          <span className="opacity-80">© {new Date().getFullYear()} Bhaskar Talukder — Built with neon and glass.</span>
        </footer>
      </main>
    </div>
  );
}

function Stars() {
  // Render a handful of softly animated star dots
  const dots = Array.from({ length: 40 }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 200; // allow scroll area
    const size = Math.random() * 2 + 1;
    const delay = Math.random() * 2;
    const color = Math.random() > 0.5 ? '#22d3ee' : '#a78bfa';
    return (
      <span
        key={i}
        className="pointer-events-none absolute rounded-full blur-[0.5px]"
        style={{
          left: `${left}%`,
          top: `${top}vh`,
          width: size,
          height: size,
          background: color,
          boxShadow: `0 0 8px ${color}`,
          animation: `floatPulse 3s ease-in-out ${delay}s infinite` as any,
        }}
      />
    );
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden>
      <style>
        {`@keyframes floatPulse { 0%,100%{ transform: translateY(0); opacity:.9 } 50%{ transform: translateY(-6px); opacity:.6 } }`}
      </style>
      {dots}
    </div>
  );
}

export default App;
