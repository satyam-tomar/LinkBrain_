import { motion } from 'framer-motion';

const footerLinks = {
  Platform: ['System Architecture', 'IoT Integration', 'Edge Computing', 'Security'],
  Resources: ['Documentation', 'API Reference', 'Case Studies', 'Community'],
  Company: ['About LinkBrain', 'Research', 'Careers', 'Contact'],
  Legal: ['Privacy Protocol', 'Terms of Service', 'Cookie Policy'],
};

// ✅ Corrected array structure and added SVGs
const socialLink = [
  {
    name: 'Twitter',
    url: 'https://x.com/_LinkBrain',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_linkbrain',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/link-brain-613868403',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:linkbrain11@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] border-t border-gray-200/60 py-20 px-6 lg:px-10 relative overflow-hidden">
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

            {/* ✅ Updated Social Icons Mapping */}
            <div className="flex gap-4 mt-8">
              {socialLink.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-violet-300 hover:text-violet-600 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links mapping */}
          {/* {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-violet-600 transition-colors font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
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