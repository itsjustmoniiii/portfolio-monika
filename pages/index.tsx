import Head from 'next/head';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import NavBar from '@/components/NavBar';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <>
      <div id="general" className="h-full general relative z-0 text-white">
        <NavBar />
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
