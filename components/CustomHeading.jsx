'use client';

import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
export const CustomHeading = ({ title }) => (
  <motion.div
    variants={slideIn('left', 'tween', 0.2, 1)}
    className="text-transparent bg-clip-text bg-gradient-to-r from-[#06666d] to-[#12bbc8] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
  >
    {title}
  </motion.div>
);
