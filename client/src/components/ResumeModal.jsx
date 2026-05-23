import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';
import resumeFile from '../assets/NISHOK S (2).pdf';

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
        >
          {/* Backdrop with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] bg-stone-900/40 border border-white/10 rounded-2xl md:rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.02]">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-amber-500/60">Dossier Access</span>
                <h3 className="text-xl md:text-2xl font-serif text-stone-100">Professional_Resume.pdf</h3>
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href={resumeFile}
                  download="NISHOK_S_Resume.pdf"
                  className="flex items-center gap-3 px-6 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 rounded-full text-[10px] font-mono uppercase tracking-widest text-amber-500 transition-all duration-500 group"
                >
                  <FaDownload className="group-hover:translate-y-0.5 transition-transform" />
                  <span>Download</span>
                </a>
                
                <button 
                  onClick={onClose}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-stone-400 hover:text-white transition-all duration-500"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 w-full bg-stone-950/20 p-4">
              <iframe 
                src={`${resumeFile}#toolbar=0&navpanes=0`}
                className="w-full h-full rounded-xl border border-white/5"
                title="Resume Viewer"
              />
            </div>

            {/* Footer Decoration */}
            <div className="px-8 py-4 bg-white/[0.01] border-t border-white/5 flex justify-between items-center opacity-40">
              <span className="text-[8px] font-mono uppercase tracking-widest text-stone-500">Node: 0xRE5UM3_SYNC</span>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-amber-500/40" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
