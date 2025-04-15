// src/App.tsx
import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <main className="container mx-auto px-4">
        <Element name="home">
          <Hero />
        </Element>
        
        <Element name="about">
          <About />
        </Element>
        
        <Element name="skills">
          <Skills />
        </Element>
        
        <Element name="qualification">
          <Qualification />
        </Element>
        
        <Element name="projects">
          <Projects />
        </Element>
        
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;