import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const FloatingInput = ({ id, label, type = "text", icon, ...props }) => {
    const isFocused = focusedInput === id;
    const isTextArea = type === "textarea";
    const InputComponent = isTextArea ? 'textarea' : 'input';

    return (
      <motion.div variants={itemVariants} className="relative mb-6">
        <div className={`relative w-full border transition-all duration-500 rounded-2xl ${
          isFocused 
            ? 'border-purple-600 bg-white shadow-[0_10px_30px_rgba(147,51,234,0.08)]' 
            : 'border-purple-100 bg-purple-50/20 group-hover:border-purple-200'
        }`}>
          <div className={`absolute left-4 ${isTextArea ? 'top-5' : 'top-1/2 -translate-y-1/2'} transition-colors duration-300 ${isFocused ? 'text-purple-600' : 'text-slate-400'}`}>
            {icon}
          </div>
          <InputComponent
            id={id}
            onFocus={() => setFocusedInput(id)}
            onBlur={(e) => !e.target.value && setFocusedInput(null)}
            className={`w-full bg-transparent pl-12 pr-4 pt-8 pb-3 outline-none font-medium text-slate-900 ${
              isTextArea ? 'h-40 resize-none overflow-y-auto custom-scrollbar' : 'h-20'
            }`}
            {...props}
          />
          <label htmlFor={id} className={`absolute left-12 transition-all duration-300 pointer-events-none ${
              isFocused || props.value 
                ? 'top-2.5 text-[10px] font-black tracking-widest text-purple-600 uppercase' 
                : `text-base text-slate-500 ${isTextArea ? 'top-5' : 'top-1/2 -translate-y-1/2'}`
            }`}>
            {label}
          </label>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 lg:px-10 bg-[#fbfaff] relative overflow-hidden antialiased">
      
      {/* BACKGROUND: RADIAL DOT MATRIX */}
      <div className="absolute inset-0 z-0 opacity-40" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(251, 250, 255, 1) 20%, rgba(251, 250, 255, 0) 60%), url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a855f7' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%, 40px 40px'
        }}
      />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Content */}
        <motion.div variants={itemVariants} className="mb-12">
          <span className="text-[10px] font-black tracking-[0.5em] text-purple-500 uppercase">System Hub</span>
          <h1 className="text-4xl md:text-6xl font-light text-slate-950 mt-4">Connect with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">LinkBrain.</span></h1>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full grid lg:grid-cols-[1.4fr,1fr] rounded-[3.5rem] overflow-hidden bg-white/40 backdrop-blur-3xl border border-white/60 shadow-2xl">
          
          {/* LEFT PANEL: The Form */}
          <div className="p-8 md:p-16 bg-white/70">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
              Initialize Project Brief
            </h2>
            <form>
              <FloatingInput id="name" label="Full Name" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
              <div className="grid md:grid-cols-2 gap-4">
                <FloatingInput id="email" label="Secure Email" type="email" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} />
                <FloatingInput id="phone" label="Direct Line" type="tel" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>} />
              </div>
              <FloatingInput id="message" label="Project Details" type="textarea" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>} />

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full md:w-auto px-12 py-5 rounded-2xl bg-slate-950 text-white font-bold text-sm tracking-widest uppercase hover:bg-purple-700 transition-colors shadow-xl shadow-purple-200">
                Establish Connection
              </motion.button>
            </form>
          </div>

          {/* RIGHT PANEL: The "System Dashboard" (Unique & Good Looking) */}
          <div className="p-10 md:p-16 bg-gradient-to-br from-violet-600 to-indigo-700 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32" />

            <div className="relative z-10">
              <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black tracking-widest uppercase backdrop-blur-md">Node: Global_HQ</span>
              <h3 className="text-3xl font-light mt-6">System <br/><span className="font-bold italic">Capabilities</span></h3>
              
              {/* Animated Service Nodes */}
              <div className="mt-10 space-y-6">
                {[
                  { label: "Studio Acoustics AI", val: "Active", color: "bg-emerald-400" },
                  { label: "Showroom Analytics", val: "Live", color: "bg-blue-400" },
                  { label: "Campus Automation", val: "Operational", color: "bg-amber-400" }
                ].map((node, i) => (
                  <motion.div key={i} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + (i * 0.1) }} className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                    <span className="text-sm font-medium">{node.label}</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${node.color} animate-pulse`} />
                      <span className="text-[10px] font-black uppercase opacity-60">{node.val}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Insight Area */}
            <div className="relative z-10 mt-20 p-6 rounded-3xl bg-slate-950/30 border border-white/5 backdrop-blur-xl">
              <p className="text-xs text-violet-100 leading-relaxed mb-4">
                "We don't just build software; we architect the physical intelligence of your space."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-400 p-[2px]">
                   <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold">ST</div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest">Satyam Tomar</div>
                  <div className="text-[9px] opacity-60">Lead IoT Architect</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-400 p-[2px]">
                   <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold">VR</div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest">Vishesh Raj</div>
                  <div className="text-[9px] opacity-60">Lead IoT Architect</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}