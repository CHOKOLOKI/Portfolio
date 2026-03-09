import { Code2, Palette, Rocket } from 'lucide-react';
import { color, motion } from 'motion/react';
import { desc, title } from 'motion/react-client';
import React from 'react';
import { shadow } from 'three/tsl';

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, well documented code that follows industry best practices and standards.',
      color: 'from-blue-500/50',
      shadowColor: 'shadow-blue-500/50',
    },
    {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating intuitive, accessible interfaces that provice exceptional user experiences.',
    color : 'from-purple-400 to-pink-400',
    shadowColor: 'shadow-purple-500/50'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing application for speed, efficiency, and scalability across all devices.',
      color: 'from-pink-400 to-rose-400',
      shadowColor: 'shadow-pink-500/50'
    }
  ];

  return (
    <section className='max-w-6xl mx-auto relative z-10'>
      <motion.h2
      className='text-4xl text-center mb-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y:0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

    </section>
  );
};

export default About;
