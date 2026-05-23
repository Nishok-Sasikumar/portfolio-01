import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaLayerGroup, FaBolt } from 'react-icons/fa';
import { RevealText } from './RevealText';

export default function PortfolioProject() {
  return (
    <section id="portfolio-project" className="relative py-16 md:py-32 px-6 overflow-hidden max-width-container">
      <motion.div 
        className="relative premium-glass p-8 md:p-20 overflow-hidden group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="subheading-mono !text-amber-500/60">System Protocol 01</span>
              <div className="w-12 h-px bg-amber-500/20" />
            </div>

            <h2 className="text-4xl md:text-7xl heading-editorial text-stone-100 mb-8 leading-tight">
              <RevealText text="Technical" delay={0.2} /> <br />
              <span className="text-amber-500/80">Portfolio.</span>
            </h2>

            <p className="text-lg md:text-2xl font-serif text-stone-400 leading-relaxed font-extralight tracking-tight mb-12 max-w-2xl">
              "A high-performance <span className="text-stone-200">digital archive</span> engineered with React and Framer Motion. Harmonizing technical dossiers with cinematic motion for an immersive professional experience."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <FaCode />, title: 'React Engine', desc: 'Component-based architecture for modularity.' },
                { icon: <FaBolt />, title: 'Motion Suite', desc: 'Fluid transitions and physics-based interactions.' }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group/item hover:bg-white/[0.04] transition-all duration-500">
                  <div className="text-amber-500/60 text-2xl mb-4 group-hover/item:scale-110 group-hover/item:text-amber-400 transition-all duration-500">{item.icon}</div>
                  <div className="text-sm font-mono uppercase tracking-widest text-stone-200 mb-2">{item.title}</div>
                  <div className="text-xs font-serif italic text-stone-500 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cinematic Portfolio Visualization */}
          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Rotating Tech Stack Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border border-amber-500/10 rounded-xl"
                  style={{ 
                    width: `${(i + 1) * 30}%`, 
                    height: `${(i + 1) * 30}%`,
                  }}
                  animate={{ 
                    rotate: [0, i % 2 === 0 ? 360 : -360],
                    borderColor: ['rgba(245,158,11,0.05)', 'rgba(245,158,11,0.2)', 'rgba(245,158,11,0.05)'] 
                  }}
                  transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                />
              ))}
              
              {/* Central Core Icon */}
              <div className="relative z-10 w-16 h-16 bg-stone-900 border border-amber-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                <FaLayerGroup className="text-amber-500 text-3xl animate-pulse" />
              </div>

              {/* Floating Code Snippets (Visual abstraction) */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-1 bg-amber-500/20 rounded-full"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: i % 2 === 0 ? '-10%' : '80%',
                  }}
                  animate={{
                    x: i % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </div>

            {/* Radial Lighting */}
            <div className="absolute inset-[-50%] bg-amber-500/[0.04] blur-[100px] rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
