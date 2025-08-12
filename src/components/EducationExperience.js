import React, { useState } from 'react';
import './EducationExperience.css';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaBuilding } from 'react-icons/fa';

function EducationExperience() {
  const [activeTab, setActiveTab] = useState('education');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const showModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };

  const hideModal = () => {
    setModalOpen(false);
    setModalImg('');
  };

  return (
    <section className="ee-section">
      <div className="ee-container">
        <h2 className="ee-main-title">Education & Experience</h2>

        <div className="ee-layout">
          <nav className="ee-tabs">
            <button
              className={`ee-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <FaGraduationCap className="ee-tab-icon" />
              Education
            </button>
            <button
              className={`ee-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <FaBriefcase className="ee-tab-icon" />
              Experience
            </button>
            <button
              className={`ee-tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievements')}
            >
              <FaTrophy className="ee-tab-icon" />
              Achievements
            </button>
          </nav>

          <div className="ee-content-area">
            {activeTab === 'education' && (
              <div className="ee-content">
                <h3 className="ee-content-title">Education</h3>
                <div className="ee-cards">
                  <article className="ee-card">
                    <time className="ee-time">2024 - Expected</time>
                    <h4 className="ee-institution">SLIIT City Uni | Higher Education Institute in Sri Lanka</h4>
                    <p className="ee-degree">B.Sc. (Hons) Computer Science and Software Engineering – University of Bedfordshire</p>
                  </article>
                  <article className="ee-card">
                    <time className="ee-time">2017</time>
                    <h4 className="ee-institution">G/Dharmasoka College - Ambalangoda</h4>
                    <p className="ee-degree">G.C.E. Advanced Level - Commerce Stream</p>
                  </article>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="ee-content">
                <h3 className="ee-content-title">Experience</h3>
                <div className="ee-cards">
                  <article className="ee-card">
                    <time className="ee-time">Mar 2025 – Present</time>
                    <h4 className="ee-institution">
                      <FaBuilding className="ee-building-icon" /> HashBaze · Remote
                    </h4>
                    <p className="ee-degree">UI/UX Engineer Intern</p>
                  </article>
                  <article className="ee-card">
                    <time className="ee-time">Aug 2024 – Feb 2025</time>
                    <h4 className="ee-institution">
                      <FaBuilding className="ee-building-icon" /> Taurgo · Remote
                    </h4>
                    <p className="ee-degree">UI/UX Designer Intern</p>
                  </article>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="ee-content">
                <h3 className="ee-content-title">Achievements</h3>
                <div className="ee-achievements-grid">
                  <div
                    className="ee-achievement-card"
                    onClick={() =>
                      showModal(
                        'https://media.licdn.com/dms/image/v2/D562DAQEIdV6Sj8RqYg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720363597855?e=1734260400&v=beta&t=uW-T7tV6RstPET9RGA2RY-becEfkvi6tPLCUFdOW6I0'
                      )
                    }
                  >
                    <h4>NASA Space App Challenge</h4>
                    <p>Global Connection Award (2021)</p>
                  </div>
                  <div
                    className="ee-achievement-card"
                    onClick={() =>
                      showModal(
                        'https://media.licdn.com/dms/image/v2/D562DAQFY5vIgXH4eXA/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1720387767379?e=1734260400&v=beta&t=-d6rlay2K-TMZ7n-j5BsnrFZQXvTEc0SiSSKShr4TOY'
                      )
                    }
                  >
                    <h4>Designthon Challenge</h4>
                    <p>Top 10 (2020)</p>
                  </div>
                  <div
                    className="ee-achievement-card"
                    onClick={() =>
                      showModal(
                        'https://media.licdn.com/dms/image/v2/D562DAQEy1f0Sy-AuyQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1720387511103?e=1734260400&v=beta&t=xwfImFA5zxyrP5W43L9TNhSvU3DEv_OsXOndc78i_yY'
                      )
                    }
                  >
                    <h4>Designthon Challenge</h4>
                    <p>Top 10 (2021)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="ee-modal-overlay" onClick={hideModal}>
          <div className="ee-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="ee-modal-close" onClick={hideModal}>
              ×
            </button>
            <img src={modalImg} alt="Achievement" className="ee-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
}

export default EducationExperience;
