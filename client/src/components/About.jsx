import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText } from './RevealText';
import { use3DTilt } from '../hooks/use3DTilt';

const About = () => {
  const tilt = use3DTilt({ max: 10, perspective: 1000 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [10, 0]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="py-24 md:py-32 px-6 md:px-20 max-w-[1400px] mx-auto border-t border-white/5 relative overflow-hidden"
    >
      <motion.div
        style={{ scale, rotateX }}
        className="section-title-container mb-16 md:mb-24"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
          <h2 className="text-[10px] md:text-xs font-serif tracking-[0.4em] uppercase text-amber-600">
            <RevealText text="01. About" />
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
        </div>
        <h3 className="text-5xl md:text-8xl lg:text-9xl font-serif font-medium text-stone-100 uppercase tracking-tighter mix-blend-plus-lighter text-center">
          <RevealText text="Profile." delay={0.3} />
        </h3>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80, md: 120 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-8 md:mt-12"
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
          {/* Enhanced Realistic Photo Container */}
          <motion.div 
            className="relative group w-full max-w-[280px] md:max-w-md lg:max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            style={{ perspective: tilt.perspective }}
          >
            <motion.div
              style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
              className="relative p-2 bg-gradient-to-br from-stone-800/40 to-stone-900/60 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* External Technical Sidebar (Right) */}
              <div className="absolute top-0 -right-4 h-full w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent hidden xl:block" />
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 flex flex-col gap-8 hidden xl:flex">
                {[
                  { label: 'RES', val: '2.4K' },
                  { label: 'FRM', val: '60' },
                  { label: 'BIT', val: '32' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[7px] font-mono text-stone-600 uppercase tracking-tighter">{stat.label}</span>
                    <span className="text-[9px] font-mono text-amber-500/40">{stat.val}</span>
                  </div>
                ))}
              </div>

              {/* Internal Cinematic Light Sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                style={{ zIndex: 5 }}
              />

              {/* Decorative Frame Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-600/40 z-10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-600/40 z-10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-600/40 z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-600/40 z-10" />

              <div className="w-64 h-80 md:w-80 md:h-[450px] overflow-hidden relative">
                {/* Advanced GL-like Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                
                {/* HUD Elements Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {/* Target Corners */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-amber-500/60" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-amber-500/60" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-amber-500/60" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-amber-500/60" />
                  
                  {/* Analysis Crosshair */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2 bg-amber-500/40" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-2 bg-amber-500/40" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-2 bg-amber-500/40" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-2 bg-amber-500/40" />
                    <div className="absolute inset-0 border border-amber-500/20 rounded-full scale-75" />
                  </div>

                  {/* Vertical Data Stream */}
                  <div className="absolute top-10 right-6 flex flex-col gap-1">
                    {[...Array(4)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className="w-8 h-[2px] bg-amber-500/40"
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                      />
                    ))}
                  </div>

                  {/* Biometric Marker */}
                  <div className="absolute top-1/3 left-8 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
                    <span className="text-[7px] font-mono text-amber-500/60 uppercase tracking-widest">Neural_Sync: 98.4%</span>
                  </div>

                  {/* Right Side Vertical HUD Info */}
                  <div className="absolute top-1/4 right-4 flex flex-col gap-4 items-end">
                    <div className="flex flex-col items-end">
                      <span className="text-[6px] font-mono text-stone-500 uppercase">Focus_Lock</span>
                      <div className="w-8 h-1 bg-amber-500/20 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-amber-500/60"
                          animate={{ width: ["20%", "90%", "20%"] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </div>
                    </div>
                    <div className="text-[6px] font-mono text-amber-500/30 leading-none text-right">
                      0x4A22<br/>
                      0x8B91<br/>
                      0x1C22
                    </div>
                  </div>
                </div>
                
                {/* Image with depth effect */}
                <motion.img 
                  src="/photo.png" 
                  alt="Nishok S" 
                  className="w-full h-full object-cover object-top filter grayscale sepia-[0.2] brightness-75 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 ease-[0.23,1,0.32,1]"
                />
                
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Dynamic Scanline */}
                <motion.div 
                  className="absolute left-0 right-0 h-1 bg-amber-500/20 z-20 pointer-events-none blur-sm"
                  animate={{ top: ["-5%", "105%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              {/* Metadata Label Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex flex-col gap-1 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="text-[10px] font-mono text-amber-500 uppercase tracking-[0.3em]">Identity Verified</span>
                  <span className="text-xl font-serif text-white tracking-wide">Nishok S.</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Dust Particles around image */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-500/20 rounded-full blur-[1px] pointer-events-none"
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-10"
          >
            <div className="relative group overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="bg-gradient-to-r from-amber-500/20 to-transparent absolute inset-0 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"
              />
              <p className="text-2xl md:text-3xl font-serif text-stone-200 leading-relaxed font-extralight tracking-tight p-2">
                As a dedicated <span className="text-amber-500 font-bold not-italic">Full Stack Developer</span> and designer, I specialize in architecting scalable digital ecosystems that harmonize <span className="text-amber-500 font-bold not-italic">robust technical logic</span> with intuitive user experiences. My approach is defined by a commitment to precision and the seamless integration of modern engineering principles.
              </p>
            </div>
            <p className="mb-12 text-stone-300">
              In the realms of Computer Science and Design, I specialize in the alchemy of Full Stack Development, transforming abstract ideas into digital artifacts that resonate with purpose, elegance, and history.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-amber-600/20 relative">
              {/* Cinematic Scanline Overlay */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent animate-pulse" />
              
              <motion.div 
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group/stat"
              >
                <h4 className="text-xs font-mono tracking-[0.4em] uppercase text-amber-500 mb-6 flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-500 rounded-full animate-ping" />
                  Spheres of Interest
                </h4>
                <ul className="space-y-4 text-stone-200 text-lg italic">
                  {[
                    { label: 'Full Stack Alchemy', icon: '◈' },
                    { label: 'Network Cartography', icon: '⌬' },
                    { label: 'Digital Fortification', icon: '⧈' }
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center gap-4 group/item cursor-default"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-amber-500/40 font-mono group-hover/item:text-amber-500 transition-colors duration-300">
                        {item.icon}
                      </span>
                      <span className="group-hover/item:text-white transition-colors duration-300">
                        {item.label}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group/stat"
              >
                <h4 className="text-xs font-mono tracking-[0.4em] uppercase text-amber-500 mb-6 flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-500 rounded-full animate-ping" />
                  Subject Metadata
                </h4>
                <div className="space-y-6 text-stone-200 text-lg">
                  {[
                    { label: 'Location', val: 'Erode, Tamil Nadu', detail: '11.3410° N, 77.7172° E' },
                    { label: 'Discipline', val: 'CS & Design', detail: 'Specializing in UI Alchemy' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col group/meta cursor-default">
                      <span className="text-[10px] font-mono uppercase text-amber-600/60 tracking-widest group-hover/meta:text-amber-500 transition-colors duration-300">
                        {item.label}
                      </span>
                      <span className="group-hover/meta:text-white transition-colors duration-300">
                        {item.val}
                      </span>
                      <span className="text-[8px] font-mono text-stone-600 opacity-0 group-hover/meta:opacity-100 transition-opacity duration-500">
                        [{item.detail}]
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
