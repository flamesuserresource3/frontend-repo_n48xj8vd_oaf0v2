import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase =
    'px-3 py-1 rounded-md text-sm md:text-base font-medium transition-colors duration-300 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${
      scrolled ? 'backdrop-blur-xl bg-white/10' : 'backdrop-blur-lg bg-white/5'
    } border-b border-white/10`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2 text-cyan-300 font-semibold tracking-widest">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_theme(colors.cyan.400)]" />
          <span className="uppercase">Bhaskar</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          <a href="#home" className={`${linkBase}`}>Home</a>
          <a href="#about" className={`${linkBase}`}>About</a>
          <a href="#skills" className={`${linkBase}`}>Skills</a>
          <a href="#projects" className={`${linkBase}`}>Projects</a>
          <a href="#contact" className={`${linkBase}`}>Contact</a>
        </div>

        <button
          aria-label="Toggle theme"
          onClick={onToggleTheme}
          className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:bg-white/20 transition-colors"
        >
          {theme === 'neon' ? <Moon size={16} /> : <Sun size={16} />}
          <span className="hidden sm:inline text-xs">{theme === 'neon' ? 'Minimal' : 'Neon'}</span>
        </button>
      </nav>
    </header>
  );
}
