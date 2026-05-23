import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText } from './RevealText';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-screen bg-transparent px-6 md:px-20 overflow-hidden text-center"
    >
      {/* Strategic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] underwater-glow opacity-20 blur-[250px] rounded-full pointer-events-none" />

      <motion.div
        style={{ scale, opacity }}
        className="z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12"
        >
          <span className="subheading-mono">The Technical Ledger</span>
        </motion.div>

        <div className="relative">
          <h1 className="text-[14vw] md:text-[12vw] lg:text-[15vw] heading-editorial mix-blend-plus-lighter relative z-10 leading-[0.8]">
            <RevealText text="NISHOK S." delay={0.8} />
          </h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2, duration: 2.5, ease: [0.23, 1, 0.32, 1] }}
            className="absolute -bottom-6 md:-bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent origin-center" 
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 md:mt-24 max-w-5xl"
        >
          <p className="text-xl md:text-3xl lg:text-5xl text-stone-200 font-serif italic leading-[1.2] font-extralight tracking-tight px-4 md:px-0">
            "Architecting <span className="text-amber-500/90 not-italic font-normal">digital excellence</span> through precision engineering and creative innovation."
          </p>
          
          <div className="flex items-center justify-center gap-8 md:gap-16 mt-16 md:mt-20">
            <div className="w-12 md:w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="subheading-mono !opacity-40 text-[8px] md:text-[10px]">Full Stack Architect</span>
            <div className="w-12 md:w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      {/* Atmospheric Bokeh Elements */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-teal-500/[0.03] blur-[150px] rounded-full pointer-events-none hidden lg:block"
      />
      
      {/* Explore Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] font-mono tracking-[1em] uppercase text-stone-500 font-bold">Explore</span>
          <motion.div 
            animate={{ 
              height: [0, 100, 0],
              opacity: [0, 1, 0],
              y: [0, 20, 40]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-gradient-to-b from-amber-600/60 via-amber-600 to-transparent" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
