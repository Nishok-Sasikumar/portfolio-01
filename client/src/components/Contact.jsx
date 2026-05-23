import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
import { RevealText } from './RevealText';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formspree Integration: Authenticated with ID mykvpwbl
      const response = await fetch('https://formspree.io/f/mykvpwbl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Correspondence Dispatched Successfully.', {
          style: {
            background: 'rgba(26, 26, 26, 0.9)',
            color: '#f59e0b',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            backdropFilter: 'blur(10px)',
            fontFamily: 'serif',
            fontSize: '0.9rem',
            letterSpacing: '0.05em'
          }
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Transmission Failed');
      }
    } catch (error) {
      toast.error('Transmission Failure. Please try again.', {
        style: {
          background: 'rgba(26, 26, 26, 0.9)',
          color: '#ef4444',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          backdropFilter: 'blur(10px)',
          fontFamily: 'serif',
          fontSize: '0.9rem',
          letterSpacing: '0.05em'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="py-24 md:py-48 px-6 md:px-20 max-width-container border-t border-white/5 relative overflow-hidden"
    >
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Background Archival Text */}
      <div className="absolute top-0 right-0 text-[25vw] md:text-[18vw] font-serif font-black text-white/[0.01] select-none pointer-events-none translate-x-1/4 -translate-y-1/4 leading-none">
        CONNECT
      </div>

      <div className="section-title-container mb-16 md:mb-32 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
          <span className="subheading-mono text-[8px] md:text-[10px]">Protocol 07 // Correspondence</span>
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
        </div>
        
        <h3 className="text-5xl md:text-7xl lg:text-9xl heading-editorial flex flex-col items-center justify-center mb-8 md:mb-12">
          <RevealText text="Establish" delay={0.2} />
          <span className="text-amber-500/80 italic">Connection.</span>
        </h3>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 240 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        {/* Left Side: Editorial Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-12 md:space-y-20"
        >
          <div className="space-y-6 md:space-y-10">
            <p className="text-2xl md:text-5xl font-serif text-stone-100 leading-tight italic font-light">
              "Every architectural marvel begins with a <span className="text-amber-500/80">shared vision</span>."
            </p>
            <div className="w-16 md:w-24 h-px bg-amber-600/30" />
            <p className="text-lg md:text-2xl text-stone-400 font-serif leading-relaxed font-extralight tracking-tight">
              Whether you seek to discuss technical orchestration, digital artifacts, or strategic alliances, my communication channels remain operational for your distinguished record.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-4 md:space-y-6 group">
              <span className="subheading-mono !text-amber-500/40 group-hover:!text-amber-500 transition-colors duration-500 text-[8px]">Primary Channel</span>
              <a href="mailto:nishok2005kuro@gmail.com" className="text-lg md:text-2xl text-stone-100 font-serif hover:text-amber-500 transition-colors duration-500 block break-words">
                nishok2005kuro@gmail.com
              </a>
            </div>
            <div className="space-y-4 md:space-y-6 group">
              <span className="subheading-mono !text-amber-500/40 group-hover:!text-amber-500 transition-colors duration-500 text-[8px]">Voice Frequency</span>
              <a href="tel:+919344974849" className="text-lg md:text-2xl text-stone-100 font-serif hover:text-amber-500 transition-colors duration-500 block">
                +91 9344974849
              </a>
            </div>
          </div>

          <div className="flex gap-8 md:gap-12 pt-8 md:pt-12 border-t border-white/5">
            {[
              { icon: FaGithub, href: "https://github.com/Nishok-Sasikumar/", label: "Registry" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/nishok-s-0b76b2291/", label: "Nexus" }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -8 }}
                className="group flex flex-col items-center gap-3 md:gap-4"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 premium-glass flex items-center justify-center group-hover:border-amber-500/40 transition-all duration-700">
                  <social.icon className="text-stone-400 group-hover:text-amber-500 transition-colors text-xl md:text-2xl" />
                </div>
                <span className="subheading-mono !text-[8px] !text-stone-500 group-hover:!text-amber-500">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Communication Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          <div className="premium-glass p-8 md:p-16 relative overflow-hidden">
            {/* Form Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.02] to-transparent pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12 relative z-10">
              <div className="space-y-8 md:space-y-12">
                {[
                  { id: 'name', label: 'Correspondent Identity', type: 'text', placeholder: 'Enter your name...' },
                  { id: 'email', label: 'Response Address', type: 'email', placeholder: 'Enter your email...' }
                ].map((field) => (
                  <div key={field.id} className="relative group">
                    <label className={`subheading-mono !text-amber-500/40 mb-2 md:mb-4 block transition-all duration-500 text-[8px] ${activeField === field.id ? '!text-amber-500' : ''}`}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.id}
                      required
                      onFocus={() => setActiveField(field.id)}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 font-serif text-lg md:text-2xl text-stone-100 focus:outline-none focus:border-amber-500 transition-all duration-700 placeholder:text-stone-800"
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-px bg-amber-500 z-10"
                      initial={{ width: 0 }}
                      animate={{ width: activeField === field.id ? '100%' : '0%' }}
                      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                ))}

                <div className="relative group">
                  <label className={`subheading-mono !text-amber-500/40 mb-2 md:mb-4 block transition-all duration-500 text-[8px] ${activeField === 'message' ? '!text-amber-500' : ''}`}>
                    The Transmission
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 font-serif text-lg md:text-2xl text-stone-100 focus:outline-none focus:border-amber-500 transition-all duration-700 resize-none placeholder:text-stone-800"
                    placeholder="Compose your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                  <motion.div 
                    className="absolute bottom-0 left-0 h-px bg-amber-500 z-10"
                    initial={{ width: 0 }}
                    animate={{ width: activeField === 'message' ? '100%' : '0%' }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 md:py-6 relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-amber-600/5 border border-amber-600/20 group-hover/btn:bg-amber-600/10 transition-all duration-700" />
                <span className="relative z-10 text-amber-500 font-serif uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] transition-all duration-700 group-hover/btn:text-amber-400">
                  {isSubmitting ? 'Dispatching Record...' : 'Initiate Transmission'}
                </span>
                
                {/* Cinematic Button Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/[0.05] to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
              </motion.button>
            </form>
            
            {/* Terminal Metadata */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 flex justify-between items-center opacity-30">
              <span className="font-mono text-[6px] md:text-[8px] tracking-widest uppercase">Encryption: ACTIVE</span>
              <span className="font-mono text-[6px] md:text-[8px] tracking-widest uppercase">Protocol: SSL/TLS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
