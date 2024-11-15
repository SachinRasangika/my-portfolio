import React from 'react';
import './EducationExperience.css';

function EducationExperience() {
  return (
    <section className="education-experience">
      <div className="container">
        <h2>Education & Experiences</h2>

        <div className="education-experience-container">
          {/* Education Section (Left) */}
          <div className="education">
            <h3>Education</h3>
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
            <h3>Experiences</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">2021</span>
                <p className="event">Participated in Nasa Space App Challenge</p>
                <p className="award">Achieved "Global Connection Award"</p>
              </div>
              <div className="timeline-item">
                <span className="year">2021</span>
                <p className="event">Participated in Designthon Challenge</p>
                <p className="award">Selected Top 10</p>
              </div>
              <div className="timeline-item">
                <span className="year">2021</span>
                <p className="event">Participated in Designthon Challenge</p>
                <p className="award">Selected Top 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationExperience;
