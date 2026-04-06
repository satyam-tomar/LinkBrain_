import { motion, useScroll, useTransform } from 'framer-motion';
import posterImg from '../assets/gaming.png';
import { useState, useEffect, useRef } from 'react';

// --- FEATURES MARQUEE ROW ---
const features = [
    { icon: '', label: 'AI-Powered Spaces' },
    { icon: '', label: 'Real-Time Interaction' },
    { icon: '', label: 'Seamless Integration' },
    { icon: '', label: 'Location Awareness' },
    { icon: '', label: 'Personalized Agents' },
    { icon: '', label: 'Secure by Design' },
    { icon: '', label: 'Multi-Environment' },
    { icon: '', label: 'Live Analytics' },
    { icon: '', label: 'Autonomous Decisions' },
    { icon: '', label: 'Custom Workflows' },
];

function FeatureMarquee() {
    const items = [...features, ...features];
    return (
        <div className="w-full overflow-hidden py-12" style={{ background: 'transparent' }}>
            <div className="flex gap-4 w-max" style={{ animation: 'marquee-scroll 30s linear infinite' }}>
                {items.map((feat, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2.5 px-5 py-2.5 rounded-[1rem] border border-violet-100/80 bg-white/70 backdrop-blur-sm shadow-sm whitespace-nowrap select-none"
                        style={{ fontFamily: "'Comfortaa', cursive" }}
                    >
                        <span className="text-sm font-semibold text-gray-800 tracking-tight">{feat.label}</span>
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}

// --- ANIMATED IMAGE SECTION ---
function ImageSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"] 
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <section ref={containerRef} className="relative w-full py-20 flex justify-center items-center px-4 overflow-hidden">
            <motion.div 
                style={{ scale, opacity }}
                className="relative w-full max-w-5xl rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl border border-white/20 bg-gray-100"
            >
                <img
                    src={posterImg}
                    alt="LinkBrain Visual"
                    className="w-full h-auto object-cover"
                />
            </motion.div>
        </section>
    );
}

// --- THE SPREAD WHITE GLOW COMPONENT ---
function GlowEffect() {
    return (
        <div 
            className="absolute pointer-events-none -z-1"
            style={{
                width: '60vw',
                maxWidth: '800px',
                aspectRatio: '1/1',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 40%, transparent 75%)',
                filter: 'blur(40px)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        />
    );
}

// --- MAIN PAGE ---
export default function LinkBrainPage() {
    const [input, setInput] = useState('');

    const handleGenerate = () => {
        console.log(`Searching for: ${input}`);
    };

    return (
        <main className="relative w-full overflow-x-hidden" style={{ background: '#FAF8FF' }}>
            
            {/* GLOBAL DOT BACKGROUND */}
            <WaveDotsBackground />

            {/* === SECTION 1: HERO === */}
            <section
                className="relative z-10 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
            >
                <GlowEffect />

                <div className="w-full max-w-7xl flex flex-col items-center relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-10 inline-flex items-center gap-2 border border-violet-100 text-violet-600 text-xs font-semibold py-2 px-6 rounded-full shadow-sm bg-white/60 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-violet-400" />
                        transform physical spaces into personalized AI agents
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="w-full text-center flex flex-col items-center gap-8"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-6xl sm:text-8xl lg:text-[150px] leading-none tracking-tighter"
                            style={{
                                fontFamily: "'Comfortaa', cursive",
                                fontWeight: 800,
                                letterSpacing: '-0.06em',
                            }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-violet-700 via-violet-500 to-indigo-200">
                                LinkBrain
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-lg sm:text-xl text-gray-500/80 leading-relaxed max-w-2xl font-normal"
                        >
                            We provide intelligent services that transform physical spaces into{' '}
                            <span className="text-violet-600/80 font-medium">personalized AI agents</span>.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                            <a
                                href="#contact"
                                className="group relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(139,92,246,0.3)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-500" />
                                <span className="relative z-10">Experience LinkBrain</span>
                            </a>
                            <a
                                href="#how-it-works"
                                className="px-10 py-4 rounded-full font-semibold text-gray-700 bg-white/60 backdrop-blur-md border border-gray-200 hover:border-violet-300 hover:text-violet-600 transition-all duration-300 shadow-sm"
                            >
                                How It Works
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
                    <div className="w-px h-12 bg-violet-200 relative overflow-hidden">
                        <motion.div 
                            animate={{ y: [0, 48] }} 
                            transition={{ repeat: Infinity, duration: 1.5 }} 
                            className="absolute top-0 w-full h-1/2 bg-violet-500" 
                        />
                    </div>
                </div>
            </section>

            {/* === SECTION 2: CONTENT === */}
            <div>
                <ImageSection />
                
                <div className="w-full pb-20">
                    <p className="text-center text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 mb-8" style={{ fontFamily: "'Comfortaa', cursive" }}>
                        What LinkBrain Brings
                    </p>
                    <FeatureMarquee />
                </div>
            </div>

            {/* === BUILDER SECTION === */}
            <section className="relative min-h-[600px] flex items-center justify-center py-20 px-4">
                <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center gap-6">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>
                        Explore Physical <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">AI Agents</span>
                    </h2>
                    <div className="w-[80%] sm:w-[60%] flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                        <input 
                            type="text" 
                            placeholder="e.g. smart cafe" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            className="flex-1 outline-none text-sm px-2 bg-transparent" 
                        />
                        <button onClick={handleGenerate} className="bg-black text-white text-xs sm:text-sm px-5 py-2 rounded-full">Know More</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Animation Helpers
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// --- GLOBAL BACKGROUND ---
function WaveDotsBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let W, H, raf, t = 0;

        const resize = () => { 
            W = canvas.width = window.innerWidth; 
            H = canvas.height = window.innerHeight; 
        };

        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            t += 0.015;

            for (let r = 0; r < H/35 + 1; r++) {
                for (let c = 0; c < W/35 + 1; c++) {
                    const wave = Math.sin(c * 0.16 + r * 0.04 - t) * 0.5 + 0.5;
                    ctx.beginPath();
                    ctx.arc(c*35, r*35, 0.8 + wave * 0.8, 0, Math.PI*2);
                    ctx.fillStyle = `rgba(124, 58, 237, ${0.08 + wave * 0.15})`;
                    ctx.fill();
                }
            }

            raf = requestAnimationFrame(draw);
        };
        
        resize();
        draw();

        window.addEventListener('resize', resize);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed inset-0 w-full h-full -z-0 pointer-events-none"
        />
    );
}