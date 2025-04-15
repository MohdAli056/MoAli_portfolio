// src/components/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { HiPhone, HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="section-padding" id="contact">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-heading">Contact Me</h2>
        <p className="section-subheading">Get in touch</p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="grid gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <HiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium">Contact Me</h3>
                <p className="text-textSecondary">+91 9999999999</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <HiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-textSecondary">mohdamjad9490@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <HiLocationMarker className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-textSecondary">Bidar, Karnataka, India</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary text-white border border-gray-700 focus:border-accent focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary text-white border border-gray-700 focus:border-accent focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary text-white border border-gray-700 focus:border-accent focus:outline-none"
                placeholder="Your Message"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary flex items-center space-x-2"
            >
              <span>Send Message</span>
              <HiPaperAirplane className={`${isSubmitting ? 'animate-pulse' : ''}`} />
            </button>
            
            {submitSuccess && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-400 text-sm mt-2"
              >
                Message sent successfully!
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;