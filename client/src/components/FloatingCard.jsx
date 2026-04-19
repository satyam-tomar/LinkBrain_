import { motion } from 'framer-motion';

export default function FloatingCard({ children, delay = 0, className = '', yRange = 10 }) {
  return (
    <motion.div
      animate={{ y: [0, -yRange, 0] }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
