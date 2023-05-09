import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants/index';
import 'react-vertical-timeline-component/style.min.css';
import ProjectCard from './ProjectCard';
import { fadeIn, staggerContainer } from '../utils/motion';
import { Title } from '@/components/Title';
import { CustomHeading } from '@/components/CustomHeading';

const Projects = () => {
  return (
    <section
      id="projects"
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
          <Title title="A small insight" />
          <CustomHeading title="Projects" />
        </div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn('up', 'spring', 0.4, 1)}
            className="mt-5 lg:text-[17px] text-[16px] max-w-3xl leading-[30px]"
          >
            The following area showcases my skills through real-world examples.
            To explore these projects, simply click on the card and open it in a
            new tab. I hope that they will give you a glimpse into my skills and
            passions as a developer.
          </motion.p>
        </div>
      </motion.div>

      <div className="lg:mt-20 my-5 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
