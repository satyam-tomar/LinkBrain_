import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Globe, Shield, BarChart3, Bot, Zap } from 'lucide-react';

const features = [
  {
    icon: <Brain size={28} />,
    title: 'Neural Automation',
    desc: 'Seamlessly connect physical IoT devices with LLM logic to create autonomous environments.',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #4c0519 100%)',
    dot: '#9f1239',
    tag: '#fce7f3'
  },
  {
    icon: <Globe size={28} />,
    title: 'Spatial Intelligence',
    desc: 'Map your physical workspace into a digital twin that understands human intent and movement.',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #451a03 100%)',
    dot: '#92400e',
    tag: '#fef3c7'
  },
  {
    icon: <Shield size={28} />,
    title: 'Private Node Deploy',
    desc: 'Run your brain locally. Keep all sensitive environmental data within your own physical network.',
    gradient: 'linear-gradient(135deg, #E11D48 0%, #2e1065 100%)',
    dot: '#4c1d95',
    tag: '#f5f3ff'
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Contextual Analytics',
    desc: 'Deep insights into how your space is used, with sentiment heatmaps and efficiency tracking.',
    gradient: 'linear-gradient(135deg, #10B981 0%, #064e3b 100%)',
    dot: '#065f46',
    tag: '#d1fae5'
  },
  {
    icon: <Bot size={28} />,
    title: 'Agentic Workflows',
    desc: 'Deploy AI agents that can physically flip switches, lock doors, or adjust climate based on voice.',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #172554 100%)',
    dot: '#1e3a8a',
    tag: '#dbeafe'
  },
  {
    icon: <Zap size={28} />,
    title: 'Real-time Sync',
    desc: 'Ultra-low latency communication between your cloud brain and physical hardware tools.',
    gradient: 'linear-gradient(135deg, #059669 0%, #022c22 100%)',
    dot: '#064e3b',
    tag: '#ccfbf1'
  },
];

const FeatureCard = ({ f, i, progress }) => {
  const step = 1 / features.length;
  const centerPoint = i * step + step / 2;

  const scale = useTransform(progress, [centerPoint - 0.14, centerPoint, centerPoint + 0.14], [0.82, 1.07, 0.82]);
  const rotateY = useTransform(progress, [centerPoint - 0.14, centerPoint, centerPoint + 0.14], [22, 0, -22]);
  const opacity = useTransform(progress, [centerPoint - 0.14, centerPoint, centerPoint + 0.14], [0.8, 1, 0.8]);
  const y = useTransform(progress, [centerPoint - 0.14, centerPoint, centerPoint + 0.14], [28, -12, 28]);

  const boxShadow = useTransform(
    progress,
    [centerPoint - 0.14, centerPoint, centerPoint + 0.14],
    [
      '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      '0 30px 60px -12px rgba(0, 0, 0, 0.45), 0 18px 36px -18px rgba(0, 0, 0, 0.5)',
      '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    ]
  );

  return (
    <motion.div
      style={{
        scale, rotateY, opacity, y, boxShadow,
        width: 'min(440px, 85vw)', // Responsive width
        flexShrink: 0,
        borderRadius: '2.5rem',
        background: f.gradient,
        padding: '2.5rem',
        height: 'min(400px, 60vh)', // Responsive height
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* Inner Glow for Vibrancy */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      {/* Modern Icon replaces Emoji */}
      <div style={{
        width: '60px', height: '60px',
        borderRadius: '18px',
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff',
        marginBottom: '1.75rem',
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        {f.icon}
      </div>

      <h3 style={{ 
        fontFamily: "'Comfortaa', cursive", 
        fontSize: '1.4rem', 
        fontWeight: 800, 
        color: '#FFFFFF', 
        marginBottom: '0.75rem', 
        letterSpacing: '-0.02em' 
      }}>
        {f.title}
      </h3>
      <p style={{ 
        fontFamily: "'Comfortaa', cursive", 
        fontSize: '0.95rem', 
        color: 'rgba(255, 255, 255, 0.85)', 
        lineHeight: 1.6, 
        fontWeight: 500 
      }}>
        {f.desc}
      </p>

      <div style={{ 
        marginTop: 'auto', 
        padding: '8px 16px',
        borderRadius: '100px',
        background: 'rgba(0,0,0,0.15)',
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px' 
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: f.dot }} />
        <span style={{ 
          fontFamily: "'Comfortaa', cursive",
          fontSize: '10px', 
          fontWeight: 900, 
          color: '#fff', 
          letterSpacing: '0.2em', 
          textTransform: 'uppercase' 
        }}>
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

  const x = useTransform(scrollYProgress, [0, 1], ['25%', '-75%']);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-[#fafafa]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Dynamic Background */}
        <div className="absolute inset-0 -z-10 opacity-50">
          <motion.div
            animate={{ scale: [1, 1.1, 1], x: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-violet-200/30 blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[5%] left-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-200/20 blur-[100px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-20 mb-12">
          <div className="text-center">
            <span 
              style={{ fontFamily: "'Comfortaa', cursive" }}
              className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-violet-600 mb-4 px-4 py-1.5 border border-violet-100 rounded-full bg-white/80 backdrop-blur-sm"
            >
              Our Capabilities
            </span>
            <h2
              className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              style={{ fontFamily: "'Comfortaa', cursive" }}
            >
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                bridge realities
              </span>
            </h2>
            <p 
              style={{ fontFamily: "'Comfortaa', cursive" }}
              className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              A specialized toolkit designed to transform static physical architecture into responsive,{' '}
              <span className="text-violet-600 font-bold">intelligent ecosystems.</span>
            </p>
          </div>
        </div>

        <div className="relative flex items-center h-[55vh]" style={{ perspective: '2000px' }}>
          <motion.div style={{ x }} className="flex gap-12 lg:gap-16 items-center px-[5vw]">
            {features.map((f, i) => (
              <FeatureCard key={i} f={f} i={i} progress={scrollYProgress} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}