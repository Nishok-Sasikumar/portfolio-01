import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import Magnetic from './Magnetic';
import musicFile from '../assets/the_mountain-dramatic-background-496548.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;

      // Attempt immediate autoplay
      const attemptPlay = () => {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // If successful, remove the interaction listener
            window.removeEventListener('click', attemptPlay);
          })
          .catch(() => {
            console.log("Autoplay blocked. Waiting for user interaction...");
          });
      };

      // Try playing immediately
      attemptPlay();

      // Add listener for first user interaction if autoplay was blocked
      window.addEventListener('click', attemptPlay, { once: true });

      return () => window.removeEventListener('click', attemptPlay);
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Audio play blocked by browser", err));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-[9999] pointer-events-auto">
      <audio ref={audioRef} src={musicFile} />
      
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 1.5 }}
        className="flex items-center gap-2 p-1.5 md:p-2 bg-stone-950/60 backdrop-blur-[32px] border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
      >
        {/* Controls Container */}
        <div className="flex items-center gap-1">
          {/* Play/Pause Button with Integrated Visualizer */}
          <div className="relative">
            {/* Animated Visualizer Peaks (Floating above button) */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-end gap-[2px] h-10 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-[2px] bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                  animate={isPlaying ? {
                    height: [4, 16, 8, 24, 4],
                    opacity: [0.4, 1, 0.4]
                  } : { height: 2, opacity: 0.2 }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <Magnetic strength={0.2}>
              <button
                onClick={togglePlay}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-amber-500 text-stone-950 rounded-full hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.4)] z-10 relative"
              >
                {isPlaying ? <FaPause size={14} /> : <FaPlay className="ml-1" size={14} />}
              </button>
            </Magnetic>
          </div>

          {/* Mute/Unmute Button */}
          <Magnetic strength={0.2}>
            <button
              onClick={toggleMute}
              className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
            >
              {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
            </button>
          </Magnetic>
        </div>

        {/* Track Info - Always visible on mobile in a compact way */}
        <div className="pr-4 md:pr-6 pl-1 md:pl-2">
          <div className="flex flex-col">
            <span className="text-[7px] md:text-[8px] font-mono uppercase tracking-[0.2em] text-amber-500/80">Live</span>
            <span className="text-[9px] md:text-[10px] font-serif text-stone-200 truncate max-w-[80px] md:max-w-[120px]">The Mountain</span>
          </div>
        </div>

        {/* Info Tooltip on Hover - Only on Desktop */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
          <div className="px-3 py-1.5 bg-stone-900/80 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-amber-500/80 whitespace-nowrap">
              Theme: Background Orchestration
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MusicPlayer;
