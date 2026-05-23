import React from 'react';
import { motion } from 'framer-motion';

export default function PaperCard({ children }) {
  return (
    <motion.div
      className="paper-card relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
