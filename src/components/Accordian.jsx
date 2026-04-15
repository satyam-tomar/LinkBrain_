import React from 'react'

const Accordian = () => {
  return (
   <div class="min-h-screen bg-[#f8f7ff] flex items-center justify-center p-4 sm:p-10 font-sans antialiased">
  
  <div class="flex flex-col lg:flex-row w-full max-w-7xl h-auto lg:h-[600px] gap-0 rounded-[2.5rem] overflow-hidden shadow-[0_40px_120px_-20px_rgba(88,28,135,0.18)] border border-purple-100">

    <div class="group relative flex-1 hover:flex-[2] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] cursor-pointer border-b lg:border-b-0 lg:border-r border-purple-50">
      <div class="flex-[1.5] bg-white p-8 sm:p-12 flex flex-col justify-between group-hover:bg-purple-50/20 transition-colors">
        <span class="text-[10px] font-black tracking-[0.3em] text-purple-400 uppercase">Acoustics & Lighting</span>
        <h3 class="text-2xl sm:text-3xl font-light text-slate-900 leading-tight">
          How does AI optimize my <br/><span class="font-bold">Home Studio?</span>
        </h3>
      </div>
      <div class="h-28 group-hover:h-64 bg-purple-600 p-8 sm:p-12 flex flex-col justify-center transition-all duration-700 overflow-hidden">
        <p class="text-purple-50 opacity-0 group-hover:opacity-100 transition-opacity delay-200 text-sm sm:text-base leading-relaxed mb-6">
          Our system uses IoT sensors to analyze room acoustics and automatically adjust smart baffles and lighting presets based on whether you are recording, mixing, or streaming.
        </p>
        <div class="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
          View Studio Tech <span class="group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </div>

    <div class="group relative flex-1 hover:flex-[2] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] cursor-pointer border-b lg:border-b-0 lg:border-r border-purple-50">
      <div class="flex-[1.5] bg-white p-8 sm:p-12 flex flex-col justify-between group-hover:bg-purple-50/20 transition-colors">
        <span class="text-[10px] font-black tracking-[0.3em] text-purple-400 uppercase">Customer Analytics</span>
        <h3 class="text-2xl sm:text-3xl font-light text-slate-900 leading-tight">
          Can AI track engagement in <br/><span class="font-bold">Showrooms?</span>
        </h3>
      </div>
      <div class="h-28 group-hover:h-64 bg-purple-700 p-8 sm:p-12 flex flex-col justify-center transition-all duration-700 overflow-hidden">
        <p class="text-purple-50 opacity-0 group-hover:opacity-100 transition-opacity delay-200 text-sm sm:text-base leading-relaxed mb-6">
          Yes. Integrated AI cameras provide heatmaps of visitor flow, automatically adjusting showroom focal lighting to highlight products that receive the most attention.
        </p>
        <div class="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
          Retail Automation <span class="group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </div>

    <div class="group relative flex-1 hover:flex-[2] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] cursor-pointer border-b lg:border-b-0 lg:border-r border-purple-50">
      <div class="flex-[1.5] bg-white p-8 sm:p-12 flex flex-col justify-between group-hover:bg-purple-50/20 transition-colors">
        <span class="text-[10px] font-black tracking-[0.3em] text-purple-400 uppercase">Adaptive Learning</span>
        <h3 class="text-2xl sm:text-3xl font-light text-slate-900 leading-tight">
          What makes a <br/><span class="font-bold">Smart Classroom?</span>
        </h3>
      </div>
      <div class="h-28 group-hover:h-64 bg-purple-800 p-8 sm:p-12 flex flex-col justify-center transition-all duration-700 overflow-hidden">
        <p class="text-purple-50 opacity-0 group-hover:opacity-100 transition-opacity delay-200 text-sm sm:text-base leading-relaxed mb-6">
          Automation manages air quality, lighting levels for eye safety, and automated attendance through facial recognition, letting teachers focus entirely on education.
        </p>
        <div class="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
          Campus Solutions <span class="group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </div>

    {/* <div class="group relative flex-1 hover:flex-[2] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] cursor-pointer">
      <div class="flex-[1.5] bg-white p-8 sm:p-12 flex flex-col justify-between group-hover:bg-purple-50/20 transition-colors">
        <span class="text-[10px] font-black tracking-[0.3em] text-purple-400 uppercase">Emergency Service</span>
        <h3 class="text-2xl sm:text-3xl font-light text-slate-900 leading-tight">
          How do drones assist in <br/><span class="font-bold">Disaster Zones?</span>
        </h3>
      </div>
      <div class="h-28 group-hover:h-64 bg-purple-900 p-8 sm:p-12 flex flex-col justify-center transition-all duration-700 overflow-hidden">
        <p class="text-purple-50 opacity-0 group-hover:opacity-100 transition-opacity delay-200 text-sm sm:text-base leading-relaxed mb-6">
          Our specialized IoT-linked drones deliver medical supplies and create emergency Wi-Fi mesh networks in areas where traditional infrastructure has failed.
        </p>
        <div class="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
          Crisis Tech <span class="group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </div> */}

  </div>
</div>
  )
}

export default Accordian