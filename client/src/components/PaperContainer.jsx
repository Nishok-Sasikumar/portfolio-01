import React from 'react';
import { motion } from 'framer-motion';

// PaperContainer provides a realistic ancient parchment background with a subtle folded corner effect.
// It uses the generated paper texture image located at src/assets/paper_texture.png.
// The container is animated with a gentle fade‑in for a premium feel.

export default function PaperContainer({ children }) {
  return (
    <motion.div
      className="paper-container relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
