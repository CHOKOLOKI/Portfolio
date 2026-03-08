import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-screen flex items-center justify-center text-center sticky top-0 z-1 bg-cover bg-center text-text-light"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/background.jpg")'
      }}
    >
      <div className="max-w-[600px] hero-content">
        <h1 className="text-6xl md:text-8xl mb-5 font-bold">Sergio Daguil III</h1>
        <p className="text-xl md:text-2xl mb-8">A passionate developer creating modern and responsive web applications.</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
