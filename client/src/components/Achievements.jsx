import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { use3DTilt } from '../hooks/use3DTilt';
import { RevealText } from './RevealText';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Magnetic from './Magnetic';

const achievementsData = [
  { 
    id: 1, 
    title: 'CDCC Coordinator', 
    description: 'Serving as a coordinator of CDCC (Coding Club) (2025-Current).',
    date: 'MMXXV'
  },
  { 
    id: 2, 
    title: 'CSI Member', 
    description: 'Member of Computer Society of India (2025-Current).',
    date: 'MMXXV'
  },
  { 
    id: 3, 
    title: '2nd Prize in Proof of Concept', 
    description: 'Won 2nd prize in Proof of Concept at KEC.',
    date: 'MMXXIV'
  },
  { 
    id: 4, 
    title: '300+ LeetCode Problems', 
    description: 'Solved 300+ algorithmic problems on LeetCode.',
    date: 'MMXXVI',
    url: 'https://leetcode.com/u/Nishok_S/'
  },
  { 
    id: 5, 
    title: '1st Prize in Project Presentation', 
    description: 'Won 1st prize in Project Presentation at Computer Society of India.',
    date: 'MMXXIII'
  }
];

const AchievementCard = ({ ach, index }) => {
  const isLarge = index === 0 || index === 3;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`relative group overflow-hidden premium-glass ${
        isLarge ? 'md:col-span-2 md:row-span-2' : 'md:col-span-2 md:row-span-1'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Cinematic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative p-8 md:p-12 h-full flex flex-col">
        <div className="flex justify-between items-start mb-auto">
          <div className="flex flex-col gap-1">
            <span className="subheading-mono !text-amber-500/60 text-[10px]">{ach.date}</span>
            <span className="text-[8px] font-mono text-stone-600 uppercase tracking-widest">Protocol_REF_{ach.id}</span>
          </div>
          <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] group-hover:border-amber-500/20 transition-all duration-700">
             <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-500 animate-pulse" />
          </div>
        </div>

        <div className={isLarge ? 'mt-12' : 'mt-8'}>
          <h4 className={`${isLarge ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl'} font-serif text-stone-100 mb-6 leading-tight tracking-tight group-hover:text-amber-500 transition-colors duration-700`}>
            {ach.title}
          </h4>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-amber-500/20" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-stone-500">Verified Milestone</span>
          </div>

          <p className={`${isLarge ? 'text-xl' : 'text-sm'} text-stone-400 font-serif italic leading-relaxed group-hover:text-stone-200 transition-colors duration-700 max-w-2xl`}>
            "{ach.description}"
          </p>

          {ach.url && (
            <div className="mt-8">
              <Magnetic strength={0.1}>
                <a 
                  href={ach.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 group/link"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500/60 group-hover/link:text-amber-500 transition-colors">
                    View LeetCode Profile
                  </span>
                  <FaExternalLinkAlt className="text-amber-500/40 group-hover/link:text-amber-500 transition-colors" size={10} />
                </a>
              </Magnetic>
            </div>
          )}
        </div>

        {/* Technical HUD elements */}
        <div className="absolute bottom-8 right-8 flex items-end gap-1 opacity-20 group-hover:opacity-60 transition-opacity duration-700">
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={i}
              className="w-1 bg-amber-500"
              animate={{ height: [4, 12, 4] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const containerRef = useRef(null);
  
  return (
    <section 
      ref={containerRef}
      id="achievements" 
      className="py-24 md:py-48 px-6 md:px-20 max-w-[1400px] mx-auto border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Archival Text */}
      <div className="absolute top-0 right-0 text-[20vw] font-serif font-black text-white/[0.01] select-none pointer-events-none translate-x-1/4 -translate-y-1/4 leading-none">
        LEGACY
      </div>

      <div className="section-title-container mb-16 md:mb-32 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
          <span className="subheading-mono text-[8px] md:text-[10px]">Protocol 05 // Milestones</span>
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
        </div>
        
        <h3 className="text-5xl md:text-7xl lg:text-9xl heading-editorial flex flex-col items-center justify-center mb-8 md:mb-12">
          <RevealText text="Strategic" delay={0.2} />
          <span className="text-amber-500/80 italic">Achievements.</span>
        </h3>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 160, md: 240 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10 auto-rows-auto">
        {achievementsData.map((ach, index) => (
          <AchievementCard key={ach.id} ach={ach} index={index} />
        ))}
      </div>

      {/* Archival Footer */}
      <div className="mt-24 flex justify-between items-center opacity-20 border-t border-white/5 pt-12 relative z-10">
        <div className="flex flex-col gap-2">
          <span className="text-[8px] font-mono uppercase tracking-widest text-stone-500">Record Status: Authenticated</span>
          <span className="text-[8px] font-mono uppercase tracking-widest text-stone-500">Node: 0x4A22...F</span>
        </div>
        <div className="w-32 h-px bg-white/10" />
        <span className="text-[8px] font-mono uppercase tracking-[0.8em] text-stone-500">End of Record</span>
      </div>
    </section>
  );
};

export default Achievements;
