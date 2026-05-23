import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

export default function PortScanning() {
  return (
    <section id="port-scanning" className="py-16 md:py-32 px-6 overflow-hidden max-width-container">
      <motion.div
        className="relative premium-glass p-8 md:p-20 overflow-hidden group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Cinematic Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0088ff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
          <div className="flex-1 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="subheading-mono !text-[#0088ff]/60">Security Protocol 09</span>
              <div className="w-12 h-px bg-[#0088ff]/20" />
            </div>

            <h2 className="text-4xl md:text-7xl heading-editorial text-stone-100 mb-8 leading-tight">
              <RevealText text="Stealth Port" delay={0.2} /> <br />
              <span className="text-[#0088ff]/80">Nexus.</span>
            </h2>

            <p className="text-lg md:text-2xl font-serif text-stone-400 leading-relaxed font-extralight tracking-tight mb-12 max-w-2xl">
              "A sophisticated network intelligence suite for <span className="text-stone-200">stealth reconnaissance</span>. Orchestrating multi-layered fingerprinting nodes with surgical precision."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'AI Fingerprinting', val: '89%', color: '#0088ff' },
                { title: 'Packet Obfuscation', val: 'Secure', color: '#0088ff' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">{stat.title}</span>
                    <span className="text-xs font-mono text-[#0088ff]/60">{stat.val}</span>
                  </div>
                  <div className="h-px w-full bg-white/5 relative overflow-hidden">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                      className="absolute inset-0 bg-[#0088ff]/30 origin-left"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Radar Visualization */}
          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Radar Rings */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border border-[#0088ff]/10 rounded-full"
                  style={{ 
                    width: `${(i + 1) * 25}%`, 
                    height: `${(i + 1) * 25}%`,
                  }}
                  animate={{ 
                    borderColor: ['rgba(0,136,255,0.05)', 'rgba(0,136,255,0.15)', 'rgba(0,136,255,0.05)'] 
                  }}
                  transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                />
              ))}
              
              {/* Scanning Sweep */}
              <motion.div
                className="absolute inset-0 rounded-full origin-center"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(0,136,255,0.08) 0deg, transparent 60deg)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Data Nodes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-[#0088ff] rounded-full blur-[0.5px]"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
              
              {/* Central Hub */}
              <div className="relative z-10 w-3 h-3 bg-[#0088ff]/40 rounded-full blur-[2px] shadow-[0_0_20px_rgba(0,136,255,0.3)]" />
            </div>

            {/* Cinematic Lighting */}
            <div className="absolute inset-[-50%] bg-[#0088ff]/[0.03] blur-[120px] rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
