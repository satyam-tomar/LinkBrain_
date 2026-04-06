import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🧠',
    title: 'Neural Automation',
    desc: 'Seamlessly connect physical IoT devices with LLM logic to create autonomous environments.',
    cardBg: '#7C3AED', // Deep Rose/Red
    tag: '#4c0519',
    dot: '#9f1239',
  },
  {
    icon: '🌍',
    title: 'Spatial Intelligence',
    desc: 'Map your physical workspace into a digital twin that understands human intent and movement.',
    cardBg: '#F59E0B', // Dark Yellow/Amber
    tag: '#451a03',
    dot: '#92400e',
  },
  {
    icon: '🛡️',
    title: 'Private Node Deploy',
    desc: 'Run your brain locally. Keep all sensitive environmental data within your own physical network.',
    cardBg: '#E11D48', // Strong Violet
    tag: '#2e1065',
    dot: '#4c1d95',
  },
  {
    icon: '📈',
    title: 'Contextual Analytics',
    desc: 'Deep insights into how your space is used, with sentiment heatmaps and efficiency tracking.',
    cardBg: '#10B981', // Solid Green
    tag: '#064e3b',
    dot: '#065f46',
  },
  {
    icon: '🤖',
    title: 'Agentic Workflows',
    desc: 'Deploy AI agents that can physically flip switches, lock doors, or adjust climate based on voice.',
    cardBg: '#2563EB', // Solid Blue
    tag: '#172554',
    dot: '#1e3a8a',
  },
  {
    icon: '⚡',
    title: 'Real-time Sync',
    desc: 'Ultra-low latency communication between your cloud brain and physical hardware tools.',
    cardBg: '#059669', // Emerald Green
    tag: '#022c22',
    dot: '#064e3b',
  },
];

const FeatureCard = ({ f, i, progress }) => {
  const step = 1 / features.length;
  const centerPoint = i * step + step / 2;

  const scale = useTransform(
    progress,
    [centerPoint - 0.14, centerPoint, centerPoint + 0.14],
    [0.82, 1.07, 0.82]
  );
  const rotateY = useTransform(
    progress,
    [centerPoint - 0.14, centerPoint, centerPoint + 0.14],
    [22, 0, -22]
  );
  const opacity = useTransform(
    progress,
    [centerPoint - 0.14, centerPoint, centerPoint + 0.14],
    [0.8, 1, 0.8]
  );
  const y = useTransform(
    progress,
    [centerPoint - 0.14, centerPoint, centerPoint + 0.14],
    [28, -12, 28]
  );

  // REAL BLACK/GRAY SHADOW (Multi-layered for realism)
  const boxShadow = useTransform(
    progress,
    [centerPoint - 0.14, centerPoint, centerPoint + 0.14],
    [
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '0 30px 60px -12px rgba(0, 0, 0, 0.45), 0 18px 36px -18px rgba(0, 0, 0, 0.5)',
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    ]
  );

  return (
    <motion.div
      style={{
        scale, rotateY, opacity, y, boxShadow,
        width: '440px',
        flexShrink: 0,
        borderRadius: '2.5rem',
        background: f.cardBg, // Solid color, no opacity
        padding: '2.5rem',
        height: '400px',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden',
        position: 'relative',
        border: 'none', // Removed border
      }}
    >
      {/* Icon - Using a semi-opaque white overlay to keep it "clear" but distinct */}
      <div style={{
        width: '56px', height: '56px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.75rem',
        marginBottom: '1.75rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}>
        {f.icon}
      </div>

      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
        {f.title}
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, fontWeight: 500 }}>
        {f.desc}
      </p>

      {/* Bottom tag */}
      <div style={{ marginTop: 'auto', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: f.dot, display: 'inline-block' }} />
        <span style={{ fontSize: '9px', fontWeight: 900, color: f.tag, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          Feature 0{i + 1}
        </span>
      </div>
    </motion.div>
  );
};

export default function Features() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['30%', '-75%']);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-[#fafafa]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* BACKGROUND BLOBS (RESTORED) */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <motion.div
            animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-violet-200/40 blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-200/30 blur-[100px]"
          />
        </div>

         {/* HEADING */}
         <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-20 mb-12">
          <div className="text-center">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-violet-500 mb-4 px-4 py-1.5 border border-violet-100 rounded-full bg-white/50 backdrop-blur-sm">
              Our Capabilities
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              style={{ fontFamily: "'Comfortaa', cursive" }}
            >
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                bridge realities
              </span>
            </h2>
            <p className="text-gray-500/80 text-lg max-w-2xl mx-auto leading-relaxed">
              A specialized toolkit designed to transform static physical architecture into responsive,{' '}
              <span className="text-violet-600 font-medium">intelligent ecosystems.</span>
            </p>
          </div>
        </div>

        {/* HORIZONTAL TRACK */}
        <div className="relative flex items-center h-[55vh]" style={{ perspective: '2000px' }}>
          <motion.div style={{ x }} className="flex gap-14 items-center">
            {features.map((f, i) => (
              <FeatureCard key={i} f={f} i={i} progress={scrollYProgress} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}