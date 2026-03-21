import { ExternalLink, Github } from 'lucide-react';
import {ImageWithFallback} from './ImageWithFallback';
import React from 'react';
import { motion } from 'motion/react';

export function Projects() {
  const projects = [
    {
      id: 0,
      title: 'Booking Mobile App',
      description: 'A brief description of Project One.',
      image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBzY3JlZW58ZW58MXx8fHwxNzcyOTM3NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: 'https://github.com/CHOKOLOKI/E-Go',
      demo: 'https://your-demo-url.com',
      tags: ['React Native', 'Mobile', 'UI Design'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 1,
      title: 'Discord Bot',
      description: 'A brief description of Project Two.',
      image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzI4NTc5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: 'https://github.com/CHOKOLOKI/Encourage_dc_bot',
      demo: 'https://your-demo-url.com',
      tags: ['Python', 'Discord API'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      image: '/path/to/project-three-image.jpg',
      github: 'https://github.com/username/project-three',
      demo: 'https://your-demo-url.com',
      tags: ['CSS', 'Web Design'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 shadow-lg shadow-purple-500/50"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="h-48 overflow-hidden bg-slate-800 relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </motion.div>
              
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white font-semibold">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tag} 
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white rounded-full text-sm border border-white/20`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-semibold`}
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default Projects;
