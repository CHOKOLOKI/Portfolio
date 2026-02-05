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
      <div className="project-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-placeholder"></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn-secondary">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
