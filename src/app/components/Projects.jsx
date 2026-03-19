import { ExternalLink, Github } from 'lucide-react';
import {ImageWithFallback} from './ImageWithFallback';
import React from 'react';
import { motion } from 'motion/reactt';

export function Projects() {
  const projects = [
    {
      id: 0,
      title: 'Project One',
      description: 'A brief description of Project One.',
      image: '/path/to/project-one-image.jpg',
      github: 'https://github.com/username/project-one',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 1,
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      image: '/path/to/project-two-image.jpg',
      github: 'https://github.com/username/project-two',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      image: '/path/to/project-three-image.jpg',
      github: 'https://github.com/username/project-three',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

};

export default Projects;
