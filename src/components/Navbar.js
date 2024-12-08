import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
        <Link to="/my-portfolio/"> {/* Update to Link for SPA routing */}
          <img src={logo} alt="Design sample" className="logo" />
        </Link>
      </div>

      <nav className={`header-nav-wrap ${isMenuOpen ? 'is-open' : ''}`}>
        <ul className="header-main-nav">
          {/* Update the links to navigate to /my-portfolio/#intro */}
          <li><a className="smoothscroll" href="/my-portfolio/#intro">Intro</a></li> 
          <li><a className="smoothscroll" href="/my-portfolio/#about">About</a></li>
          <li><a className="smoothscroll" href="/my-portfolio/#education">Education</a></li>
          <li><a className="smoothscroll" href="/my-portfolio/#works">Works</a></li>
          <li><a className="smoothscroll" href="/my-portfolio/#contact">Say Hello</a></li>
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
