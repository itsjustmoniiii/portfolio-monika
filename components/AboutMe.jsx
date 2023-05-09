/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Title } from '@/components/Title';
import { CustomHeading } from '@/components/CustomHeading';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideIn } from '../utils/motion';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="section w-full grid lg:grid-cols-2 grid-cols-1 gap-4 items-center px-8 lg:px-12 py-10"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col"
      >
        <div>
          <Title title="A little bit about me" />
          <CustomHeading title="About me" />
        </div>
        <motion.p
          variants={fadeIn('up', 'spring', 0.4, 1)}
          className="mt-5 lg:text-[17px] text-[16px] max-w-3xl leading-[30px]"
        >
          Ever since I can remember, I&apos;ve been drawn to the world of
          creativity and innovation. In high school, I found myself fascinated
          by the power of programming and designing to create something entirely
          new. This realization set me on a path of exploration and discovery,
          one that eventually led me to pursue a career in the dynamic and
          rapidly evolving field of media technology. I knew from the very
          beginning that this was the right path for me. I was determined to
          follow my passion and enrolled in a bachelor&apos;s degree program in
          &quot;Media Technology&quot; at the University of Applied Sciences in
          St. Pölten, Austria. Looking back, I am grateful for the opportunity
          to have pursued my dreams and for the many experiences that have
          shaped my personal and professional journey. The three years at
          university were nothing short of amazing. I was constantly challenged
          to explore new concepts and ideas, and to push myself to my limits in
          pursuit of my passion for media technology. The opportunities I had
          during this time were truly invaluable, and I am incredibly grateful
          for them.
        </motion.p>
      </motion.div>

      <div className="flex justify-center items-center">
        <img src="/assets/me.jpg" alt="photo-about-me" />
      </div>
    </section>
  );
};

export default AboutMe;
