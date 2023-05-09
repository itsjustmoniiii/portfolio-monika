'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import HeroCanvas from './canvas/HeroProfile';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="section w-full flex justify-center p-5 ">
      <div className="flex w-full  lg:flex-row flex-col justify-center items-center gap-3">
        <div className="lg:w-[50%] w-[90%]">
          <div className="flex flex-col ">
            <h1 className="text-white text-[60px] lg:text-[90px] font-bold">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06666d] to-[#12bbc8]">
                Monika
              </span>
            </h1>
            <div className="text-[25px] lg:text-[50px] text-white uppercase">
              <span className="text-white"> I am </span>
              <TypeAnimation
                sequence={['a Developer', 2000, 'an UI/UX Designer', 2000]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#06666d] to-[#12bbc8] font-bold"
              />
            </div>
            <p className="mt-8 text-normal text-[15px] lg:text-[20px]">
              I design and develop Websites, Web Applications
              <br className="sm:block hidden" /> & Mobile Applications with
              various tools and technologies
            </p>
          </div>
        </div>
        <div className="lg:w-[35%] md:w-[45%] w-[100%] lg:h-screen h-100">
          <div className="lg:hidden w-full h-full flex justify-center items-center flex-col mt-2">
            <Image
              src="/assets/mecomic.PNG"
              alt="me"
              width={300}
              height={300}
            />
          </div>
          <div className="hidden lg:flex w-full h-full justify-center items-center flex-col">
            <HeroCanvas />
            <Image
              src="/assets/mecomic.PNG"
              alt="me"
              width={170}
              height={170}
              className="absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
