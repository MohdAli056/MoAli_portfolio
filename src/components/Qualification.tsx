// src/components/Qualification.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import { fadeIn } from '../utils/motion';

const Qualification: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'Guru Nanak Dev Engineering College Bidar',
      year: '2022 - Present',
      details: 'Computer Science and Engineering',
      CGPA: 'CGPA : 7.5',
    },
    {
      degree: 'Class 12th',
      institution: 'Shaheen Pre-University College Bidar',
      year: '2021 - 2021',
      details: 'Science Stream',
      Percentage: 'Percentage : 90.0%',
    },
  ];

  const experience = [
    {
      position: 'Frontend Developer',
      company: 'Self-Employed',
      year: '2024 - Present',
      details: 'Worked on various frontend projects using React and TypeScript.',
    },
    {
      position: 'Full Stack Developer',
      company: 'Self-Employed',
      year: '2024 - Present',
      details: 'Developing responsive Full Stack web applications.',
    },
  ];

  return (
    <section className="section-padding" id="qualification">
      {/* Section Heading */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-heading">Qualification</h2>
        <p className="section-subheading">My personal journey</p>
      </motion.div>

      {/* Tabs: Education / Experience */}
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-8 space-x-8">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center space-x-2 font-medium ${
              activeTab === 'education' ? 'text-accent' : 'text-textSecondary'
            }`}
          >
            <HiAcademicCap className="text-xl" />
            <span>Education</span>
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center space-x-2 font-medium ${
              activeTab === 'experience' ? 'text-accent' : 'text-textSecondary'
            }`}
          >
            <HiBriefcase className="text-xl" />
            <span>Experience</span>
          </button>
        </div>

        {/* Timeline Content */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line in Middle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/30"></div>

          {/* Education Timeline */}
          {activeTab === 'education' && (
            <div className="space-y-12">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                  >
                    <h3 className="font-semibold text-lg">{item.degree}</h3>
                    <p className="text-accent">{item.institution}</p>
                    <p className="text-textSecondary text-sm">{item.year}</p>
                    <p className="text-textSecondary">{item.details}</p>
                    <p className="text-textSecondary">{item.CGPA}</p>
                    <p className="text-textSecondary">{item.Percentage}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-accent z-10"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          )}

          {/* Experience Timeline */}
          {activeTab === 'experience' && (
            <div className="space-y-12">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                  >
                    <h3 className="font-semibold text-lg">{item.position}</h3>
                    <p className="text-accent">{item.company}</p>
                    <p className="text-textSecondary text-sm">{item.year}</p>
                    <p className="text-textSecondary">{item.details}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-accent z-10"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Qualification;
