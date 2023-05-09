import React from 'react';
import { BiHomeAlt, BiUser, BiHistory } from 'react-icons/bi';
import { BsCardList, BsClipboardData } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const NavBar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="fixed bottom-2 lg:bottom-8 w-full z-[30]"
    >
      <div className="container mx-auto">
        <div className="w-full bg-black/30 py-5 backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-around text-2xl text-white/80">
          <Link
            to="home"
            smooth={true}
            activeClass="bg-gradient-to-r from-[#06666d] to-[#12bbc8]"
            spy={true}
            className="cursor-pointer hover:bg-black/20 p-3 rounded-lg"
          >
            <BiHomeAlt />
          </Link>
          <Link
            smooth={true}
            activeClass="bg-gradient-to-r from-[#06666d] to-[#12bbc8]"
            spy={true}
            to="about"
            className="cursor-pointer hover:bg-black/20 p-3 rounded-lg"
          >
            <BiUser />
          </Link>
          <Link
            smooth={true}
            activeClass="bg-gradient-to-r from-[#06666d] to-[#12bbc8]"
            spy={true}
            to="experience"
            className="cursor-pointer hover:bg-black/20 p-3 rounded-lg"
          >
            <BiHistory />
          </Link>
          <Link
            smooth={true}
            activeClass="bg-gradient-to-r from-[#06666d] to-[#12bbc8]"
            spy={true}
            to="skills"
            className="cursor-pointer hover:bg-black/20 p-3 rounded-lg"
          >
            <BsCardList />
          </Link>
          <Link
            smooth={true}
            activeClass="bg-gradient-to-r from-[#06666d] to-[#12bbc8]"
            spy={true}
            to="projects"
            className="cursor-pointer hover:bg-black/20 p-3 rounded-lg"
          >
            <BsClipboardData />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
