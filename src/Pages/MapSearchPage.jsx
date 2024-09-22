import React from 'react';
import './MapSearchPage.css';
import { useNavigate } from 'react-router-dom';

const MapSearchPage = () => {
  const navigate = useNavigate();

  const handleRestaurantClick = (restaurantId) => {
    // This will navigate to a new page with the restaurant's food availability details
    navigate(`/restaurant/${restaurantId}`);
  };

  return (
    <div style={{ width: '500%', position: 'relative' }}>
      <iframe
        width="100%"
        height="600"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.564999589134!2d80.22835409652969!3d13.042593646467205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726987331846!5m2!1sen!2sin"
        title="Google Map"
        style={{ border: 'none' }}
      ></iframe>

      {/* Overlay clickable markers */}
      <div className="marker" onClick={() => handleRestaurantClick(1)} style={{ position: 'absolute', top: '300px', left: '400px' }}>
        <img src="/marker-icon.png" alt="Restaurant Marker" />
      </div>
      <div className="marker" onClick={() => handleRestaurantClick(2)} style={{ position: 'absolute', top: '250px', left: '500px' }}>
        <img src="/marker-icon.png" alt="Restaurant Marker" />
      </div>
    </div>
  );
};

export default MapSearchPage;
