import React from 'react';
import './ContactMe.css';
// Adjust the import path to the correct location
import avatarImage from '../assets/images/avatars/0EA1D9D6-06BA-4D95-BED6-EF5E96E3C375.png';  // Correct path to the image

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-me">
      <div className="row heading-block">
        <div className="column large-full">
          <h2 className="heading">Get In Touch</h2>
          {/* Use the imported avatar image here */}
          <img className="imoji-i" src={avatarImage} alt="Avatar" />
        </div>
      </div>

      <div className="row contact-main">
        <div className="column large-full">
          <p className="contact-email">
            <a href="mailto:sachinrasangika@gmail.com">sachinrasangika@gmail.com</a>
          </p>

          <p className="section-desc">
            I'm happy to connect, listen and help. Let's work together and build something awesome. Let's turn your idea to an even greater product. <a href="mailto:sachinrasangika@gmail.com">Email Me</a>.
          </p>
        </div>
      </div>

      <div className="row contact-infos">
        <div className="column large-5 medium-full contact-phone">
          <h4>Call Me</h4>
          <a href="tel:+94774698175">+94 774698175</a>
        </div>

        <div className="column large-7 medium-full contact-social">
          <h4>Social</h4>
          <ul>
            <li><a href="https://www.facebook.com" title="Facebook">Facebook</a></li>
            <li><a href="https://twitter.com" title="Twitter">Twitter</a></li>
            <li><a href="https://www.instagram.com" title="Instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
