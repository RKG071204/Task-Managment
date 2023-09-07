// Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div className="content-main">
      <div className="projects-header">
        <h2>Projects</h2>
        <button className="add-project-button">ADD PROJECT</button>
      </div>
      <div className="project-card-container">
        <div className="project-card red">
          <p>Project 1</p>
        </div>
        <div className="project-card green">
          <p>Project 2</p>
        </div>
        <div className="project-card blue">
          <p>Project 3</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
