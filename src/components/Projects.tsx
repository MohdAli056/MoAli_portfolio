// src/components/Projects.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { projects } from '../constants/projects';
import { HiArrowNarrowRight, HiCode, HiExternalLink } from 'react-icons/hi';

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="section-padding" id="projects">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-heading">Projects</h2>
        <p className="section-subheading">Most recent work</p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center">
          <button 
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="text-accent disabled:text-gray-600 text-2xl mr-4"
          >
            &lt;
          </button>
          
          <div className="flex-1 overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeIn('up', 0.3 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="min-w-full px-4"
                >
                  <div className="bg-secondary rounded-lg overflow-hidden">
                    <div 
                      className="relative w-full h-64 overflow-hidden"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                        style={{ 
                          transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                        }}
                      />
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <div className="flex space-x-4">
                            <a 
                              href={project.repoLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-accent hover:bg-indigo-600 text-white p-3 rounded-full"
                            >
                              <HiCode className="w-5 h-5" />
                            </a>
                            {project.liveLink && (
                              <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-accent hover:bg-indigo-600 text-white p-3 rounded-full"
                              >
                                <HiExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-textSecondary mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="text-xs px-2 py-1 rounded-full bg-primary text-textSecondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a 
                          href={project.repoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent hover:text-indigo-400 transition-colors flex items-center space-x-1"
                        >
                          <span>View Repository</span>
                          <HiArrowNarrowRight />
                        </a>

                        {project.liveLink && (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent hover:text-indigo-400 transition-colors flex items-center space-x-1"
                          >
                            <span>Live Demo</span>
                            <HiExternalLink />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => setActiveIndex(Math.min(projects.length - 1, activeIndex + 1))}
            disabled={activeIndex === projects.length - 1}
            className="text-accent disabled:text-gray-600 text-2xl ml-4"
          >
            &gt;
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-accent' : 'bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;