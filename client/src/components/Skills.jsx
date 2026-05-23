import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { RevealText } from './RevealText';
import Magnetic from './Magnetic';

const skillsData = [
  { 
    category: 'Programming Languages', 
    items: [
      { name: 'C', proficiency: 85 },
      { name: 'Java', proficiency: 90 },
      { name: 'JavaScript', proficiency: 88 },
      { name: 'SQL', proficiency: 82 },
    ]
  },
  { 
    category: 'Web Development', 
    items: [
      { name: 'HTML', proficiency: 92 },
      { name: 'CSS', proficiency: 88 },
      { name: 'React.js', proficiency: 85 },
      { name: 'Node.js', proficiency: 80 },
      { name: 'Express.js', proficiency: 78 },
    ]
  },
  { 
    category: 'Databases & Cloud', 
    items: [
      { name: 'MySQL', proficiency: 85 },
      { name: 'MongoDB', proficiency: 80 },
      { name: 'Firestore', proficiency: 75 },
      { name: 'Firebase', proficiency: 78 },
    ]
  },
  { 
    category: 'Tools & Platforms', 
    items: [
      { name: 'VS Code', proficiency: 90 },
      { name: 'Git', proficiency: 85 },
      { name: 'Figma', proficiency: 75 },
      { name: 'Unity', proficiency: 70 },
    ]
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="py-24 md:py-32 px-6 md:px-20 max-w-[1400px] mx-auto border-t border-white/5 relative overflow-hidden"
    >
      <div className="section-title-container mb-16 md:mb-24">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
          <h2 className="text-[10px] md:text-xs font-serif tracking-[0.4em] uppercase text-amber-600">
            <RevealText text="03. Compendium" />
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
        </div>
        <h3 className="text-5xl md:text-8xl lg:text-9xl font-serif font-medium text-stone-100 uppercase tracking-tighter mix-blend-plus-lighter text-center">
          <RevealText text="Masteries." delay={0.3} />
        </h3>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80, md: 120 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-8 md:mt-12"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center mb-16 md:mb-24">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 p-2 premium-glass rounded-full">
          {skillsData.map((cat, i) => (
            <Magnetic key={cat.category} strength={0.1}>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 md:px-8 py-2 md:py-3 font-serif text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-700 rounded-full ${
                  activeCategory === cat.category 
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                    : 'text-stone-400 hover:text-stone-100'
                }`}
              >
                {cat.category}
              </motion.button>
            </Magnetic>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto"
        >
          {skillsData.find(cat => cat.category === activeCategory).items.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group relative p-6 md:p-10 premium-glass premium-glass-hover overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-6 md:mb-10">
                  <div className="flex flex-col gap-1 md:gap-2">
                    <span className="subheading-mono !text-amber-500/30 text-[8px]">Module {index + 1}</span>
                    <h4 className="text-2xl md:text-4xl font-serif text-stone-100 group-hover:text-white transition-colors duration-500">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="text-lg md:text-xl font-mono text-amber-500/60 tabular-nums">{skill.proficiency}%</span>
                </div>

                {/* Premium Progress Bar */}
                <div className="relative w-full h-px bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 bg-gradient-to-r from-amber-600/40 to-amber-400/60"
                  />
                  {/* Subtle Glow at end of bar */}
                  <motion.div 
                    initial={{ left: 0 }}
                    whileInView={{ left: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-amber-500 blur-[8px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
