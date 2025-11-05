import React from 'react';
import { Mail, Linkedin, Send, Github } from 'lucide-react';

const AboutContact = () => {
  return (
    <section id="about" className="relative z-10 mx-auto mt-24 max-w-6xl px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold text-white">About</h2>
          <p className="mt-3 text-white/80">
            I’m Bhaskar Talukder, a front‑end engineer focused on creating delightful, high‑performance interfaces.
            I love mixing motion, 3D, and bold colors to build memorable experiences.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        <div id="contact" className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-white/80">Have a project in mind? Let’s talk.</p>
          <form
            className="mt-4 grid grid-cols-1 gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = form.name.value;
              const email = form.email.value;
              const message = form.message.value;
              const mailto = `mailto:hello@example.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`;
              window.location.href = mailto;
            }}
          >
            <input name="name" required placeholder="Your Name" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400" />
            <input name="email" type="email" required placeholder="Your Email" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400" />
            <textarea name="message" rows="4" required placeholder="Tell me about your project" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:opacity-95 transition">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
