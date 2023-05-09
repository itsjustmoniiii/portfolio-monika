import React from 'react';
import Image from 'next/image';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1d1d', color: '#fff', border: 'none' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="">
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#06666d] to-[#12bbc8] text-[24px] font-bold">
          {experience.title}
        </h3>
        <p className="text-[16px] font-semibold text-[#b0b0b0]">
          {experience.company_name}
        </p>
        <div className="mt-4">
          <span className="font-light lg:text-[17px] text-[16px]">
            {experience.info}
          </span>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
