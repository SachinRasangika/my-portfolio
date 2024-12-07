import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import EducationExperience from '../components/EducationExperience';
import SelectedWorks from '../components/SelectedWorks';
import Feedback from '../components/Feedback';
import ContactMe from '../components/ContactMe';


const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section id="intro">
        <Hero />
      </section>

      {/* About Me Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Education & Experiences Section */}
      <section id="education">
        <EducationExperience />
      </section>

      {/* Selected Works Section */}
      <section id="works">
        <SelectedWorks />
      </section>

      {/* Feedback Section */}
      <section id="feedback">
        <Feedback />
      </section>

      {/* Contact Me Section */}
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
