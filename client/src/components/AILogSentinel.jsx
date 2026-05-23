import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaShieldAlt, FaRobot, FaSearch } from 'react-icons/fa';
import { RevealText } from './RevealText';

export default function AILogSentinel() {
  return (
    <section id="ai-log-sentinel" className="py-16 md:py-32 px-6 overflow-hidden max-width-container">
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
              <span className="subheading-mono !text-amber-500/60">Security Protocol 05</span>
              <div className="w-12 h-px bg-amber-500/20" />
            </div>

            <h2 className="text-4xl md:text-7xl heading-editorial text-stone-100 mb-8 leading-tight">
              <RevealText text="AI Log" delay={0.2} /> <br />
              <span className="text-amber-500/80">Sentinel.</span>
            </h2>

            <p className="text-lg md:text-2xl font-serif text-stone-400 leading-relaxed font-extralight tracking-tight mb-12 max-w-2xl">
              "A sophisticated log orchestration engine that <span className="text-stone-200">sanitizes sensitive data</span> through neural regex patterns, providing AI-driven remediation for complex system anomalies."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <FaShieldAlt />, title: 'Regex Sanitizer', desc: 'Auto-scrubs PII, IPs, and tokens from raw log streams.' },
                { icon: <FaRobot />, title: 'AI Remediation', desc: 'Instant diagnostic feedback and resolution strategies.' }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group/item hover:bg-white/[0.04] transition-all duration-500">
                  <div className="text-amber-500/60 text-2xl mb-4 group-hover/item:scale-110 group-hover/item:text-amber-400 transition-all duration-500">{item.icon}</div>
                  <div className="text-sm font-mono uppercase tracking-widest text-stone-200 mb-2">{item.title}</div>
                  <div className="text-xs font-serif italic text-stone-500 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cinematic Log Terminal Visualization */}
          <div className="relative w-full max-w-[400px] aspect-video flex items-center justify-center">
            <div className="absolute inset-0 bg-stone-950/80 rounded-xl border border-amber-500/20 backdrop-blur-md overflow-hidden shadow-2xl shadow-amber-500/5">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                <span className="ml-2 text-[8px] font-mono text-stone-500 uppercase tracking-widest">sentinel_v1.0.4_stream</span>
              </div>

              {/* Scrolling Logs */}
              <div className="p-4 font-mono text-[9px] leading-relaxed">
                <div className="space-y-2">
                  {[
                    { type: 'ERROR', text: 'Auth failure from 192.168.1.45', sanitized: 'Auth failure from [IP_SCRUBBED]' },
                    { type: 'WARN', text: 'DB Connection timeout: user=admin_prod', sanitized: 'DB Connection timeout: user=[USER_SCRUBBED]' },
                    { type: 'INFO', text: 'Token generated: 4f8a-92bc-e123', sanitized: 'Token generated: [TOKEN_SCRUBBED]' },
                    { type: 'CRIT', text: 'Heap overflow at 0x4A22F', sanitized: 'Heap overflow at 0x4A22F' }
                  ].map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.8, duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
                    >
                      <span className={`${log.type === 'ERROR' ? 'text-red-400' : log.type === 'WARN' ? 'text-amber-400' : log.type === 'CRIT' ? 'text-red-600' : 'text-emerald-400'}`}>[{log.type}]</span>
                      <span className="text-stone-500 ml-2">RAW: {log.text}</span>
                      <motion.div 
                        className="text-amber-500/80 ml-4 mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ delay: i * 0.8 + 0.4, duration: 0.4 }}
                      >
                        ↳ CLEANED: {log.sanitized}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* AI Analysis Overlay */}
              <motion.div 
                className="absolute bottom-4 right-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 1 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <FaRobot className="text-amber-500 text-xs" />
                  <span className="text-[8px] font-mono text-amber-500 uppercase">AI Diagnosis</span>
                </div>
                <div className="text-[7px] text-stone-300 font-serif italic max-w-[150px]">
                  "Potential brute force detected on Auth module. Recommend immediate IP blocking and JWT rotation."
                </div>
              </motion.div>
            </div>

            {/* Radial Lighting */}
            <div className="absolute inset-[-30%] bg-amber-500/[0.05] blur-[80px] rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
