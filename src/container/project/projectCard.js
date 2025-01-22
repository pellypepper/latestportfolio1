import React from "react";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
      <div className="project-overlay">
        <p>{project.text}</p>
        <div className="project-buttons">
          <a href={project.web} target="_blank" rel="noopener noreferrer">
            <button>Live Demo</button>
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
    <div className="project-details">
      <h2>Tech Stack: <span>{project.stack}</span></h2>
    </div>
  </div>
);

export default ProjectCard;