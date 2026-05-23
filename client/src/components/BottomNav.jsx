import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaEnvelope, FaTrophy, FaCertificate } from 'react-icons/fa';
import Magnetic from './Magnetic';

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredCard] = useState(null);

  const navItems = [
    { id: 'home', icon: <FaHome />, label: 'Home', href: '#home' },
    { id: 'about', icon: <FaUser />, label: 'About', href: '#about' },
    { id: 'projects', icon: <FaBriefcase />, label: 'Work', href: '#projects' },
    { id: 'education', icon: <FaGraduationCap />, label: 'Edu', href: '#education' },
    { id: 'achievements', icon: <FaTrophy />, label: 'Awards', href: '#achievements' },
    { id: 'certifications', icon: <FaCertificate />, label: 'Certs', href: '#certifications' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      for (const id of sections.reverse()) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 md:bottom-10 left-0 w-full z-[9998] flex justify-center pointer-events-none px-4 md:px-6">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 1.2 }}
        className="flex items-center p-1.5 md:p-2.5 bg-stone-950/40 backdrop-blur-[32px] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] pointer-events-auto relative max-w-full overflow-x-auto no-scrollbar"
      >
        {/* Dynamic Glass Highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent rounded-[1.5rem] md:rounded-[2rem] pointer-events-none" />
        <div className="absolute inset-[1px] bg-stone-950/20 rounded-[calc(1.5rem-1px)] md:rounded-[calc(2rem-1px)] pointer-events-none" />

        <div className="flex items-center gap-0 md:gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;

            return (
              <Magnetic key={item.id} strength={0.3}>
                <a
                  href={item.href}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 transition-all duration-500 ${
                    isActive ? 'text-amber-500' : 'text-stone-400 hover:text-stone-100'
                  }`}
                >
                  {/* Active/Hover Liquid Background */}
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.div
                        layoutId="premium-pill"
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                        className={`absolute inset-1 rounded-xl md:rounded-2xl -z-0 ${
                          isActive 
                            ? 'bg-amber-500/15 border border-amber-500/20 shadow-[0_0_25px_rgba(238,155,0,0.15)]' 
                            : 'bg-white/5 border border-white/5'
                        }`}
                        transition={{ 
                          type: 'spring', 
                          stiffness: 250, 
                          damping: 25,
                          mass: 0.5
                        }}
                      />
                    )}
                  </AnimatePresence>

                  <span className={`text-lg md:text-xl relative z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    isActive ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    {item.icon}
                  </span>
                  
                  {/* Premium Tooltip - Hidden on Mobile */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.9 }}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block"
                      >
                        <div className="relative px-4 py-2 bg-stone-900/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
                          <span className="text-[11px] font-serif uppercase tracking-[0.3em] text-stone-100 whitespace-nowrap">
                            {item.label}
                          </span>
                          {/* Tooltip Arrow */}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-stone-900/80 border-r border-b border-white/10 rotate-45" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Active Indicator Dot */}
                  {isActive && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 md:w-1 h-0.5 md:h-1 bg-amber-500 rounded-full shadow-[0_0_10px_#ee9b00]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </Magnetic>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
};

export default BottomNav;
