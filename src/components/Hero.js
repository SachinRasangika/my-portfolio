import React from 'react';
import '../components/Hero.css';
import HeroImage from '../assets/images/54.png'; // Imported image path

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h2>Hello, I'm Sachin</h2>
        <h1>Digital Designer<br/>and Web Developer<br/>Based In Somewhere</h1>
      </div>
      <div className="hero-right">
        <img src={HeroImage} alt="Design sample" className="hero-image" /> {/* Use HeroImage here */}
      </div>
    </section>
  );
};

export default Hero;
