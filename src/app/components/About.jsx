import React from 'react';

const About = () => {
  const skills = ["HTML & CSS", "JavaScript (ES6+)", "React", "Node.js", "Python", "R"];

  return (
    <section id="about" className="bg-card-bg z-[2]">
      <h2>About Me</h2>
      <div className="max-w-3xl mx-auto">
        <p>Hello! I'm a dedicated and enthusiastic web developer with a passion for building beautiful, functional, and user-centered digital experiences. I have a strong foundation in front-end and back-end technologies and am always eager to learn more.</p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul className="list-none p-0 flex justify-center flex-wrap gap-4 mt-8">
          {skills.map(skill => (
            <li 
              key={skill} 
              className="bg-bg py-3 px-6 rounded-full border border-transparent transition-all duration-300 font-medium hover:bg-primary hover:text-white hover:-translate-y-0.5"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
