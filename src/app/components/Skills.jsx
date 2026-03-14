import { motion } from 'framer-motion';

export function Skills() {
  const allSkills = [
    'JavaScript', 'React', 'Node.js', 'HTML',
    'CSS', 'Git', 'Tailwind', 'Testing', 'React Native', 'R',
    'Python', 'Docker', 'CI/CD', 'Agile', 'Business Intelligence'
  ];

  const duplicatedSkills = [...allSkills, ...allSkills];

  const skillCategories = [
    {
      title: 'Front-end',
      skills: ['React', 'Vite', 'Tailwinds', 'Testing', 'Vue', 'HTML/CSS', 'Figma'],
      color: 'from-blue-400 to-cyan-400',
      borderColor: 'border-blue-400/30',
      bgGlow: 'bg-blue-500/10'
    },
    {
      title: 'Back-end',
      skills: ['Node.js', 'Django'],
      color: 'from-purple-400 to-pink-400',
      borderColor: 'border-purple-400/30',
      bgGlow: 'bg-purple-500/10'
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'VS Code', 'Docker', 'Forge', 'Figma', 'RStudio'],
      color: 'from-pink-400 to-rose-400',
      borderColor: 'border-pink-400/30',
      bgGlow: 'bg-pink-500/10'
    }
  ];


export default Skills;