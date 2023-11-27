import React from 'react';
import { motion } from 'framer-motion';

function Animations() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    </motion.section>
  );
}

export default Animations;
