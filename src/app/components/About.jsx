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
      <motion.div
        className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 shadow-lg shadow-purple-500/50'
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
      </motion.div>

      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <motion.div
        initial={{ opacity: 0, x:-50 }}
        whileInView={{ opacity: 1, x:0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        >
        </motion.div>
      </div>

      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        >

        <p className='text-lg text-slate-399 mb-6 lerading-relaxed'>
          I'm a passionate software developer with 2 years of experience in Software Quality Assurance but does bugfixing
          on front-end and back-end of web and also a little but of kotlin. I make user friendly applications using modern
          technologies and best practices
        </p>
        </motion.div>

      </div>
      

    </section>
  );
};

export default About;
