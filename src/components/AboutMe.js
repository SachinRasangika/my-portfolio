import React from 'react';
import './AboutMe.css';
import profileImage from '../assets/images/hero-pic2.jpg';  // Update the path if needed

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <div className="text">
          <h1>About Me</h1>
          <p className="description">
            As a Creative UX/UI designer and aspiring web developer currently pursuing a Bachelor's degree in Computer Science and Software Engineering at the Sri Lanka Institute of Information Technology (SLIIT), I am looking for an internship to build my skills while contributing to the industry and organization's growth.
          </p>
          <div className="buttons">
            <button className="btn btn-primary">Learn More</button>
            <button className="btn btn-secondary">Contact Me</button>
          </div>
        </div>
        <div className="image">
          <img src={profileImage} alt="Sachin" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
