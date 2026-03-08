import React from 'react';

const Projects = () => {
  // Placeholder project data
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of the project, its purpose, and the technologies used. This is a great place to showcase your skills.",
      link: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of the project, its purpose, and the technologies used. This is a great place to showcase your skills.",
      link: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of the project, its purpose, and the technologies used. This is a great place to showcase your skills.",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-10 max-w-[1200px] mx-auto mt-10">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-placeholder"></div>
            <h3 className="mt-6 text-text-dark text-2xl font-bold">{project.title}</h3>
            <p className="grow text-secondary text-base mb-5">{project.description}</p>
            <a href={project.link} className="btn-secondary self-center">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
