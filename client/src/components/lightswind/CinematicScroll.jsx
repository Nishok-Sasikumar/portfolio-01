import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CinematicScroll = ({ children, className = "" }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Fade in as it enters, fade out as it leaves
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Scale up slightly as it centers, then scale down
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

  // Parallax Y offset
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Dynamic blur
  const blurValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale, y, filter }}
      className={`w-full flex justify-center items-center ${className}`}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};
