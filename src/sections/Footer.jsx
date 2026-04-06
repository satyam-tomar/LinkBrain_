import { motion } from 'framer-motion';

const footerLinks = {
  Platform: ['System Architecture', 'IoT Integration', 'Edge Computing', 'Security'],
  Resources: ['Documentation', 'API Reference', 'Case Studies', 'Community'],
  Company: ['About LinkBrain', 'Research', 'Careers', 'Contact'],
  Legal: ['Privacy Protocol', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] border-t border-gray-200/60 py-20 px-6 lg:px-10 relative overflow-hidden">
      {/* Subtle background glow to keep the "filled" theme consistent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center shadow-[0_10px_20px_rgba(139,92,246,0.2)]">
                <span className="text-white font-black text-xl" style={{ fontFamily: "'Comfortaa', cursive" }}>L</span>
              </div>
              <span className="text-xl font-extrabold text-gray-900 tracking-tighter" style={{ fontFamily: "'Comfortaa', cursive" }}>
                LinkBrain
              </span>
            </div>
            
            <p className="text-sm text-gray-500/80 leading-relaxed max-w-xs font-medium">
              Revolutionizing physical environments through agentic AI and seamless LLM-to-Hardware integration.
            </p>

            <div className="flex gap-4 mt-8">
              {['𝕏', 'in', '▶', '●'].map((icon) => (
                <button
                  key={icon}
                  className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-sm text-gray-400 hover:border-violet-300 hover:text-violet-600 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="col-span-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                {section}
              </p>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:text-violet-600 transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-violet-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} LinkBrain Labs.</span>
            <span className="hidden md:inline text-gray-200">|</span>
            <span className="text-violet-400/60">Intelligence in Every Atom</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-violet-600 transition-colors">System Status</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Privacy Ops</a>
            <div className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-violet-500">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                V2.04 Secure
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}