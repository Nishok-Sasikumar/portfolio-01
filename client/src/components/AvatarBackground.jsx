import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ElementSymbol = ({ type, color, top, left, delay, size = 150 }) => {
  const symbols = {
    water: (
      <circle cx="50" cy="50" r="30" strokeDasharray="4 4" />
    ),
    mountain: (
      <path d="M50 20 L80 80 L20 80 Z" strokeDasharray="10 5" />
    ),
    temple: (
      <rect x="25" y="25" width="50" height="50" strokeDasharray="2 6" />
    ),
    sun: (
      <g>
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="35" strokeDasharray="1 10" />
      </g>
    )
  };

  return (
    <motion.div
      className="absolute pointer-events-none opacity-10"
      style={{ 
        top, 
        left, 
        width: size, 
        height: size,
        perspective: '800px'
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.05, 0.15, 0.05],
        scale: [1, 1.1, 1],
        rotate: [0, 90, 180, 270, 360],
        rotateX: [0, 20, -20, 0],
        rotateY: [0, -20, 20, 0],
      }}
      transition={{ 
        duration: 20, 
        delay, 
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <g fill="none" stroke={color} strokeWidth="0.5">
          {symbols[type]}
        </g>
      </svg>
    </motion.div>
  );
};

const AvatarBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.5]);

  return (
    <motion.div 
      style={{ opacity }}
      className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] bg-[#000508]"
    >
      {/* Deep Ocean Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001219] via-[#00080a] to-[#000000]" />
      
      {/* Realistic Water Caustics */}
      <div className="caustics-layer opacity-20" />
      <motion.div 
        style={{ y }}
        className="caustics-layer opacity-10" 
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Volumetric Light Rays */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute top-[-20%] left-[20%] w-[200px] h-[150%] bg-gradient-to-b from-teal-500/[0.07] via-teal-500/[0.03] to-transparent blur-[100px]"
          style={{
            transform: `rotate(${20 + i * 8}deg)`,
            left: `${10 + i * 25}%`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [0, 80, 0],
          }}
          transition={{
            duration: 20 + i * 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Strategic Core - Ambient Technical Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #005f73 0%, #001219 40%, transparent 70%)',
          filter: 'blur(150px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Marine Snow (Realistic particles) */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[1px] rounded-full bg-white opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 200],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "linear"
          }}
        />
      ))}

      {/* Interactive Light Leaks (Mouse reactive) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/[0.02] via-transparent to-teal-500/[0.02] pointer-events-none" />
      
      {/* Deep Ocean Vignette Overlay */}
      <div className="absolute inset-0 shadow-[inset_0_0_300px_rgba(0,0,0,0.9)]" />
    </motion.div>
  );
};

export default AvatarBackground;
