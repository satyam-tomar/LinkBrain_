import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const words = ['Seamless.', 'Reactive.', 'Intelligent.'];

function WordReveal({ text, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="inline-block mr-3"
    >
      {text}
    </motion.span>
  );
}

function ShowcaseRow({ icon, title, desc, stat, statLabel, fromLeft, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={`flex flex-col ${fromLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-24`}
    >
      {/* Visual Component */}
      <div className="flex-1 w-full">
        <div className="relative rounded-[2rem] bg-white/40 backdrop-blur-xl border border-violet-100 p-10 flex flex-col items-center justify-center min-h-[320px] overflow-hidden shadow-[0_15px_40px_rgba(139,92,246,0.05)] group">
          
          {/* Decorative Animated Orbs inside the card */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-violet-200/40 blur-3xl" 
          />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-indigo-100/30 blur-2xl" />

          <motion.span 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-7xl mb-6 relative z-10"
          >
            {icon}
          </motion.span>
          
          <div className="flex flex-col items-center relative z-10">
            <span className="text-6xl font-black bg-gradient-to-b from-violet-600 to-indigo-500 bg-clip-text text-transparent tracking-tighter">
              {stat}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400 mt-2">{statLabel}</span>
          </div>

          {/* Subtle grid overlay for a "tech" feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
      </div>

      {/* Text Component */}
      <div className="flex-1">
        <div className="inline-block px-4 py-1 rounded-full bg-violet-50 border border-violet-100 mb-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-500">
            System Core
          </p>
        </div>
        <h3 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>
          {title}
        </h3>
        <p className="text-gray-500/90 leading-relaxed text-lg font-medium">
          {desc}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 mt-8 text-sm font-bold text-violet-600 hover:text-indigo-600 transition-all group"
        >
          Explore Technical Docs
          <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
        </a>
      </div>
    </motion.div>
  );
}

const rows = [
  {
    icon: '⚡',
    title: 'Hardware-LLM Convergence',
    desc: 'LinkBrain bridges the gap between digital reasoning and physical action. Convert natural language prompts into precise mechanical triggers for IoT devices in milliseconds.',
    stat: '<100ms',
    statLabel: 'Response Latency',
    fromLeft: true,
    delay: 0,
  },
  {
    icon: '🧬',
    title: 'Multi-Agent Spatial Logic',
    desc: 'Deploy multiple AI agents that share a single "world view" of your space. Whether it is a smart library or an automated cafe, our agents work in concert, not in silos.',
    stat: 'Unlimited',
    statLabel: 'Connected Nodes',
    fromLeft: false,
    delay: 0.1,
  },
  {
    icon: '🛰️',
    title: 'Privacy-First Neural Edge',
    desc: 'Processed locally on the edge, your environmental data never leaves your premises unless you want it to. Security is baked into the very architecture of our physical agents.',
    stat: '100%',
    statLabel: 'On-Premise Ready',
    fromLeft: true,
    delay: 0,
  },
];

export default function Showcase() {
  return (
    <section className="relative py-32 px-6 lg:px-10 bg-[#fafafa] overflow-hidden">
      
      {/* BACKGROUND DECORATION (Heavy Filled) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03),transparent)]" />
        <motion.div 
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-violet-100/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-indigo-100/20 blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Word reveal headline */}
        <div className="text-center mb-32">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-violet-400 mb-6">
            The LinkBrain Protocol
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tighter" style={{ fontFamily: "'Comfortaa', cursive" }}>
            Every interaction is{' '}
            <span className="block sm:inline bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {words.map((w, i) => (
                <WordReveal key={w} text={w} delay={i * 0.15} />
              ))}
            </span>
          </h2>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-32 lg:gap-48">
          {rows.map((row) => (
            <ShowcaseRow key={row.title} {...row} />
          ))}
        </div>
      </div>
    </section>
  );
}