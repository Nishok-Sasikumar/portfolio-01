import React from 'react';
import { motion } from 'framer-motion';
import { FaChargingStation, FaLeaf, FaPlug } from 'react-icons/fa';
import { RevealText } from './RevealText';

export default function SmartEVCharging() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="subheading-mono !text-emerald-500/60">Technical Manifest 04</span>
              <div className="w-12 h-px bg-emerald-500/20" />
            </div>

            <h2 className="text-4xl md:text-7xl heading-editorial text-stone-100 mb-8 leading-tight">
              <RevealText text="Smart EV" delay={0.2} /> <br />
              <span className="text-emerald-500/80">Charging.</span>
            </h2>

            <p className="text-lg md:text-2xl font-serif text-stone-400 leading-relaxed font-extralight tracking-tight mb-12 max-w-2xl">
              "An intelligent energy nexus bridging the gap between <span className="text-stone-200">sustainable mobility</span> and modern power grids. Orchestrating a future where infrastructure lives and breathes."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <FaChargingStation />, title: 'Real-time Nexus', desc: 'Continuous availability tracking via IoT nodes.' },
                { icon: <FaPlug />, title: 'Equilibrium', desc: 'Smart grid load balancing for peak efficiency.' }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group/item hover:bg-white/[0.04] transition-all duration-500">
                  <div className="text-emerald-500/60 text-2xl mb-4 group-hover/item:scale-110 group-hover/item:text-emerald-400 transition-all duration-500">{item.icon}</div>
                  <div className="text-sm font-mono uppercase tracking-widest text-stone-200 mb-2">{item.title}</div>
                  <div className="text-xs font-serif italic text-stone-500 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-[320px] aspect-[3/4] flex items-center justify-center">
            {/* Holographic Container */}
            <div className="absolute inset-0 bg-emerald-500/[0.02] rounded-[3rem] border border-emerald-500/10 backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent" />
            </div>

            {/* Cinematic Battery Core */}
            <div className="relative w-36 h-64 border border-emerald-500/20 rounded-3xl p-3 flex flex-col justify-end overflow-hidden">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-emerald-500/10 rounded-full blur-md" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-stone-950/40">
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600/40 via-emerald-400/20 to-transparent"
                  initial={{ height: "20%" }}
                  animate={{ height: ["25%", "85%", "25%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-emerald-400/50 shadow-[0_0_20px_rgba(52,211,153,0.5)]" />
                </motion.div>
                
                {/* Floating Energy Spheres */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400/40 rounded-full blur-[1px]"
                    style={{ left: `${Math.random() * 100}%`, bottom: '-10%' }}
                    animate={{ 
                      bottom: ["-10%", "110%"],
                      opacity: [0, 0.8, 0],
                      x: [0, (Math.random() - 0.5) * 40]
                    }}
                    transition={{ 
                      duration: 4 + Math.random() * 3, 
                      repeat: Infinity, 
                      delay: i * 0.4,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Radial Lighting */}
            <div className="absolute inset-[-50%] bg-emerald-500/[0.05] blur-[100px] rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
