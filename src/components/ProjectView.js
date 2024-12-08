import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProjectView.css';

const ProjectView = () => {
  const location = useLocation();
  const { project } = location.state || {}; 

  console.log(project); // Debug: Check if the project object is being passed correctly

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="project-view">
      <div className="project-details">
        <h1>{project.title || 'Project Title'}</h1> {/* Fallback to "Project Title" if not found */}

        {/* Project Description */}
        <div
          className="project-summary"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />

        {/* Project Image */}
        <div className="project-image">
          <img src={project.image} alt={project.name} />
        </div>
      </div>
    </section>
  );
};

export default ProjectView;
