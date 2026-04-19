import React from 'react';
import { motion } from 'framer-motion';
import { Store, Mic2, School, BedDouble, ArrowRight, Cpu } from 'lucide-react';

const services = [
  {
    title: "Showroom Interior",
    category: "Retail Intelligence",
    description: "AI-driven heatmaps and automated focal lighting that adapts to customer flow.",
    icon: <Store className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop", 
    accent: "bg-blue-500"
  },
  {
    title: "Studio Interior",
    category: "Acoustic Automation",
    description: "Dynamic acoustic panels and mood-sync lighting controlled via neural networks.",
    icon: <Mic2 className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
    accent: "bg-purple-500"
  },
  {
    title: "AI Smart Classroom",
    category: "Educational IoT",
    description: "Adaptive environments with eye-safety lighting and automated engagement tracking.",
    icon: <School className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b54e?q=80&w=800&auto=format&fit=crop",
    accent: "bg-emerald-500"
  },
  {
    title: "Smart Bedroom",
    category: "Residential Wellness",
    description: "Circadian rhythm lighting and climate automation that evolves with your sleep patterns.",
    icon: <BedDouble className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
    accent: "bg-rose-500"
  }
];

export default function Services() {
  return (
    /* MAIN PAGE BACKGROUND: 
       We use a solid 'White/Off-white' base but add a large, soft 
       animated light purple glow to the whole page.
    */
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 lg:px-10 antialiased relative overflow-hidden">
      
      {/* DYNAMIC MESH BG: 
          These are the 'Light UI' elements for the whole page.
          They stay subtle but make the white background feel premium.
      */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-50 rounded-full blur-[140px] opacity-60 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[140px] opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <Cpu size={16} className="text-purple-600 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase">Architecture of Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight">
            Automated <span className="font-bold italic">Environments.</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[550px] rounded-[3.5rem] overflow-hidden cursor-pointer bg-slate-100 border border-slate-100"
            >
              {/* 1. IMAGE: Sharp and clear */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:blur-md group-hover:opacity-30"
              />

              {/* 2. FROSTED REVEAL OVERLAY (Light Mode) */}
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[4px]" />

              {/* 3. MODULE BADGE (Always Sharp) */}
              <div className="absolute top-10 left-10 z-20">
                <div className="px-5 py-2 rounded-2xl bg-white/90 backdrop-blur-xl text-slate-900 text-[10px] font-black tracking-widest uppercase shadow-sm border border-white">
                  Module 0{index + 1}
                </div>
              </div>

              {/* 4. CONTENT WRAPPER */}
              <div className="absolute inset-x-0 bottom-0 p-12 z-20 flex flex-col justify-end h-full">
                
                <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-[0.23,1,0.32,1]">
                  
                  {/* Icon & Category - Reveals on Hover */}
                  <div className="flex items-center gap-4 mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xl shadow-slate-300">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-black text-purple-600 uppercase tracking-widest">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Title (Stays readable by changing color) */}
                  <h3 className="text-4xl font-bold text-white group-hover:text-slate-950 transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Description Reveal */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100 transition-all duration-700 delay-300 overflow-hidden">
                    <p className="text-slate-600 text-lg leading-relaxed mt-6 mb-10 max-w-md">
                      {service.description}
                    </p>
                    
                    <button className="flex items-center gap-4 text-purple-600 font-bold text-xs uppercase tracking-[0.2em] group/btn">
                      Explore Case Study
                      <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover/btn:bg-purple-600 group-hover/btn:translate-x-3 transition-all duration-300">
                        <ArrowRight size={20} />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Bottom Active System Bar */}
                <div className={`absolute bottom-0 left-0 h-2 transition-all duration-1000 w-0 group-hover:w-full ${service.accent}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}