import { motion, AnimatePresence } from 'framer-motion';
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
    // Duplicate items for seamless infinite loop
    const items = [...features, ...features];

    return (
        <div className="w-full overflow-hidden py-4" style={{ background: 'transparent' }}>
            {/* Left fade */}
            <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #fafafa, transparent)' }} />
            {/* Right fade */}
            <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, #fafafa, transparent)' }} />

            <div
                className="flex gap-4 w-max"
                style={{
                    animation: 'marquee-scroll 30s linear infinite',
                }}
            >
                {items.map((feat, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2.5 px-5 py-2.5 rounded-[1rem] border border-violet-100/80 bg-white/70 backdrop-blur-sm shadow-sm whitespace-nowrap select-none"
                        style={{ fontFamily: "'Comfortaa', cursive" }}
                    >
                        <span className="text-base">{feat.icon}</span>
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

// --- VIDEO SECTION ---
function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section className="relative mt-[150px] flex justify-center items-center">
            <div className="relative w-[900px] max-w-5xl rounded-[60px] overflow-hidden shadow-2xl border border-white/20 bg-gray-100">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-43407-large.mp4"
                    poster={posterImg}
                    loop
                    muted={!isPlaying}
                    playsInline
                />
                
                <AnimatePresence>
                    {!isPlaying && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-all duration-500"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handlePlay}
                                className="w-20 h-20 flex items-center justify-center rounded-full bg-violet-600 text-white shadow-xl shadow-violet-500/40"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 ml-1">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

// --- LIQUID MESH BACKGROUND ---
function LiquidMeshBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-[#fafafa]">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-violet-200/40 via-indigo-100/30 to-transparent blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [0, -120, 0],
                    x: [0, 100, 0],
                    borderRadius: ["50% 50% 20% 80% / 20% 80% 50% 50%", "30% 70% 70% 30% / 50% 30% 70% 50%", "50% 50% 20% 80% / 20% 80% 50% 50%"]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-20%] right-[-10%] w-[1100px] h-[1100px] bg-gradient-to-tr from-violet-300/30 via-fuchsia-100/20 to-transparent blur-[120px]"
            />
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, Math.random() * -100, 0],
                        x: [0, Math.random() * 50, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bg-violet-400/10 rounded-full blur-[60px]"
                    style={{
                        width: `${200 + i * 50}px`,
                        height: `${200 + i * 50}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    );
}

// === MAIN PAGE ===
export default function LinkBrainPage() {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

    const handleGenerate = () => {
        setResults([
            `AI-powered ${input}`,
            `${input} Assistant`,
            `Smart ${input} System`,
        ]);
    };

    return (
        <main className="w-full">
            {/* === SECTION 1: HERO === */}
            <section className="font-fredoka relative z-0 min-h-[1700px] flex flex-col items-center pt-[160px] overflow-hidden bg-[#fafafa]">

                <LiquidMeshBackground />

                <div className="w-full max-w-7xl flex flex-col items-center relative">

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-10 inline-flex items-center gap-2 border border-violet-100 text-violet-600 text-xs font-semibold py-2 rounded-full shadow-sm bg-white/60 backdrop-blur-md"
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
                            className="text-6xl sm:text-8xl lg:text-[170px] leading-none tracking-tighter text-violet-500"
                            style={{
                                fontFamily: "'Comfortaa', cursive",
                                fontWeight: 800,
                                letterSpacing: '-0.06em',
                                textShadow: '0 20px 40px rgba(139, 92, 246, 0.15)'
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
                            We provide intelligent services that transform physical spaces into <span className="text-violet-600/80 font-medium">personalized AI agents</span> that interact with your environment.
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

                {/* === FEATURES MARQUEE — after hero content, before video === */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                    className="w-full mt-20"
                >
                    {/* Label above */}
                    <p
                        className="text-center text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 mb-8"
                        style={{ fontFamily: "'Comfortaa', cursive" }}
                    >
                        What LinkBrain Brings
                    </p>
                    <FeatureMarquee />
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-[12px] text-gray-600 tracking-[0.3em] uppercase font-bold">Decrypting the Workflow</span>
                    <div className="relative w-px h-16 bg-gray-100 overflow-hidden">
                        <motion.div
                            animate={{ top: ['-100%', '100%'] }}
                            transition={{ repeat: Infinity, duration: 0.2, ease: "easeInOut" }}
                            className="absolute w-full h-1/2 bg-gradient-to-b from-transparent via-violet-400 to-transparent"
                        />
                    </div>
                </motion.div>

                <VideoSection />
            </section>

            {/* === SECTION 2: EXPLORING AND SEARCHING === */}
            <section id="builder" className="relative min-h-[700px] flex items-center justify-center bg-[#fafafa] overflow-hidden px-4">
                <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center gap-6">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>
                        Explore Physical{' '}
                        <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                            AI Agents
                        </span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Tell us your business or space — we'll design an AI system for it.
                    </p>
                    <div className="w-[60%] flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm backdrop-blur-md">
                        <input
                            type="text"
                            placeholder="e.g. smart cafe with automation"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 outline-none text-sm px-2 py-2 bg-transparent"
                        />
                        <button onClick={handleGenerate} className="bg-black text-white text-sm px-5 py-2 rounded-full hover:opacity-90">
                            Know More
                        </button>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-center">
                        {['School AI system', 'Smart library', 'AI cafe'].map((item, i) => (
                            <button key={i} onClick={() => setInput(item)} className="text-xs px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200">
                                {item}
                            </button>
                        ))}
                    </div>
                    {results.length > 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full mt-6 grid gap-3">
                            {results.map((res, i) => (
                                <div key={i} className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white hover:shadow-md transition">
                                    {res}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
}

// Animation Variants
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    },
};