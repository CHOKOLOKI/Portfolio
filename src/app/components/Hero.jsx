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
    </section>
  );
};

export default Hero;
