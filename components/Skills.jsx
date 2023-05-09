import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { technologies } from '@/constants';
import BallCanvas from './canvas/Ball';
import { Title } from '@/components/Title';
import { CustomHeading } from '@/components/CustomHeading';

const Skills = () => {
  return (
    <section
      id="skills"
      className="section w-full flex flex-col justify-center px-8 lg:px-12 py-10"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col mb-3"
      >
        <div>
          <Title title="Where i have experience in" />
          <CustomHeading title="Skills" />
        </div>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center lg:gap-10 gap-5 mx-auto w-max-4xl">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col items-center"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-white">{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
