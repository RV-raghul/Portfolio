import { motion } from "framer-motion";

const AnimateOnScroll = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}   // start from below
      whileInView={{ opacity: 1, y: 0 }} // animate to position
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}  // trigger once when 20% is visible
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;