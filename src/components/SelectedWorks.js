import React from "react";
import "./SelectedWorks.css";
// Import images
import EmojiImage from "../assets/images/portfolio/emoji.png";
import p1 from "../assets/images/portfolio/Frame 94.png";
import p2 from "../assets/images/portfolio/redesignview.png";
import p3 from "../assets/images/portfolio/wvw.png";

const SelectedWorks = () => {
  // Project data
  const projects = [
    { id: 1, name: "Project One", description: "A brief about Project One.", image: p1 },
    { id: 2, name: "Project Two", description: "A short summary of Project Two.", image: p2 },
    { id: 3, name: "Project Three", description: "Overview of Project Three.", image: p3 },
  ];

  return (
    <section className="selected-works">
      <div className="header">
        <h2>Selected Works</h2>
        <p>
          Here are some of my selected works I have done lately. Feel free to
          check them out.
        </p>
        {/* Add the emoji image */}
        <div className="image-container">
          <img src={EmojiImage} alt="Emoji" className="emoji-image" />
        </div>
      </div>

      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <button className="see-more-button">See More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
