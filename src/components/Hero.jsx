import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Hero({ theme }) {
  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(56,189,248,0.35),rgba(168,85,247,0.15)_60%,transparent_80%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]"
          style={{ fontFamily: "'Orbitron', 'Audiowide', sans-serif" }}
        >
          Bhaskar Talukder
        </motion.h1>

        <AnimatedTitles />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 max-w-2xl text-cyan-100/80"
          style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
        >
          Turning ideas into interactive realities.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-cyan-300/30 bg-white/10 px-6 py-3 text-cyan-200 backdrop-blur-lg shadow-[0_0_22px_rgba(56,189,248,0.25)] hover:bg-white/20 hover:text-cyan-100 transition-colors"
        >
          <Rocket className="transition-transform group-hover:rotate-12" size={18} />
          View Projects
        </motion.a>
      </div>
    </section>
  );
}

function AnimatedTitles() {
  const titles = ['Full Stack Developer', 'Designer', 'Creator'];
  return (
    <div className="relative mt-3 h-8 md:h-10 overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: ['0%', '-100%', '-200%', '0%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center"
      >
        {titles.concat(titles[0]).map((t, i) => (
          <div
            key={i}
            className="h-8 md:h-10 flex items-center justify-center text-lg md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]"
            style={{ fontFamily: "'Orbitron', 'Audiowide', sans-serif" }}
          >
            {t}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
