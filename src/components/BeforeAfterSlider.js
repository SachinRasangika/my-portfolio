import React from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = () => {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img
          src={require('/Users/sachinrs/Documents/portfo/my-portfolio/src/assets/images/be.png')}
          alt="Before"
          className="image"
        />
        <p className="label">Before</p>
      </div>
      <div className="image-wrapper">
        <img
          src={require('/Users/sachinrs/Documents/portfo/my-portfolio/src/assets/images/af.png')}
          alt="After"
          className="image"
        />
        <p className="label">After</p>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
