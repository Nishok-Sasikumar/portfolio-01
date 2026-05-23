import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText } from './RevealText';

const eduData = [
  {
    id: 1,
    degree: 'B.E Computer Science and Design',
    institution: 'Kongu Engineering College, Erode.',
    year: 'MMXXIII - PRESENT',
    details: 'Focusing on the intersection of human-centric design and scalable software architecture.',
    score: '8.6',
    unit: 'CGPA'
  },
  {
    id: 2,
    degree: 'Higher Secondary Education',
    institution: 'Maharishi International Residential School, Chennai.',
    year: 'MMXXI - MMXXIII',
    details: 'Completed advanced studies in Mathematics and Computer Science with excellence.',
    score: '70',
    unit: '%'
  },
  {
    id: 3,
    degree: 'Secondary Education',
    institution: 'Appu Arivaalayem CBSE Secondary School, Erode.',
    year: 'MMXIX - MMXXI',
    details: 'Foundation years focused on developing a strong base in science and mathematics.',
    score: '92.6',
    unit: '%'
  }
];

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section 
      ref={containerRef}
      id="education" 
      className="py-24 md:py-32 px-6 md:px-20 max-w-[1400px] mx-auto border-t border-white/5 relative overflow-hidden"
    >
      {/* Decorative Archival Background Text */}
      <div className="absolute top-0 right-0 text-[30vw] md:text-[20vw] font-serif font-black text-white/[0.01] select-none pointer-events-none translate-x-1/4 -translate-y-1/4 leading-none">
        ARCHIVE
      </div>

      <div className="section-title-container mb-16 md:mb-32 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
          <span className="subheading-mono text-[8px] md:text-[10px]">Protocol 04 // Background</span>
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
        </div>
        
        <h3 className="text-5xl md:text-7xl lg:text-9xl heading-editorial flex flex-col items-center justify-center mb-8 md:mb-12">
          <RevealText text="Academic" delay={0.2} />
          <span className="text-amber-500/80 italic">Timeline.</span>
        </h3>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 160, md: 240 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 lg:left-[12.5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

        <div className="space-y-24">
          {eduData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 group relative"
            >
              {/* Year Column */}
              <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start items-center lg:items-end lg:pr-12 relative mb-4 lg:mb-0">
                <span className="archival-number text-amber-500 lg:mb-4 !opacity-80 text-xs md:text-sm">{edu.year}</span>
                <div className="hidden lg:block w-12 h-px bg-amber-600/30 group-hover:w-24 group-hover:bg-amber-500 transition-all duration-700 ease-out" />
                
                {/* Connector Dot */}
                <div className="absolute -right-[1px] top-2 w-2 h-2 bg-stone-950 border border-amber-500/50 rounded-full z-10 hidden lg:block group-hover:bg-amber-500 group-hover:scale-150 transition-all duration-500" />
              </div>

              {/* Content Column */}
              <div className="lg:col-span-9 relative">
                <div className="p-6 md:p-12 premium-glass premium-glass-hover group-hover:bg-stone-900/60 relative overflow-hidden">
                  {/* Internal Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  {/* Top Right Archive Mark */}
                  <div className="absolute top-4 md:top-6 right-4 md:right-8 font-mono text-[6px] md:text-[8px] tracking-[0.4em] text-white/10 uppercase group-hover:text-amber-500/20 transition-colors duration-700">
                    Record_{edu.id.toString().padStart(3, '0')}
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mb-6 md:mb-10">
                    <div className="flex-1">
                      <h4 className="text-2xl md:text-5xl font-serif text-stone-100 mb-2 md:mb-3 tracking-tight group-hover:text-amber-500/90 transition-colors duration-500 leading-tight md:leading-none">
                        {edu.degree}
                      </h4>
                      <p className="text-lg md:text-xl text-amber-600/80 font-serif italic tracking-wide">
                        {edu.institution}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end shrink-0">
                      <span className="subheading-mono !text-stone-500 mb-1 md:mb-2 text-[8px]">Academic Index</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl md:text-5xl font-serif text-stone-100 group-hover:text-amber-500 transition-colors duration-500">{edu.score}</span>
                        <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-stone-500">{edu.unit}</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-amber-600/20 group-hover:bg-amber-600/50 transition-colors duration-700" />
                    <p className="text-stone-400 font-serif italic text-base md:text-xl leading-relaxed pl-6 md:pl-8 group-hover:text-stone-200 transition-colors duration-700">
                      "{edu.details}"
                    </p>
                  </div>

                  {/* Geometric Ornament instead of Emoji */}
                  <div className="absolute bottom-4 md:bottom-6 right-4 md:right-8 opacity-5 group-hover:opacity-20 transition-all duration-1000 group-hover:rotate-90">
                    <svg width="40" height="40" mdWidth="60" mdHeight="60" viewBox="0 0 100 100" className="fill-none stroke-amber-500 stroke-[0.5]">
                      <circle cx="50" cy="50" r="45" />
                      <circle cx="50" cy="50" r="35" strokeDasharray="4 4" />
                      <rect x="30" y="30" width="40" height="40" transform="rotate(45 50 50)" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
