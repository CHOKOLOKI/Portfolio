import { Code2, Palette, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, well documented code that follows industry best practices and standards.',
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/50',
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'Creating intuitive, accessible interfaces that provide exceptional user experiences.',
      color: 'from-purple-400 to-pink-400',
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
      ></motion.div>

      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className='text-lg text-slate-300 mb-6 leading-relaxed'>
            I'm a passionate software developer with 2 years of experience in Software Quality Assurance but does bugfixing
            on front-end and back-end of web and also a little bit of Kotlin. I make user friendly applications using modern
            technologies and best practices.
          </p>
          <p className='text-lg text-slate-300 mb-6 leading-relaxed'>
            My journey in tech started with a curiosity about how things work, and it has evolved into
            a career I'm truly passionate about. I love the challenge of solving complex problems and
            bringing ideas to life through code.
          </p>
          <p className='text-lg text-slate-300 mb-6 leading-relaxed'>
            When I'm not coding, you can find me researching for new projects, exploring tech news on
            YouTube, or watching dramas and animations. I'm always eager to learn and grow,
            and I'm excited to see where my career in tech takes me next.
          </p>
        </motion.div>

        <div className='space-y-6'>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className='flex gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-colors'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className='flex-shrink-0'>
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg ${skill.shadowColor}`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Icon className='w-6 h-6 text-white' />
                  </motion.div>
                </div>
                <div>
                  <h3 className={`text-xl mb-2 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-semibold`}>
                    {skill.title}
                  </h3>
                  <p className='text-slate-400'>
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
