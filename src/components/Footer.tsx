// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-scroll';
import { HiHeart } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Qualifications', to: 'qualification' },
    { name: 'Portfolio', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];
  
  return (
    <footer className="bg-secondary py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8 mx-auto max-w-4xl">
          <div>
            <h3 className="text-xl font-bold mb-4">Mohd Amjad Ali</h3>
            <p className="text-textSecondary">Full Stack Developer</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-textSecondary hover:text-accent transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MohdAli056"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-accent transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-amjad-866827221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-accent transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/MohdAli26092276"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-accent transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4 flex justify-center items-center text-sm text-textSecondary">
          <p className="flex items-center">
            © {currentYear} MoAli. All rights reserved. Made with <HiHeart className="text-accent mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;