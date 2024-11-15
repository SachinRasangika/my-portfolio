import React from 'react';
import Hero from '../components/Hero';



const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* Home Content */}
      <section className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the homepage.</p>
      </section>
    </div>
  );
};

export default Home;
