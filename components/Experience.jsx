import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants/index';
import { staggerContainer } from '../utils/motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import { Title } from '@/components/Title';
import { CustomHeading } from '@/components/CustomHeading';

const Experience = () => {
  return (
    <section
      id="experience"
      className="section w-full flex flex-col justify-center px-8 lg:px-12 py-10"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col"
      >
        <div>
          <Title title="Where i have gained experience" />
          <CustomHeading title="Experience" />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col gap-10">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
