import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="mx-auto mt-4 w-[92%] max-w-6xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="text-cyan-300 font-semibold tracking-widest text-sm sm:text-base uppercase">
            Bhaskar Talukder
          </a>

          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-white/80 hover:text-cyan-300 transition">About</a>
            <a href="#skills" className="text-white/80 hover:text-cyan-300 transition">Skills</a>
            <a href="#projects" className="text-white/80 hover:text-cyan-300 transition">Projects</a>
            <a href="#contact" className="text-white/80 hover:text-cyan-300 transition">Contact</a>
          </div>

          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white hover:bg-white/20 transition"
          >
            {theme === 'neon' ? (
              <Sun className="h-4 w-4 text-yellow-300" />
            ) : (
              <Moon className="h-4 w-4 text-cyan-300" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
