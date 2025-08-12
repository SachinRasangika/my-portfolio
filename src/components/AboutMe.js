import React from "react";
import "./AboutMe.css";
import profileImage from "../assets/images/hero-pic2.jpg"; // Update path if needed
import cvFile from "../assets/images/Sachin_Silva_Intern.pdf"; // CV PDF file

const AboutMe = () => {
  return (
    <section className="about-me" aria-label="About Me Section">
      <div className="about-me-content">
        <div className="about-me-text">
          <h3>About Me</h3>
          <p className="description">
            As a Creative UX/UI designer and aspiring web developer currently
            pursuing a Bachelor's degree in Computer Science and Software
            Engineering at the Sri Lanka Institute of Information Technology
            (SLIIT), I am looking for an internship to build my skills while
            contributing to the industry and organization's growth.
          </p>
          <div className="about-me-buttons">
            <a
              href={cvFile}
              className="btn btn-primary"
              download="Sachin_Silva_Intern.pdf"
              aria-label="Download CV"
            >
              Download CV
            </a>
            <a href="#contact" className="btn btn-secondary" aria-label="Get in touch">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="about-me-image">
          <img src={profileImage} alt="Sachin Silva" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
