import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
      setProgress(current);
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-[#000508]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
    >
      {/* Cinematic Caustics in Preloader */}
      <div className="caustics-layer opacity-10" />

      {/* Volumetric Light Center */}
      <motion.div
        className="absolute w-[80vh] h-[80vh] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #005f73 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono tracking-[0.8em] uppercase text-amber-500/60"
          >
            Synthesizing Artifacts
          </motion.span>
          
          <div className="relative w-64 h-px bg-white/10 overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-amber-500/60"
              style={{ width: `${progress}%` }}
            />
            <motion.div 
              className="absolute inset-0 bg-amber-500 shadow-[0_0_15px_#ee9b00]"
              style={{ width: `${progress}%` }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
          
          <div className="flex justify-between w-full">
            <span className="text-[10px] font-mono text-amber-500/40">{progress}%</span>
            <span className="text-[10px] font-mono text-amber-500/40">v2.0.4</span>
          </div>
        </div>

        <motion.h2 
          className="text-4xl md:text-6xl font-serif text-white tracking-[0.2em] font-light"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          NISHOK
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Preloader;
