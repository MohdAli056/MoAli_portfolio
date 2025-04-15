export interface Skill {
    id: string;
    name: string;
    level?: number;
    category: 'programming' | 'technologies' | 'constructs';
  }
  
  export const skills: Skill[] = [
    // Programming Languages
    { id: 'c', name: 'C', category: 'programming' },
    { id: 'c++', name: 'C++', category: 'programming' },
    { id: 'javascript', name: 'JavaScript', category: 'programming' },
    { id: 'python', name: 'Python', category: 'programming' },
    { id: 'typescript', name: 'TypeScript', category: 'programming' },
    
    // Technologies
    { id: 'react', name: 'React', category: 'technologies' },
    { id: 'node', name: 'Node.js', category: 'technologies' },
    { id: 'express', name: 'Express', category: 'technologies' },
    { id: 'mongodb', name: 'MongoDB', category: 'technologies' },
    { id: 'tailwind', name: 'Tailwind CSS', category: 'technologies' },
    { id: 'git', name: 'Git', category: 'technologies' },
    
    // IT Constructs
    { id: 'dsa', name: 'Data Structures & Algorithms', category: 'constructs' },
    { id: 'oop', name: 'Object-Oriented Programming', category: 'constructs' },
    { id: 'api', name: 'API Design', category: 'constructs' },
    { id: 'testing', name: 'Testing', category: 'constructs' },
  ];