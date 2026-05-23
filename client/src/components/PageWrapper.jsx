import { motion } from "framer-motion";
import { slideVariants } from "../animation/variants";

export default function PageWrapper({ children, direction = 0 }) {
  // direction: 1 = forward (right), -1 = backward (left)
  const custom = direction;
  return (
    <motion.div
      variants={slideVariants}
      custom={custom}
      initial="enter"
      animate="center"
      exit="exit"
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
