import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaBolt, FaLayerGroup } from 'react-icons/fa';
import { RevealText } from './RevealText';

const OracleApex = () => {
  return (
    <section className="relative py-16 md:py-32 px-6 overflow-hidden max-width-container">
      <motion.div 
        className="relative premium-glass p-8 md:p-20 overflow-hidden group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Cinematic Backdrop */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.02] blur-[150px] -z-10" />
        
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center relative z-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="subheading-mono !text-amber-500/60">Data Infrastructure 07</span>
              <div className="w-12 h-px bg-amber-500/20" />
            </div>

            <h2 className="text-4xl md:text-7xl heading-editorial text-stone-100 mb-8 leading-tight">
              <RevealText text="Oracle" delay={0.2} /> <br />
              <span className="text-amber-500/80">Apex Engine.</span>
            </h2>

            <p className="text-lg md:text-2xl font-serif text-stone-400 leading-relaxed font-extralight tracking-tight mb-12 max-w-2xl">
              "Forging industrial-grade applications through the lens of <span className="text-stone-200">Data Alchemy</span>. Leveraging Oracle's legacy to build the future of enterprise intelligence."
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <FaDatabase />, text: "Low-code Data Synthesis" },
                { icon: <FaBolt />, text: "Rapid Neural Development" },
                { icon: <FaLayerGroup />, text: "Enterprise-level Equilibrium" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-amber-500/40 group-hover/item:text-amber-400 group-hover/item:border-amber-500/20 transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-400 group-hover/item:text-stone-200 transition-colors duration-500">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative w-full max-w-[320px] aspect-square">
            {/* Visual representation of a data-driven UI */}
            <div className="absolute inset-0 premium-glass p-6 flex flex-col gap-4 bg-stone-950/60 rounded-3xl overflow-hidden group-hover:border-amber-500/20 transition-all duration-700">
              {/* Animated Header */}
              <div className="w-full h-10 border border-white/5 rounded-xl bg-white/[0.02] flex items-center px-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-1 bg-amber-500/20 rounded-full" 
                />
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[...Array(2)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + i * 0.2 }}
                    className="h-28 border border-white/5 rounded-2xl bg-white/[0.01] relative overflow-hidden"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-amber-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Status Lines */}
              <div className="space-y-3 mt-2">
                {[70, 85, 60].map((width, i) => (
                  <div key={i} className="w-full h-px bg-white/5">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1.5 + i * 0.1 }}
                      className="h-full bg-amber-500/10 origin-left"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-auto flex justify-end">
                <div className="w-20 h-8 rounded-lg bg-amber-600/10 border border-amber-600/20 shadow-[0_0_15px_rgba(217,119,6,0.05)]" />
              </div>
            </div>

            {/* Floating Energy Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-500 rounded-full blur-[1px]"
                animate={{ 
                  y: [0, -30, 0],
                  opacity: [0.1, 0.6, 0.1]
                }}
                transition={{ 
                  duration: 4 + i, 
                  repeat: Infinity,
                  delay: i * 0.8
                }}
                style={{ 
                  top: `${10 + i * 20}%`, 
                  right: `-${10 + i * 4}%` 
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OracleApex;
