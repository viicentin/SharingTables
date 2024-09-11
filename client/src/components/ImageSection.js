import React from 'react';
import diningImage from '../assets/hero.png'; // 


function ImageSection() {
  return (
    <div className="image-section">
      <img src={diningImage} alt="People dining together" />
    </div>
  );
}

export default ImageSection;
