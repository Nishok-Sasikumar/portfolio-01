import React, { useState } from 'react';
import Magnetic from './Magnetic';
import { motion } from 'framer-motion';

const Navbar = ({ onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 w-full z-[9997] transition-all duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled ? 'py-4 bg-stone-950/40 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 flex justify-between items-center">
        <Magnetic>
          <a href="/" className="group flex items-center gap-4">
            <div className="w-10 h-10 border border-white/10 bg-stone-900/40 flex items-center justify-center group-hover:border-amber-600/40 transition-all duration-500 rounded-sm overflow-hidden relative">
              <span className="text-xl font-serif text-amber-600 relative z-10">N</span>
              <motion.div 
                className="absolute inset-0 bg-amber-600/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              />
            </div>
            <span className="text-sm font-serif tracking-[0.4em] uppercase text-stone-200 group-hover:text-amber-500 transition-colors duration-500">
              Nishok S<span className="text-amber-600">.</span>
            </span>
          </a>
        </Magnetic>

        <div className="hidden md:flex items-center gap-12">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <Magnetic key={item}>
              <a 
                href={`#${item}`} 
                className="text-[10px] font-mono tracking-[0.4em] uppercase text-stone-400 hover:text-amber-500 transition-colors duration-500 relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-500" />
              </a>
            </Magnetic>
          ))}
          <Magnetic>
            <button 
              onClick={onResumeClick}
              className="px-6 py-2 border border-white/10 text-[10px] font-mono tracking-[0.4em] uppercase text-stone-200 hover:bg-white hover:text-black transition-all duration-500"
            >
              Resume
            </button>
          </Magnetic>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
