import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
const ProjectCard = ({
  index,
  name,
  short_description,
  tagsDetail,
  image,
  website_link,
  tag,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div
        className="bg-black rounded-2xl p-5 w-full sm:w-[360px] cursor-pointer"
        onClick={() => window.open(website_link, '_blank')}
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <span className="font-normal mt-2 text-[#eedddd} text-[14px]">
            {short_description}
          </span>
        </div>
        <div className="mt-5">
          <span
            className={`text-[14px] p-2 ${tag.color} rounded-lg font-medium`}
          >
            {tag.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
