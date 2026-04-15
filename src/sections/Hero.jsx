import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'

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
        <div className="w-full overflow-hidden py-12 sm:py-16 lg:py-20">
            <div
                className="flex gap-3 sm:gap-4 w-max"
                style={{ animation: 'marquee-scroll 40s linear infinite' }}
            >
                {items.map((feat, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-[1rem] whitespace-nowrap select-none"
                        style={{ fontFamily: "'Comfortaa', cursive" }}
                    >
                        <span
                            style={{ textShadow: "0 0 1px #000" }}
                            className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-slate-900 tracking-tight"
                        >
                            {feat.label.toUpperCase()}
                        </span>
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

const images = [img1, img2, img3, img4, img5];

// --- ANIMATED IMAGE SECTION ---
function ImageSection() {
    const [selectedImg, setSelectedImg] = useState(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative w-full  flex justify-center items-start"
        >
            <div className="sticky top-0 w-full flex items-center justify-center overflow-hidden">
                <motion.div 
                    style={{ scale, opacity }}
                    className="w-[90%] max-w-[1200px] aspect-video flex items-center justify-center"
                >
                    {images.map((img, i) => {
                        const multiplier = i - Math.floor(images.length / 2);
                        const xMove = useTransform(scrollYProgress, [0.1, 0.6], [0, multiplier * 300]); 
                        const rotate = useTransform(scrollYProgress, [0.1, 0.6], [0, multiplier * 15]);
                        const yMove = useTransform(scrollYProgress, [0.1, 0.6], [0, Math.abs(multiplier) * 40]);

                        return (
                            <motion.div
                                key={i}
                                onClick={() => setSelectedImg(img)}
                                style={{
                                    x: xMove,
                                    y: yMove,
                                    rotateZ: rotate,
                                    zIndex: images.length - Math.abs(multiplier),
                                }}
                                className="absolute w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] aspect-[3/4] sm:aspect-video cursor-zoom-in"
                            >
                                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900">
                                    <motion.img
                                        src={img}
                                        alt={`gallery-${i}`}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="z-[10] pointer-events-none text-center"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold text-white drop-shadow-2xl uppercase tracking-tighter">
                            The Collection
                        </h2>
                    </motion.div>
                </motion.div>
            </div>

            {/* FULLSCREEN OVERLAY */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-8 right-8 text-white text-4xl font-light hover:rotate-90 transition-transform duration-300"
                            onClick={() => setSelectedImg(null)}
                        >
                            ✕
                        </motion.button>

                        <motion.img
                            layoutId={selectedImg} // Smooth transition if you add layoutId to small images too
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                            src={selectedImg}
                            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/20 object-contain"
                            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// --- GLOW ---
function GlowEffect() {
    return (
        <div
            className="absolute pointer-events-none -z-10"
            style={{
                width: '60vw',
                maxWidth: '800px',
                aspectRatio: '1/1',
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 40%, transparent 75%)',
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

    return (
        <main className="relative w-full overflow-x-hidden antialiased" style={{ background: '#FAF8FF' }}>
            <WaveDotsBackground />

            {/* HERO - Added pb-0 to transition smoothly into the marquee */}
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-0">
                <GlowEffect />
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center text-center gap-10">
                    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
                        {/* LEFT CONTENT */}
                        <div className="flex-1 flex flex-col items-center text-center md:text-left gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 border border-violet-100 text-violet-600 text-xs font-semibold py-2 px-5 rounded-full bg-white/60 backdrop-blur-md"
                            >
                                <span className="w-2 h-2 rounded-full bg-violet-400" />
                                transform physical spaces into personalized AI agents
                            </motion.div>

                            <motion.h1
                                className="text-4xl sm:text-6xl lg:text-8xl leading-tight tracking-tight"
                                style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 800 }}
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-violet-700 via-violet-500 to-indigo-200">
                                LinkBrain
                                </span>
                            </motion.h1>

                            <motion.p className="text-base sm:text-lg lg:text-xl text-gray-500/80 leading-relaxed max-w-md">
                                We provide intelligent services that transform physical spaces into{" "}
                                <span className="text-violet-600 font-medium">personalized AI agents</span>.
                            </motion.p>

                            <motion.div className="flex flex-col sm:flex-row gap-4 mt-2">
                                <a className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-500 shadow-lg hover:scale-105 transition cursor-pointer">
                                    Experience LinkBrain
                                </a>
                                <a className="px-8 py-4 rounded-full font-semibold text-gray-700 bg-white border border-gray-200 hover:text-violet-600 transition cursor-pointer">
                                    How It Works
                                </a>
                            </motion.div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex-1 flex justify-center">
                            <img src="/hero.png" alt="Hero" className="w-full max-w-2xl object-contain" />
                        </div>
                    </div>

                    <div className="w-full mt-20">
                        <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 mb-2" style={{ fontFamily: "'Comfortaa', cursive" }}>
                            What LinkBrain Brings
                        </p>
                        <FeatureMarquee />
                    </div>
                </div>
            </section>

            {/* IMAGE SECTION - Adjusted padding and removed heading margin bottom for tighter visual link */}
            <section className='py-20 bg-white/30 backdrop-blur-sm'>
                <h2 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-0 tracking-tighter' style={{ fontFamily: "'Comfortaa', cursive" }}>
                    Our Features
                </h2>
                <ImageSection />
            </section>



        <section className="flex flex-col items-center justify-center pb-24 sm:pb-32 px-4 overflow-hidden">
    
            {/* NEW FULL-WIDTH RESPONSIVE IMAGE CONTAINER */}
            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-[1400px] aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 bg-gray-100"
            >
                <img 
                    src={img6} 
                    alt="LinkBrain Interface" 
                    className="w-full h-full object-cover"
                />
                
                {/* Subtle glassmorphism overlay to keep it classic */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent pointer-events-none" />
            </motion.div>
        </section>
            {/* <section className="flex items-center justify-center pb-24 sm:pb-32 px-4">
                <div className="w-full max-w-4xl text-center flex flex-col items-center ">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: "'Comfortaa', cursive" }}>
                        Explore Physical <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">AI Agents</span>
                    </h2>

                    <div className="w-full max-w-xl flex items-center bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm mt-2">
                        <input
                            type="text"
                            placeholder="e.g. smart cafe"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 outline-none text-base px-2 bg-transparent"
                        />
                        <button className="bg-black text-white px-6 py-2.5 rounded-full font-bold hover:bg-violet-600 transition-colors">
                            Know More
                        </button>
                    </div>
                </div>
            </section> */}
        </main>
    );
}

// BACKGROUND (Canvas dots logic remains untouched)
function WaveDotsBackground() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let W, H, raf, t = 0;
        const resize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            t += 0.015;
            for (let r = 0; r < H / 35; r++) {
                for (let c = 0; c < W / 35; c++) {
                    const wave = Math.sin(c * 0.16 + r * 0.04 - t) * 0.5 + 0.5;
                    ctx.beginPath();
                    ctx.arc(c * 35, r * 35, 0.8 + wave * 0.8, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(124,58,237,${0.08 + wave * 0.15})`;
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
    return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-0 pointer-events-none" />;
}