import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { CinematicScroll } from "@/components/lightswind/CinematicScroll";

const Home = () => {
  return (
    <>
      <Hero />
      <CinematicScroll><About /></CinematicScroll>
      <CinematicScroll><Skills /></CinematicScroll>
      <CinematicScroll><Projects /></CinematicScroll>
      <CinematicScroll><Certifications /></CinematicScroll>
      <CinematicScroll><Achievements /></CinematicScroll>
      <CinematicScroll><Education /></CinematicScroll>
      <CinematicScroll><Contact /></CinematicScroll>
      <Footer />
    </>
  );
};

export default Home;
