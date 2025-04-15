// src/components/Skills.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { skills, Skill } from '../constants/skills';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('programming');
  
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section className="section-padding" id="skills">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-heading">Skills</h2>
        <p className="section-subheading">My technical level</p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveCategory('programming')}
            className={`btn ${activeCategory === 'programming' ? 'btn-primary' : 'btn-outline'}`}
          >
            Programming Languages
          </button>
          <button
            onClick={() => setActiveCategory('technologies')}
            className={`btn ${activeCategory === 'technologies' ? 'btn-primary' : 'btn-outline'}`}
          >
            Technologies
          </button>
          <button
            onClick={() => setActiveCategory('constructs')}
            className={`btn ${activeCategory === 'constructs' ? 'btn-primary' : 'btn-outline'}`}
          >
            IT Constructs
          </button>
        </div>
        
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="bg-secondary p-4 rounded-lg text-center">
              <h3 className="font-medium text-white">{skill.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
