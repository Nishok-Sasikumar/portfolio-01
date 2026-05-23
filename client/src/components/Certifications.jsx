import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText } from './RevealText';
import { FaChevronLeft, FaChevronRight, FaLinkedin } from 'react-icons/fa';
import Magnetic from './Magnetic';

const certsData = [
  { 
    id: 1, 
    title: 'Oracle APEX Certification', 
    issuer: 'Oracle Corporation', 
    year: 'MMXXIV',
    code: 'ORA-APX-721',
    category: 'Database Orchestration',
    description: 'Advanced proficiency in low-code application development and relational database orchestration.'
  },
  { 
    id: 2, 
    title: 'Basics of Cyber Security', 
    issuer: 'CISCO Networking Academy', 
    year: 'MMXXIII',
    code: 'CS-CIS-042',
    category: 'Network Defense',
    description: 'Foundational security protocols, threat vectors, and network defense strategies.'
  },
  { 
    id: 3, 
    title: 'Microsoft Threat Modelling', 
    issuer: 'IRURisk / Microsoft', 
    year: 'MMXXIII',
    code: 'MSFT-TM-109',
    category: 'Risk Assessment',
    description: 'Architectural risk assessment and proactive vulnerability mitigation strategies.'
  },
  { 
    id: 4, 
    title: 'Embedded System Engineering', 
    issuer: 'Linux Foundation', 
    year: 'MMXXIV',
    code: 'LFX-EMB-332',
    category: 'System Optimization',
    description: 'Low-level kernel interaction and hardware-software interface optimization.'
  }
];

const CredentialCard = ({ cert }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="premium-glass premium-glass-hover p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
        {/* Technical Header Overlay */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        
        {/* Archival Metadata Side */}
        <div className="flex flex-col gap-6 min-w-[140px] border-b md:border-b-0 md:border-r border-white/5 pb-8 md:pb-0 md:pr-12 w-full md:w-auto">
          <div className="flex flex-col">
            <span className="subheading-mono !text-amber-500/60 mb-1 text-xs">{cert.code}</span>
            <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">{cert.year}</span>
          </div>
          
          <div className="w-20 h-20 border border-white/5 flex items-center justify-center bg-white/[0.02]">
            <svg width="32" height="32" viewBox="0 0 24 24" className="fill-none stroke-amber-500/40 stroke-[1]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          <div className="mt-auto">
            <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-stone-600 block mb-2">Authenticated By</span>
            <span className="text-[10px] font-serif italic text-stone-400">{cert.issuer}</span>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex-1 text-left">
          <div className="mb-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-amber-500/20 block mb-3">
              {cert.category}
            </span>
            <h4 className="text-3xl md:text-5xl font-serif text-stone-100 leading-tight tracking-tight group-hover:text-amber-500 transition-colors duration-500">
              {cert.title}
            </h4>
          </div>
          
          <div className="w-24 h-px bg-amber-500/30 mb-8" />
          
          <p className="text-stone-400 font-serif text-lg md:text-xl italic leading-relaxed max-w-xl">
            "{cert.description}"
          </p>

          <div className="mt-12 flex items-center gap-4">
             <div className="px-4 py-2 border border-amber-500/10 rounded-full bg-amber-500/[0.02]">
                <span className="text-[9px] font-mono uppercase tracking-widest text-amber-500/60">Verified Credential</span>
             </div>
          </div>
        </div>

        {/* Decorative Scanner Line */}
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-amber-500/20 z-20 pointer-events-none"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Bottom Corner ID */}
        <div className="absolute bottom-6 right-8 font-mono text-[8px] tracking-[0.5em] text-white/5 uppercase">
          LEDGER_REF_{cert.id.toString().padStart(3, '0')}
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + certsData.length) % certsData.length);
  };

  return (
    <section 
      ref={containerRef}
      id="certifications" 
      className="py-24 md:py-48 px-6 md:px-20 max-width-container border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none select-none -z-10">
        <svg width="100%" height="100%" viewBox="0 0 800 800">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-title-container mb-16 md:mb-32 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
          <span className="subheading-mono text-[8px] md:text-[10px]">Protocol 06 // Credentials</span>
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
        </div>
        
        <h3 className="text-5xl md:text-7xl lg:text-9xl heading-editorial flex flex-col items-center justify-center mb-8 md:mb-12">
          <RevealText text="Validation" delay={0.2} />
          <span className="text-amber-500/80 italic">Ledger.</span>
        </h3>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 160, md: 240 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto"
        />

        {/* LinkedIn Verification Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <Magnetic strength={0.1}>
            <a 
              href="https://www.linkedin.com/in/nishok-sasikumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-6 px-10 py-4 rounded-full bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/60 transition-all duration-700 relative overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.05)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              {/* Animated Background Shimmer */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
              />

              <span className="text-xs font-mono uppercase tracking-[0.4em] text-amber-500/80 group-hover:text-amber-400 transition-colors relative z-10">
                Verify extended credentials on LinkedIn
              </span>
              <div className="relative z-10 p-2 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors">
                <FaLinkedin className="text-amber-500 group-hover:text-amber-400 transition-colors" size={18} />
              </div>
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <div className="relative z-10 min-h-[500px] flex items-center justify-center">
        {/* Navigation Buttons */}
        <div className="absolute left-0 md:left-4 z-20">
          <Magnetic strength={0.2}>
            <button 
              onClick={() => paginate(-1)}
              className="p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-amber-500/60 hover:text-amber-500 transition-all duration-500 backdrop-blur-sm"
            >
              <FaChevronLeft size={20} />
            </button>
          </Magnetic>
        </div>

        <div className="absolute right-0 md:right-4 z-20">
          <Magnetic strength={0.2}>
            <button 
              onClick={() => paginate(1)}
              className="p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-amber-500/60 hover:text-amber-500 transition-all duration-500 backdrop-blur-sm"
            >
              <FaChevronRight size={20} />
            </button>
          </Magnetic>
        </div>

        {/* Slides */}
        <div className="w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="w-full"
            >
              <CredentialCard cert={certsData[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="absolute -bottom-16 flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {certsData.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === currentIndex 
                    ? 'bg-amber-500 w-8' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[8px] font-mono uppercase tracking-[0.6em] text-amber-500/20">
              {certsData[currentIndex].category}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-amber-500/40">
              {certsData[currentIndex].title}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Verification Seal */}
      <div className="mt-40 flex flex-col items-center justify-center opacity-20">
        <div className="w-24 h-24 rounded-full border border-amber-500/30 flex items-center justify-center p-4 mb-4">
          <svg viewBox="0 0 100 100" className="stroke-amber-500 fill-none stroke-[1]">
            <path d="M20 50 L40 70 L80 30" />
            <circle cx="50" cy="50" r="45" strokeDasharray="2 4" />
          </svg>
        </div>
        <span className="subheading-mono !text-[8px]">Authenticated Record Index</span>
      </div>
    </section>
  );
};

export default Certifications;
