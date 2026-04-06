import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-24 px-6 lg:px-10 overflow-hidden">
      
      {/* --- BACKGROUND FILL: Continued from previous sections --- */}
      <div className="absolute inset-0 -z-10 bg-[#fafafa]">
        <motion.div 
            animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 45, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-[100%] bg-violet-100/30 blur-[120px]" 
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-violet-700 p-12 lg:p-20 text-center shadow-[0_40px_100px_rgba(139,92,246,0.25)]"
        >
          {/* Decorative Internal Blobs (Heavy Fill) */}
          <motion.div 
            animate={{ 
                x: [0, 30, 0], 
                y: [0, -20, 0],
                scale: [1, 1.2, 1] 
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-white/10 blur-[80px] pointer-events-none" 
          />
          <motion.div 
            animate={{ 
                x: [0, -40, 0], 
                y: [0, 30, 0] 
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-[-30%] left-[-10%] w-80 h-80 rounded-full bg-indigo-400/20 blur-[60px] pointer-events-none" 
          />

          {/* Neural/Tech Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                System Status: Ready for Deployment
            </motion.div>

            <h2 className="text-4xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tighter" style={{ fontFamily: "'Comfortaa', cursive" }}>
              The future of space
              <br />
              starts with a link.
            </h2>
            
            <p className="text-violet-100/80 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Join the pioneers turning static architecture into autonomous ecosystems. Deploy your first Physical AI Agent today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="#"
                className="group relative px-10 py-4 bg-white text-violet-700 font-bold rounded-full text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get Started — Free Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-100/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
              <a
                href="#custom-talks"
                className="px-10 py-4 bg-white/10 backdrop-blur-xl text-white font-bold rounded-full text-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-10">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-violet-600 bg-violet-400 flex items-center justify-center text-[10px] text-white font-bold">
                            {String.fromCharCode(64 + i)}
                        </div>
                    ))}
                </div>
                <p className="text-violet-200/50 text-[11px] font-semibold tracking-wide uppercase">
                    Trusted by 200+ Smart Spaces Worldwide
                </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}