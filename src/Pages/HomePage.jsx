// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Navigate to the login/signup page
    navigate('/login'); // Assuming '/login' is the route for your login/signup page
  };

  return (
    <div className="page home-page">
      <h1>Welcome to FoodWaste</h1>
      <p>Help reduce food waste and support people in need by donating excess food.</p>
      <button className="btn" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
