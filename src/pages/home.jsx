import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Contact from '../components/contactForm';
import Projects from '../components/projectCard';


// Main Home Page Component
const Home = () => {
  return (
    <div style={{ fontFamily: 'Georgia, serif' }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;