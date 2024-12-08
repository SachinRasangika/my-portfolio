import React from 'react';
import './Hero.css';
import HeroImage from '../assets/images/54.png'; // Ensure this path is correct

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Text Section */}
        <div className="hero-text">
          <h2>Hey There,</h2>
          <h1>
            I’m <span className="highlight">Sachin Silva</span>,
            <br />
            <span className="dynamic-text">
              <span>UI/UX Designer</span>
              <span>Front-End Developer</span>
              <span>Fullstack  Developer</span>
            </span>
          </h1>
          <p>
            Crafting impactful designs and seamless web experiences. Let’s work
            together to bring your vision to life!
          </p>
          <div className="hero-buttons">
            {/* Linking to About Me section */}
            <a href="#about" className="btn btn-primary">
              About Me
            </a>

            {/* Linking to Contact Me section */}
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="hero-image-container">
          <div className="image-wrapper">
            <img src={HeroImage} alt="Showcase" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
