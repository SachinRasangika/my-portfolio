import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import EducationExperience from '../components/EducationExperience';
import SelectedWorks from '../components/SelectedWorks';
import Feedback from '../components/Feedback';
import ContactMe from '../components/ContactMe';
import Project from '../components/Project'; // Import the Project Component

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

      {/* Projects Section */}
      <section id="projects">
        <Project />
      </section>

      {/* Selected Works Section */}
      {/* <section id="works">
        <SelectedWorks />
      </section> */}

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
