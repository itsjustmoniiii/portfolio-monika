'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideIn, textContainer, textVariant2 } from '../utils/motion';

export const Title = ({ title }) => (
  <motion.p
    variants={textContainer}
    className="sm:text-[18px] text-[14px] text-[#a3a3a3] uppercase tracking-wider"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);
