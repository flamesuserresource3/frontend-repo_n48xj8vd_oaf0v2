import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const skills = [
  { name: 'React', color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', color: 'from-emerald-400 to-cyan-500' },
  { name: 'FastAPI', color: 'from-fuchsia-400 to-violet-500' },
  { name: 'MongoDB', color: 'from-lime-400 to-emerald-500' },
  { name: 'Tailwind', color: 'from-sky-400 to-indigo-500' },
  { name: 'Framer Motion', color: 'from-pink-400 to-rose-500' },
];

const projects = [
  {
    title: 'Neon Commerce',
    desc: 'E-commerce UI with glass panels and blazing-fast checkout.',
    repo: '#',
    live: '#',
    color: 'from-cyan-400 to-fuchsia-500',
  },
  {
    title: 'Synthwave Blog',
    desc: 'MDX blog engine with retro gradients and 3D effects.',
    repo: '#',
    live: '#',
    color: 'from-violet-400 to-sky-500',
  },
  {
    title: 'Realtime Chat',
    desc: 'Socket-driven chat with holographic avatars.',
    repo: '#',
    live: '#',
    color: 'from-emerald-400 to-cyan-500',
  },
];

export default function SkillsProjects({ theme }) {
  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Skills" subtitle="What I craft with" />

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((s) => (
            <FlipCard key={s.name} frontContent={<SkillFront name={s.name} color={s.color} />} backContent={<SkillBack name={s.name} />} />
          ))}
        </div>

        <div id="projects" className="mt-20">
          <SectionTitle title="Projects" subtitle="Selected works" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <FlipCard
                key={p.title}
                frontContent={<ProjectFront title={p.title} color={p.color} />}
                backContent={<ProjectBack title={p.title} desc={p.desc} repo={p.repo} live={p.live} />}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]"
        style={{ fontFamily: "'Orbitron', 'Audiowide', sans-serif" }}
      >
        {title}
      </h2>
      <p className="mt-2 text-cyan-100/70" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
        {subtitle}
      </p>
    </div>
  );
}

function FlipCard({ frontContent, backContent }) {
  return (
    <div className="[perspective:1200px]">
      <div className="group relative h-32 sm:h-36 md:h-40 [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {frontContent}
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {backContent}
        </div>
      </div>
    </div>
  );
}

function SkillFront({ name, color }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`h-full w-full rounded-xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[inset_0_0_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(0,0,0,0.35)] p-4 flex items-center justify-center`}
    >
      <div className={`w-full h-full rounded-lg bg-gradient-to-br ${color} opacity-70`} />
      <div className="absolute bottom-3 left-3 text-sm font-semibold text-white/90">
        {name}
      </div>
    </motion.div>
  );
}

function SkillBack({ name }) {
  return (
    <div className="h-full w-full rounded-xl border border-cyan-300/30 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl p-4 flex items-center justify-center text-center text-sm text-cyan-100">
      {name} • 3D flips, neon shadows, and production experience.
    </div>
  );
}

function ProjectFront({ title, color }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="relative h-full w-full overflow-hidden rounded-xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-60`} />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,0,0,0.35)_100%)]" />
      <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg drop-shadow-lg">
        {title}
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_1px,transparent_1px,transparent_3px)]" />
    </motion.div>
  );
}

function ProjectBack({ title, desc, repo, live }) {
  return (
    <div className="h-full w-full rounded-xl border border-fuchsia-300/30 bg-white/10 backdrop-blur-xl p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-cyan-100/80">{desc}</p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <a href={repo} className="inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors">
          <Github size={16} /> Repo
        </a>
        <a href={live} className="inline-flex items-center gap-2 text-fuchsia-200 hover:text-white transition-colors">
          <ExternalLink size={16} /> Live
        </a>
      </div>
    </div>
  );
}
