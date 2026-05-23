import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';
import { RevealText } from './RevealText';

export default function AssuredContractFarming() {
  return (
    <section className="relative py-16 md:py-32 px-6 overflow-hidden max-width-container">
      <motion.div 
        className="relative premium-glass p-8 md:p-20 overflow-hidden group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="subheading-mono !text-amber-600/60">Agritech Protocol 03</span>
              <div className="w-12 h-px bg-amber-600/20" />
            </div>

            <h2 className="text-4xl md:text-7xl heading-editorial text-stone-100 mb-8 leading-tight">
              <RevealText text="Assured" delay={0.2} /> <br />
              <span className="text-amber-600/80">Contract Farming.</span>
            </h2>

            <p className="text-lg md:text-2xl font-serif text-stone-400 leading-relaxed font-extralight tracking-tight mb-12 max-w-2xl">
              "A transparent ecosystem leveraging <span className="text-stone-200">blockchain trust</span> and predictive AI. Transforming the traditional harvest into a secure digital asset."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: <FaShieldAlt />, label: 'Immutable' },
                { icon: <FaChartLine />, label: 'Predictive' },
                { icon: <FaUsers />, label: 'Decentralized' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group/item">
                  <div className="w-14 h-14 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-amber-500/40 group-hover/item:text-amber-400 group-hover/item:border-amber-500/20 group-hover/item:scale-110 transition-all duration-500">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-stone-500 group-hover/item:text-stone-300 transition-colors duration-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
            {/* Holographic Container */}
            <div className="absolute inset-0 bg-stone-950/40 rounded-3xl border border-white/5 backdrop-blur-xl overflow-hidden group-hover:border-amber-500/10 transition-all duration-700">
              {/* Abstract growth visualization */}
              <div className="absolute inset-0 flex items-end justify-around p-8 gap-1.5">
                {[40, 75, 55, 95, 65, 85].map((h, i) => (
                  <div key={i} className="flex-1 relative group/bar">
                    <motion.div
                      className="w-full bg-gradient-to-t from-amber-900/40 to-amber-500/40 rounded-t-lg relative"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {/* Interactive Bar Glow */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-amber-400/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Geometric Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 border border-amber-500/10 rounded-full animate-spin-slow" />
                <div className="absolute w-16 h-16 border border-amber-500/5 rounded-full rotate-45" />
              </div>
            </div>

            {/* Cinematic Lighting */}
            <div className="absolute inset-[-50%] bg-amber-500/[0.02] blur-[120px] rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
