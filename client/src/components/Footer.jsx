import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Magnetic from './Magnetic';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Nishok-Sasikumar/', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/nishok-s-0b76b2291/', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://instagram.com/nishok_s', label: 'Instagram' },
  ];

  return (
    <footer className="relative pt-48 pb-20 px-6 md:px-20 overflow-hidden">
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="subheading-mono">Strategic Connection</span>
              <h2 className="text-6xl md:text-8xl lg:text-9xl heading-editorial mt-8 text-stone-100">
                Let's <br /> Create.
              </h2>
            </motion.div>
            
            <Magnetic strength={0.1}>
              <a 
                href="mailto:nishok2005kuro@gmail.com" 
                className="text-xl md:text-2xl font-serif text-amber-500/80 hover:text-amber-400 transition-colors duration-500 border-b border-amber-500/20 pb-2"
              >
                nishok2005kuro@gmail.com
              </a>
            </Magnetic>
          </div>

          <div className="flex flex-col lg:items-end">
            <div className="flex gap-12 mb-16">
              {socialLinks.map((link, i) => (
                <Magnetic key={link.label} strength={0.3}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center gap-4"
                  >
                    <span className="text-2xl text-stone-500 group-hover:text-amber-500 transition-all duration-700">
                      {link.icon}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-stone-600 group-hover:text-stone-300 transition-colors duration-700 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                      {link.label}
                    </span>
                  </a>
                </Magnetic>
              ))}
            </div>
            
            <p className="text-stone-600 font-serif italic text-sm text-right">
              "Engineering the future through robust code and intuitive design."
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-stone-600">
              © {currentYear} Nishok S.
            </span>
            <div className="w-8 h-px bg-white/5" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-stone-600">
              Technical Portfolio v2.5.0
            </span>
          </div>

          <div className="flex gap-12">
            <button className="text-[9px] font-mono uppercase tracking-[0.4em] text-stone-600 hover:text-amber-500 transition-colors duration-500">
              Privacy Policy
            </button>
            <button className="text-[9px] font-mono uppercase tracking-[0.4em] text-stone-600 hover:text-amber-500 transition-colors duration-500">
              Terms of Use
            </button>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] bg-teal-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
