import React, { useState, useRef } from "react";
import Slider from "react-slick";
import './project.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import avatarImage from '../assets/images/avatars/avatarslap.png';

import p1 from "../assets/images/portfolio/Frame 94.png";
import p2 from "../assets/images/portfolio/redesignview.png";
import p3 from "../assets/images/portfolio/wvw.png";
import saralImage from "../assets/images/portfolio/saral.png";
import project4Image from "../assets/images/portfolio/screencapture-localhost-3000-2024-12-08-03_31_59.png";
import fit4LifeImage from "../assets/images/portfolio/fit4life.png";
import taurgoImage from "../assets/images/portfolio/taurgo.png";
import afImage from "../assets/images/af.png";

import { useNavigate } from "react-router-dom";

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,  // autoplay off
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const projects = [
    {
      title: "Water Villa World",
      description: `Water Villa World crafts exceptional experiences in stunning settings.  
        Our travel experts believe passionate, creative people can make a difference.  
        We share amazing opportunities, creating meaningful stories and connections worldwide.  
        Skills: Figma · HTML · CSS · Bootstrap (Framework).`,
      image: p3,
    },
    {
      title: "Web Design & Development",
      description: `Redesigned a non-profit website for accessing and preserving Theravada Buddhist texts and cultural articles, enhancing user experience.`,
      image: p2,
    },
    {
      title: "Saral.edu UI Design",
      description: `Designed a high-fidelity UI for Saral.edu, a platform for students and researchers to analyze research papers using AI.  
        The project was completed within 20 hours and involved:
        - Dashboard: A hub for managing projects, resources, and workspaces.
        - Chat Assistant: An intuitive interface for interacting with AI, featuring resource selection, pinned chats, and citation tracking.
        The design focused on usability, visual appeal, and enhancing research efficiency.`,
      image: saralImage,
    },
    {
      title: "Water World Kelaniya - Homepage Recreation",
      description: `I am pleased to share that I have successfully recreated the homepage for the Water World Kelaniya 🐋 website using React.  
        The previous version, built with HTML and CSS, has been transformed to enhance functionality and user experience.  
        I look forward to connecting with the Water World Kelaniya team to discuss the potential for upgrading the entire website.  
        Stay tuned for further developments.

        **Links**:  
        - [GitHub Repository: water-world-kelaniya](https://github.com/SachinRasangika/water-world-kelaniya.git)  
        - [LinkedIn Post](https://www.linkedin.com/feed/update/urn:li:activity:7219907175328927744/)`,
      image: project4Image,
    },
    {
      title: "Fit4Life Fitness Tracker",
      description: `Developed a fitness tracker web application that allows users to set goals, track workouts, and monitor progress.  
        The project highlights include:  
        - A dynamic dashboard with interactive charts.  
        - Integration with wearable devices for real-time updates.  
        - Focused on user-friendly design and accessibility.  
        Skills: React · Node.js · Chart.js · CSS · API Integration.`,
      image: fit4LifeImage,
    },
    {
      title: "Taurgo SaaS Platform",
      description: `Improved the Taurgo SaaS platform by redesigning the landing page, enhancing UI and user experience, and contributing to overall platform improvements.`,
      image: taurgoImage,
    },
    {
      title: "Transform Wellness - Dr. Bradford Perkins Homepage",
      description: `Redesigned the homepage to create a premium, calming, and modern wellness experience.  
      Focus areas: precision medicine, longevity, cognitive clarity, and personalized holistic care.  
      Emphasized warm colors, serif headings, generous spacing, and clear visual hierarchy for trust and engagement.`,
      image: afImage,
    },
  ];

  const handleSeeMoreClick = (project) => {
    if (project.title === "Transform Wellness - Dr. Bradford Perkins Homepage") {
      navigate("/before-after-slider");
    } else {
      navigate("/project-view", { state: { project } });
    }
  };

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="game-section">
      <div>
        <h1 className="header">Selected Works</h1>
        <p>Here are some of my recent works. Click to explore.</p>
        <img className="imoji-2" src={avatarImage} alt="Avatar" />
      </div>

      {/* Custom slider buttons */}
      <div className="slider-buttons">
        <button onClick={() => sliderRef.current.slickPrev()}>Prev</button>
        <button onClick={() => sliderRef.current.slickNext()}>Next</button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <img src={project.image} alt={project.title} className="game-image" />
            <div className="item-desc">
              <h3>{project.title}</h3>
              {activeIndex === index && (
                <>
                  <p>{project.description}</p>
                  <button
                    className="see-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSeeMoreClick(project);
                    }}
                  >
                    See More
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Project;
