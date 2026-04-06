import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
  { label: 'Custom Talks', href: '#custom-talks' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-[0_4px_24px_rgba(139,92,246,0.1)] border-b border-violet-50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo - Updated to LinkBrain with Bubble Font */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-200 group-hover:scale-105 transition-transform duration-200">
            <span className="text-white font-bold text-lg">O</span>
          </div>
          <span 
            className="text-xl font-bold tracking-tight text-gray-900"
            style={{ fontFamily: "'Comfortaa', cursive" }}
          >
            LinkBrain
          </span>
        </a>

        {/* Desktop Links - Updated hover states to Violet */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm text-gray-600 hover:text-violet-600 font-medium transition-colors duration-150 group"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            </li>
          ))}
          <li className="ml-4">
            {/* Main CTA Button - Violet Gradient */}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-200 hover:shadow-lg hover:shadow-violet-300 hover:scale-[1.03] active:scale-[0.97] transition-all duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile hamburger - Updated to Violet accents */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-violet-600 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-violet-600 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-violet-600 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu - Updated to Violet theme */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-violet-100 px-8 py-6 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-gray-700 hover:text-violet-600 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 text-center px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-lg shadow-violet-100"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}