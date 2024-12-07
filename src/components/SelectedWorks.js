import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the navigate hook
import './SelectedWorks.css'; // Ensure the correct path is used

// Import your images
import p1 from "../assets/images/portfolio/Frame 94.png";
import p2 from "../assets/images/portfolio/redesignview.png";
import p3 from "../assets/images/portfolio/wvw.png";
import saralImage from "../assets/images/portfolio/saral.png"; // Example Saral.edu image

const SelectedWorks = () => {
  const [showMore, setShowMore] = useState(false); // State for toggling the "See More" functionality
  const navigate = useNavigate(); // Create navigate function for navigation

  // Project data
  const projects = [
    {
      id: 1,
      name: "Water Villa World",
      description: `Water Villa World crafts exceptional experiences in stunning settings. Our travel experts believe passionate, creative people can make a difference. We share amazing opportunities, creating meaningful stories and connections worldwide.
      Skills: Figma · HTML · CSS · Bootstrap (Framework).`,
      image: p3,
      color: "#3498db", // Default color for the bottom bar
    },
    {
      id: 2,
      name: "Web Design and Development",
      description: `Redesigned a non-profit website for accessing and preserving Theravada Buddhist texts and cultural articles, enhancing user experience.`,
      image: p2,
      color: "#e74c3c", // Default color for the bottom bar
    },
    {
      id: 3,
      name: "Saral.edu UI Design - Dashboard & Chat Assistant",
      description: `I designed a high-fidelity UI for Saral.edu, a platform for students and researchers to analyze research papers using AI. 
      The project was completed within 20 hours and involved:
      
      - Dashboard: A hub for managing projects, resources, and workspaces.
      - Chat Assistant: An intuitive interface for interacting with AI, featuring resource selection, pinned chats, and citation tracking.
      
      The design focused on usability, visual appeal, and enhancing research efficiency.`,
      image: saralImage,
      color: "#2ecc71", // Default color for the bottom bar
    },
    {
      id: 4,
      name: "Project Four",
      description: "Description of Project Four. This project showcases another UI/UX design featuring interactive elements and smooth animations.",
      image: p3,
      color: "#9b59b6", // Default color for the bottom bar
    },
  ];

  // Show all or limited projects based on `showMore` state
  const displayedProjects = showMore ? projects : projects.slice(0, 3);

  // Handle card click to navigate to the project view page
  const handleCardClick = (project) => {
    navigate("/project-view", { state: { project } }); // Navigate and pass project data in state
  };

  return (
    <section className="selected-works">
      <div className="header">
        <h1>Selected Works</h1>
        <p>Here are some of my selected works I have done lately. Feel free to check them out.</p>
      </div>

      <div className="projects">
        {displayedProjects.map((project) => (
          <div
            className="card"
            key={project.id}
            onClick={() => handleCardClick(project)} // Add click event handler
          >
            <figure className="screenshot" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="overlay"></div>
            </figure>
            <div className="content">
              <span className="title">{project.name}</span>
              <span className="description">{project.description.split("\n")[0]}</span>
              <div className="bottom-bar" style={{ backgroundColor: project.color }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="see-more-container">
        <button className="see-more-button" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default SelectedWorks;
