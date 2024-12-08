import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProjectView.css'; // Import the CSS for this component

const ProjectView = () => {
  const location = useLocation();
  const { project } = location.state || {}; // Access the project passed from the previous page

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="project-view">
      <div className="project-details">
        <h1>{project.name}</h1>

        {/* Project Description */}
        <div
          className="project-summary"
          dangerouslySetInnerHTML={{ __html: project.description }} // Render description with HTML
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
