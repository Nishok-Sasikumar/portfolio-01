import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCut, FaSkull } from 'react-icons/fa';
import { RevealText } from './RevealText';

export default function FruitNinja() {
  return (
    <section id="fruit-ninja" className="relative py-16 md:py-32 px-6 overflow-hidden max-width-container">
      <motion.div 
        className="relative premium-glass p-8 md:p-20 overflow-hidden group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
          <div className="flex-1 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="subheading-mono !text-red-500/60">Creative Engine 07</span>
              <div className="w-12 h-px bg-red-500/20" />
            </div>

            <h2 className="text-4xl md:text-7xl heading-editorial text-stone-100 mb-8 leading-tight">
              <RevealText text="Blade Motion" delay={0.2} /> <br />
              <span className="text-red-500/80">Fruit Ninja.</span>
            </h2>

            <p className="text-lg md:text-2xl font-serif text-stone-400 leading-relaxed font-extralight tracking-tight mb-12 max-w-2xl">
              "A high-fidelity <span className="text-stone-200">slicing simulation</span> built on Unity's physics engine. Orchestrating fluid dynamics and collision detection for a visceral arcade experience."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <FaCut />, title: 'Slicing Physics', desc: 'Real-time mesh deformation and particle splitting.' },
                { icon: <FaSkull />, title: 'Risk Mechanics', desc: 'Explosive hazard detection and combo orchestration.' }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group/item hover:bg-white/[0.04] transition-all duration-500">
                  <div className="text-red-500/60 text-2xl mb-4 group-hover/item:scale-110 group-hover/item:text-red-400 transition-all duration-500">{item.icon}</div>
                  <div className="text-sm font-mono uppercase tracking-widest text-stone-200 mb-2">{item.title}</div>
                  <div className="text-xs font-serif italic text-stone-500 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cinematic Game Visualization */}
          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Blade Trace Effect */}
              <motion.div 
                className="absolute w-1 h-32 bg-gradient-to-t from-red-500/80 via-white/40 to-transparent blur-[2px]"
                animate={{ 
                  rotate: [0, 120, 240, 360],
                  scaleY: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating Fruits (Circles) */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-sm"
                  initial={{ x: -100, y: 100 }}
                  animate={{ 
                    x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                    y: [150, -150, 150],
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 5 + i, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.5 
                  }}
                >
                  {/* Slice mark */}
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white/20 -rotate-45" />
                </motion.div>
              ))}

              {/* Central Impact Glow */}
              <div className="relative z-10 w-4 h-4 bg-red-500/30 rounded-full blur-[4px] shadow-[0_0_30px_rgba(239,68,68,0.4)]" />
            </div>

            {/* Radial Lighting */}
            <div className="absolute inset-[-50%] bg-red-500/[0.04] blur-[100px] rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
