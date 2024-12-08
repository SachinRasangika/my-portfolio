import React, { useState } from 'react';
import './EducationExperience.css';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa'; // Icons for Education & Experience

function EducationExperience() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState('');

  const openPopup = (image) => {
    setPopupImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage('');
  };

  return (
    <section className="education-experience">
      <div className="container">
        <h2 className="section-heading">Education & Experiences</h2>

        <div className="education-experience-container">
          {/* Education Section (Left) */}
          <div className="education">
            <h3><FaGraduationCap className="icon" /> Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">2024 - Expected</span>
                <p className="institution">SLIIT City Uni | Higher Education Institute in Sri Lanka</p>
                <p className="degree">B.Sc. (Hons) Computer Science and Software Engineering – University of Bedfordshire</p>
              </div>
              <div className="timeline-item">
                <span className="year">2017</span>
                <p className="institution">G/Dharmasoka College - Ambalangoda</p>
                <p className="degree">G.C.E. Advanced Level - Commerce Stream</p>
              </div>
            </div>
          </div>

          {/* Experiences Section (Right) */}
          <div className="experience">
            <h3><FaBriefcase className="icon" /> Experiences</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">2021</span>
                <p className="event">Participated in NASA Space App Challenge</p>
                <p className="award">
                  Achieved "Global Connection Award" <FaTrophy className="award-icon" />
                  <span className="image-link" onClick={() => openPopup('https://media.licdn.com/dms/image/v2/D562DAQEIdV6Sj8RqYg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720363597855?e=1734260400&v=beta&t=uW-T7tV6RstPET9RGA2RY-becEfkvi6tPLCUFdOW6I0')}>View</span>
                </p>
              </div>
              <div className="timeline-item">
                <span className="year">2020</span>
                <p className="event">Participated in Designthon Challenge</p>
                <p className="award">
                  Selected Top 10
                  <span className="image-link" onClick={() => openPopup('https://media.licdn.com/dms/image/v2/D562DAQFY5vIgXH4eXA/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1720387767379?e=1734260400&v=beta&t=-d6rlay2K-TMZ7n-j5BsnrFZQXvTEc0SiSSKShr4TOY')}>View</span>
                </p>
              </div>
              <div className="timeline-item">
                <span className="year">2021</span>
                <p className="event">Participated in Designthon Challenge</p>
                <p className="award">
                  Selected Top 10
                  <span className="image-link" onClick={() => openPopup('https://media.licdn.com/dms/image/v2/D562DAQEy1f0Sy-AuyQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1720387511103?e=1734260400&v=beta&t=xwfImFA5zxyrP5W43L9TNhSvU3DEv_OsXOndc78i_yY')}>View</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup for Images */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-popup" onClick={closePopup}>×</span>
            <img src={popupImage} alt="Award" />
          </div>
        </div>
      )}
    </section>
  );
}

export default EducationExperience;
