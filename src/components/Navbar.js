import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper for scroll-to-section inside homepage
  const handleNavClick = (e, id) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="s-header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Design sample" className="logo" />
        </Link>
      </div>

      <nav className={`header-nav-wrap ${isMenuOpen ? 'is-open' : ''}`}>
        <ul className="header-main-nav">
          {/* Use Link with to="/" plus onClick scroll handler */}
          <li>
            <Link to="/" onClick={e => handleNavClick(e, 'intro')}>Intro</Link>
          </li>
          <li>
            <Link to="/" onClick={e => handleNavClick(e, 'about')}>About</Link>
          </li>
          <li>
            <Link to="/" onClick={e => handleNavClick(e, 'education')}>Education</Link>
          </li>
          <li>
            <Link to="/" onClick={e => handleNavClick(e, 'works')}>Works</Link>
          </li>
          <li>
            <Link to="/" onClick={e => handleNavClick(e, 'contact')}>Say Hello</Link>
          </li>
        </ul>
      </nav>

      <ul className="header-social">
        <li><a href="https://www.linkedin.com/in/sachin-rasangika-94338a191/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="https://www.behance.net/sanchezii" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance"></i></a></li>
        <li><a href="https://github.com/SachinRasangika" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
        <li><a href="https://www.facebook.com/sachin.rasangika/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="https://www.instagram.com/sanchez.98__/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
      </ul>

      <button className={`header-menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`} onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </button>
    </header>
  );
};

export default Navbar;
