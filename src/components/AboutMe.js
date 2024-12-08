import React from 'react';
import './AboutMe.css';
import profileImage from '../assets/images/hero-pic2.jpg'; // Update the path if needed
import cvFile from '../assets/images/Sachin_Silva_Intern.pdf'; // Import your CV PDF file

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <div className="text">
          <h3 className="">About Me</h3>
          <p className="lead description">
            As a Creative UX/UI designer and aspiring web developer currently pursuing a Bachelor's degree in Computer Science and Software Engineering at the Sri Lanka Institute of Information Technology (SLIIT), I am looking for an internship to build my skills while contributing to the industry and organization's growth.
          </p>
          <div className="about-me__buttons">
            {/* Update download link to point to the imported PDF */}
            <a href={cvFile} className="btn btn-primary" download="Sachin_Silva_Intern">Download CV</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="image">
          <img src={profileImage} alt="Sachin" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
