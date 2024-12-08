import React, { useState, useEffect } from "react";
import './Feedback.css';

// Import local images for feedback persons
import padulaImage from '../assets/images/avatars/Padula.jpg';
import hoshanImage from '../assets/images/avatars/Hoshan.jpeg';
import ravinduImage from '../assets/images/avatars/Ravindu.jpg';

const feedbackData = [
  {
    id: 1,
    name: "Padula Guruge",
    profilePic: padulaImage, // Use the imported image
    message: "Working with Sachin on the Water Villa World project has been excellent. The UI/UX design is clean, modern, and user-friendly, making it easy for travelers to navigate and book their stays. The visuals and color scheme effectively convey luxury and tranquility. The booking process is seamless, and the site is responsive and accessible across various devices. Sachin's attention to detail and focus on user experience are outstanding. This design will undoubtedly enhance customer engagement and satisfaction. (Padula Guruge/Ascentic - Senior Software Engineer)",
  },
  {
    id: 2,
    name: "Hoshan Kalana Abeysiriwardana",
    profilePic: hoshanImage, // Use the imported image
    message: "Sachin's redesign of our website has greatly enhanced its functionality and appeal. As a UK-based non-profit working with Theravada Buddhist monks, academics, and scholars, our mission to provide a communal platform and repository for Theravada Buddhist texts and cultural articles is now more effectively realized. The new design is user-friendly and visually appealing, making our resources more accessible to the public and beneficial to the broader artistic development of Buddhist culture. Sachin's work has been invaluable in advancing our mission. (Hoshan Kalana Abeysiriwardana/Enfection - Senior Web Developer)",
  },
  {
    id: 3,
    name: "Ravindu Kanishka",
    profilePic: ravinduImage, // Use the imported image
    message: "Sachin's assistance in creating social media posts has been outstanding. As a freelance video editor, having visually engaging and professional posts is crucial, and Sachin delivered exactly that. His creativity and attention to detail have significantly improved my online presence. I highly recommend his work. (Ravindu Kanishka/Freelance Video Editor)",
  }
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  const currentFeedback = feedbackData[currentIndex];

  return (
    <section className="feedback-section">
      <h2>Feedback</h2>
      <div
        className="feedback-container"
        onMouseEnter={() => setIsHovered(true)} // Stop auto-change when hovering
        onMouseLeave={() => setIsHovered(false)} // Resume auto-change when not hovering
      >
        <div
          key={currentFeedback.id}
          className="feedback-message"
        >
          <div className="sender-info">
            <img
              src={currentFeedback.profilePic}
              alt={currentFeedback.name}
              className="sender-profile-pic"
            />
          </div>
          <div className="message-bubble">
            <div className="sender-name">{currentFeedback.name}</div>
            <div className="message-content">{currentFeedback.message}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
