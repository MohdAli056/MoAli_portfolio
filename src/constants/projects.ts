export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    repoLink: string;
    liveLink?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 'project1',
      title: 'DarkBurner Extension',
      description: 'DarkBurner Extension is a project based on the application of specialized language models like BERT. This extension can improve multiple facets of text content for anyone producing or editing text, helping to optimize documents for reader engagement, context-aware suggestions, SEO, and more.',
      image: '/project1.jpg',
      tags: ['React', 'JavaScript', 'BERT', 'NLP'],
      repoLink: 'https://github.com/yourusername/darkburner-extension',
      liveLink: 'https://darkburner-extension.vercel.app',
    },
    {
      id: 'project2',
      title: 'Task Manager App',
      description: 'A full-stack task management application with features like user authentication, task creation, filtering, and sorting.',
      image: '/project2.jpg',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      repoLink: 'https://github.com/yourusername/task-manager',
      liveLink: 'https://task-manager-app.vercel.app',
    },
    {
      id: 'project3',
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio website built with React, TypeScript, and Tailwind CSS.',
      image: '/project3.jpg',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      repoLink: 'https://github.com/yourusername/portfolio-website',
      liveLink: 'https://yourusername.vercel.app',
    },
  ];