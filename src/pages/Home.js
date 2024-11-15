import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe'; // Import the AboutMe component
import EducationExperience from '../components/EducationExperience'; // Import the EducationExperience component

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />

      {/* Education & Experiences Section */}
      <EducationExperience />

      {/* Home Content */}
      <section className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the homepage.</p>
      </section>
    </div>
  );
};

export default Home;
