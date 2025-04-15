// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const About: React.FC = () => {
  const stats = [
    { number: '01+', label: 'Years of Experience' },
    { number: '04+', label: 'Projects Completed' },
    { number: 'Not Yet', label: 'Companies Worked' },
  ];
  
  return (
    <section className="section-padding" id="about">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">My Introduction</p>
      </motion.div>
      
      <div className="grid md:grid-cols-1 gap-12">
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mx-auto max-w-2xl"
        >
          <p className="text-textSecondary mb-8">
            I'm a final-year B-tech undergraduate engineering student with over a years of experience developing modern web applications. I'm passionate about building exceptional user interfaces and crafting clean, efficient code. My focus is on creating applications that solve real problems and provide delightful user experiences. I'm always looking for opportunities to enhance my skills and expand my knowledge.
          </p>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 bg-secondary rounded-lg">
                <h3 className="text-accent text-xl font-bold">{stat.number}</h3>
                <p className="text-sm text-textSecondary">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <a href="https://drive.google.com/file/d/1vBxS0XEzvn9OZbcCNxyUOMzBzvoT9RcX/view?usp=sharing" className="btn btn-primary">
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
