import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AboutCard />
        <ContactCard />
      </div>
    </section>
  );
}

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
    >
      <div className="absolute -inset-[1px] rounded-2xl pointer-events-none bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee_0deg,#a78bfa_120deg,#f472b6_240deg,#22d3ee_360deg)] opacity-30 blur-xl" />
      <div className="relative">
        <h3
          className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400"
          style={{ fontFamily: "'Orbitron', 'Audiowide', sans-serif" }}
        >
          About Me
        </h3>
        <p className="mt-4 text-cyan-100/80" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
          I’m a full stack developer passionate about building immersive, performant interfaces and robust backends. I love blending neon retro aesthetics with modern engineering — making products that feel alive.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <a href="https://github.com/" className="text-cyan-200 hover:text-white transition-colors inline-flex items-center gap-2"><Github size={18}/> GitHub</a>
          <a href="https://linkedin.com/" className="text-fuchsia-200 hover:text-white transition-colors inline-flex items-center gap-2"><Linkedin size={18}/> LinkedIn</a>
          <a href="mailto:hello@example.com" className="text-violet-200 hover:text-white transition-colors inline-flex items-center gap-2"><Mail size={18}/> Email</a>
        </div>
      </div>
    </motion.div>
  );
}

function ContactCard() {
  return (
    <motion.form
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
      onSubmit={(e) => e.preventDefault()}
    >
      <h3
        className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400"
        style={{ fontFamily: "'Orbitron', 'Audiowide', sans-serif" }}
      >
        Contact
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-4">
        <input type="text" placeholder="Your name" className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 backdrop-blur-xl" />
        <input type="email" placeholder="Email" className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 backdrop-blur-xl" />
        <textarea placeholder="Message" rows={4} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 backdrop-blur-xl" />
      </div>
      <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-white/10 px-5 py-3 text-cyan-100 backdrop-blur-lg shadow-[0_0_22px_rgba(56,189,248,0.25)] hover:bg-white/20 transition-colors">
        <Send size={16} /> Send Message
      </button>
    </motion.form>
  );
}
