// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { fadeIn, slideIn } from '../utils/motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profileImg from '../assets/images/profile.jpg';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-y-12 md:gap-x-16 items-center">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col space-y-6 md:justify-self-end"
        >
          <motion.h1
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Hi, I'm Mohd Amjad Ali
          </motion.h1>

          <motion.h2
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-accent font-semibold"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-textSecondary max-w-md"
          >
            A final-year undergraduate engineering student at GNDECB, VTU University with a passion for creating elegant, user-friendly web applications.
          </motion.p>

          <motion.div
            variants={fadeIn('right', 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn btn-primary flex items-center space-x-2">
                <span>Contact me</span>
                <HiArrowNarrowRight />
              </button>
            </Link>

            <a
              href="https://drive.google.com/file/d/1vBxS0XEzvn9OZbcCNxyUOMzBzvoT9RcX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn('right', 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-sm text-textSecondary font-medium">Social Media</h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/MohdAli056"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-accent hover:underline"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mohd-amjad-866827221/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-accent hover:underline"
              >
                <FaLinkedinIn className="text-xl text-blue-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideIn('left', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-secondary p-4 rounded-full">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover border-4 border-accent"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;