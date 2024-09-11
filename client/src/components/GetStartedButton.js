import React from 'react';
import { useNavigate } from 'react-router-dom';

function GetStartedButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login'); 
  };

  return (
    <button onClick={handleClick} className="get-started-button">
      Get Started
    </button>
  );
}

export default GetStartedButton;
