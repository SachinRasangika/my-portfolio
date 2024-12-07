import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="s-header">
      <div className="header-logo">
        <a href="/">
          <img src={logo} alt="Design sample" className="logo" />
        </a>
      </div>

      <nav className={`header-nav-wrap ${isMenuOpen ? 'is-open' : ''}`}>
  <ul className="header-main-nav">
    <li><a className="smoothscroll" href="#intro">Intro</a></li>
    <li><a className="smoothscroll" href="#about">About</a></li>
    <li><a className="smoothscroll" href="#education">Education</a></li>
    <li><a className="smoothscroll" href="#works">Works</a></li>
    <li><a className="smoothscroll" href="#contact">Say Hello</a></li>
  </ul>
</nav>


      <ul className="header-social">
        <li>
          <a href="https://www.linkedin.com/in/sachin-rasangika-94338a191/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/sanchezii" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-behance"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/SachinRasangika" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/sachin.rasangika/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sanchez.98__/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>

      <button className={`header-menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Navbar;
