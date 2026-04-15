import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom'; // Added for routing

// Updated navLinks to match your Pages (Home, Services, Contact)
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Shared dynamic active style for NavLinks
  const linkStyle = ({ isActive }) => 
    `relative px-4 py-2 text-sm font-medium transition-colors duration-150 group ${
      isActive ? 'text-violet-600' : 'text-gray-600 hover:text-violet-600'
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-[0_4px_24px_rgba(139,92,246,0.1)] border-b border-violet-50'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo - Link replaces <a> */}
          <Link to="/" className="flex items-center gap-2 group z-[110]">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-200 group-hover:scale-105 transition-transform duration-200">
              <span className="font-bold text-lg text-black">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Comfortaa', cursive" }}>
              LinkBrain
            </span>
          </Link>

          {/* Desktop Links - NavLink replaces <a> */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink 
                  to={link.href} 
                  className={linkStyle} 
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {link.label}
                  {/* Underline for active state handled via CSS/Active prop */}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                </NavLink>
              </li>
            ))}
            <li className="ml-4">
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-200 hover:shadow-lg hover:shadow-violet-300 transition-all"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger remains same */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-[110] flex flex-col gap-1.5 p-2">
            <span className={`block w-6 h-0.5 bg-violet-600 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-violet-600 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-violet-600 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </motion.header>

      {/* MOBILE GLASS SLIDER */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-violet-900/5 backdrop-blur-sm z-[90] md:hidden" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed top-0 right-0 bottom-0 w-[85%] bg-white/40 backdrop-blur-2xl border-l border-white/40 z-[95] md:hidden flex flex-col p-10 pt-32 shadow-2xl">
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div key={link.label} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 + i * 0.1 }}>
                    <NavLink
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) => `text-3xl font-bold tracking-tight transition-colors ${isActive ? 'text-violet-600' : 'text-gray-800'}`}
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                  <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-4 block text-center px-6 py-4 rounded-2xl text-lg font-bold bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-xl shadow-violet-200" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}