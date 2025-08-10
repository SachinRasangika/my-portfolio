import React, { useState } from 'react';
import './EducationExperience.css';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaBuilding } from 'react-icons/fa';

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
        <h2 className="section-heading">Education & Experience</h2>

        <div className="education-experience-container">
          {/* Education Section */}
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

          {/* Work Experience Section */}
          <div className="experience">
            <h3><FaBriefcase className="icon" /> Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">Mar 2025 – Present</span>
                <p className="institution"><FaBuilding className="award-icon" /> HashBaze · Remote</p>
                <p className="degree">UI/UX Engineer Intern</p>
              </div>
              <div className="timeline-item">
                <span className="year">Aug 2024 – Feb 2025</span>
                <p className="institution"><FaBuilding className="award-icon" /> Taurgo · Remote</p>
                <p className="degree">UI/UX Designer Intern</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="achievements-section">
          <h3><FaTrophy className="icon" /> Achievements</h3>
          <div className="achievements-grid">
            <div className="achievement-card" onClick={() => openPopup('https://media.licdn.com/dms/image/v2/D562DAQEIdV6Sj8RqYg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720363597855?e=1734260400&v=beta&t=uW-T7tV6RstPET9RGA2RY-becEfkvi6tPLCUFdOW6I0')}>
              <h4>NASA Space App Challenge</h4>
              <p>Global Connection Award (2021)</p>
            </div>
            <div className="achievement-card" onClick={() => openPopup('https://media.licdn.com/dms/image/v2/D562DAQFY5vIgXH4eXA/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1720387767379?e=1734260400&v=beta&t=-d6rlay2K-TMZ7n-j5BsnrFZQXvTEc0SiSSKShr4TOY')}>
              <h4>Designthon Challenge</h4>
              <p>Top 10 (2020)</p>
            </div>
            <div className="achievement-card" onClick={() => openPopup('https://media.licdn.com/dms/image/v2/D562DAQEy1f0Sy-AuyQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1720387511103?e=1734260400&v=beta&t=xwfImFA5zxyrP5W43L9TNhSvU3DEv_OsXOndc78i_yY')}>
              <h4>Designthon Challenge</h4>
              <p>Top 10 (2021)</p>
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
