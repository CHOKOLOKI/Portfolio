import React from 'react';
import { Github, Linkedin, Mail, Code2, Terminal, Sparkles } from 'lucide-react'
import { motion, scale } from 'motion/react'
import { rotate } from 'three/tsl';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to to-slate-900 px-4 relative overflow-hidden"
    >
    {/* animated background */}
    <motion.div
      className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl'
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0]
      }}
      transition={{
        duration: 8,
        repeat: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -50, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* floating icons */}
    <motion.div
      className="absolute top-20 right-1/4 text-blue-400/20"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
    <Code2 className='w-16 h-16'/>
    </motion.div>

    <motion.div
      className='absolute bottom-32 left-1/4 text-purple-400/20'
        animate={{
          y:[0, 20, 0],
          rotate: [0, -10, 0]
        }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
    <Terminal className='w-20, 20'/>
    </motion.div>

    <motion.div 
      className=' absolute top-1/3 left-16 text-purple-400/20'
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0]
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      >
      <Sparkles className='w-12 h-12'/>

    </motion.div>

    <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
        >
          <div className="relative w-32 h-32 mx-auto mb-6">
            {/* Animated rings around avatar */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-400/30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            
            <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
              <span className="text-white text-5xl">SD</span>
            </div>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm <motion.span 
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Sergio Daguil
          </motion.span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-2xl md:text-3xl text-slate-300 mb-6">
            Front-end Developer
          </p>
        </motion.div>
        
        <motion.p 
          className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          With 2 years of professional experience in Software Quality Assurance, I’ve transitioned into a developer role with a deep understanding of how to build resilient, bug-free applications. My background in a fast-paced startup allowed me to build interactive interfaces using Vue.js and dive into the back-end to solve complex architectural issues. Outside of my professional role, I am an avid learner, currently building personal projects with React and Tailwind CSS to stay at the forefront of modern web development.
        </motion.p>
        
        <motion.div 
          className="flex gap-4 justify-center mb-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a 
            href="#contact" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg shadow-purple-500/50"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgb(168 85 247 / 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a 
            href="#projects" 
            className="border-2 border-slate-400 text-slate-200 px-8 py-3 rounded-lg backdrop-blur-sm bg-white/5"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.a 
            href="https://github.com/CHOKOLOKI" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/sergio-daguil-8653bb1aa/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="mailto:daguilgio@gmail.com" 
            className="text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
