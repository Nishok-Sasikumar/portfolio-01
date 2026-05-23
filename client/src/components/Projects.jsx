import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { RevealText } from './RevealText';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import Magnetic from './Magnetic';

// Import Rich Project Components
import SmartEVCharging from './SmartEVCharging';
import AssuredContractFarming from './AssuredContractFarming';
import PortScanning from './PortScanning';
import FruitNinja from './FruitNinja';
import AILogSentinel from './AILogSentinel';
import PortfolioProject from './PortfolioProject';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  
  const projects = [
    { id: 'portfolio', component: <PortfolioProject />, title: 'Technical Portfolio', category: 'Full Stack' },
    { id: 'ev', component: <SmartEVCharging />, title: 'Smart EV Charging', category: 'Full Stack' },
    { id: 'farm', component: <AssuredContractFarming />, title: 'Contract Farming', category: 'Full Stack' },
    { id: 'scan', component: <PortScanning />, title: 'Port Scanning', category: 'Cyber Security' },
    { id: 'ninja', component: <FruitNinja />, title: 'Fruit Ninja', category: 'Game Dev' },
    { id: 'ai', component: <AILogSentinel />, title: 'AI Log Sentinel', category: 'Cyber Security' },
  ];

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
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
  };

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="py-24 md:py-48 px-6 md:px-20 max-w-[1400px] mx-auto border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Archival Text */}
      <div className="absolute top-0 left-0 text-[30vw] md:text-[20vw] font-serif font-black text-white/[0.01] select-none pointer-events-none -translate-x-1/4 -translate-y-1/4 leading-none">
        SELECTED
      </div>

      <div className="section-title-container mb-16 md:mb-32 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
          <span className="subheading-mono text-[8px] md:text-[10px]">Protocol 02 // Archive</span>
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
        </div>
        
        <h3 className="text-5xl md:text-7xl lg:text-9xl heading-editorial flex flex-col items-center justify-center mb-8 md:mb-12">
          <RevealText text="Strategic" delay={0.2} />
          <span className="text-amber-500/80 italic">Artifacts.</span>
        </h3>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 160, md: 240 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto"
        />

        {/* GitHub Link Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <Magnetic strength={0.1}>
            <a 
              href="https://github.com/Nishok-Sasikumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-6 px-10 py-4 rounded-full bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/60 transition-all duration-700 relative overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.05)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              {/* Animated Background Shimmer */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
              />

              <span className="text-xs font-mono uppercase tracking-[0.4em] text-amber-500/80 group-hover:text-amber-400 transition-colors relative z-10">
                Access Technical Archive on GitHub
              </span>
              <div className="relative z-10 p-2 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors">
                <FaGithub className="text-amber-500 group-hover:text-amber-400 transition-colors" size={18} />
              </div>
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <div className="relative z-10 min-h-[600px] flex items-center justify-center">
        {/* Navigation Buttons */}
        <div className="absolute left-0 md:-left-4 z-20">
          <Magnetic strength={0.2}>
            <button 
              onClick={() => paginate(-1)}
              className="p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-amber-500/60 hover:text-amber-500 transition-all duration-500 backdrop-blur-sm"
            >
              <FaChevronLeft size={20} />
            </button>
          </Magnetic>
        </div>

        <div className="absolute right-0 md:-right-4 z-20">
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
              {projects[currentIndex].component}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="absolute -bottom-12 flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {projects.map((_, i) => (
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
              {projects[currentIndex].category}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-amber-500/40">
              {projects[currentIndex].title}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
