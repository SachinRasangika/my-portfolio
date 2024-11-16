import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import EducationExperience from '../components/EducationExperience';
import SelectedWorks from '../components/SelectedWorks'; // Import the SelectedWorks component
import Feedback from '../components/Feedback'; // Import the Feedback component

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />

      {/* Education & Experiences Section */}
      <EducationExperience />

      {/* Selected Works Section */}
      <SelectedWorks />

      {/* Feedback Section */}
      <Feedback />

      {/* Home Content */}
      <section className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the homepage.</p>
      </section>
    </div>
  );
};

export default Home;
