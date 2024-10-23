import React from 'react';
import './MapSearchPage.css';
import { useNavigate } from 'react-router-dom';

const MapSearchPage = () => {
  const navigate = useNavigate();

  const handleRestaurantClick = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  return (
    <div style={{ width: '1200%', position: 'relative' }}>
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

      {/* Restaurant Markers */}
      <div
        className="marker"
        onClick={() => handleRestaurantClick(1)}
        style={{
          position: 'absolute',
          top: '57px', // Positioning for Udupi Hotel Akshaya
          left: '1304px',
        }}
      >
        <img src="/marker-icon.png" alt="Udupi Hotel Akshaya" />
      </div>

      <div
        className="marker"
        onClick={() => handleRestaurantClick(2)}
        style={{
          position: 'absolute',
          top: '225px', // Positioning for Madurai Kumar Mess
          left: '1185px',
        }}
      >
        <img src="/marker-icon.png" alt="Madurai Kumar Mess" />
      </div>

      <div
        className="marker"
        onClick={() => handleRestaurantClick(3)}
        style={{
          position: 'absolute',
          top: '262px', // Positioning for Geetham Veg Restaurant
          left: '1745px',
        }}
      >
        <img src="/marker-icon.png" alt="Geetham Veg Restaurant" />
      </div>

      <div
        className="marker"
        onClick={() => handleRestaurantClick(4)}
        style={{
          position: 'absolute',
          top: '166px', // Positioning for Coal Barbecues
          left: '1750px',
        }}
      >
        <img src="/marker-icon.png" alt="Coal Barbecues" />
      </div>

      <div
        className="marker"
        onClick={() => handleRestaurantClick(5)}
        style={{
          position: 'absolute',
          top: '237px', // Positioning for Grill Box
          left: '2490px',
        }}
      >
        <img src="/marker-icon.png" alt="Grill Box" />
      </div>

      <div
        className="marker"
        onClick={() => handleRestaurantClick(6)}
        style={{
          position: 'absolute',
          top: '170px', // Positioning for DR Kitchen
          left: '1115px',
        }}
      >
        <img src="/marker-icon.png" alt="DR Kitchen" />
      </div>

      <div
        className="marker"
        onClick={() => handleRestaurantClick(6)}
        style={{
          position: 'absolute',
          top: '490px', // Positioning for Diadem
          left: '1783px',
        }}
      >
        <img src="/marker-icon.png" alt="Dindigal Thalapakatti Biriyani" />
      </div>

      <div
        className="marker"
        onClick={() => handleRestaurantClick(6)}
        style={{
          position: 'absolute',
          top: '16px', // Positioning for Diadem
          left: '2520px',
        }}
      >
        <img src="/marker-icon.png" alt="Charminar Biriyani Centre" />
      </div>
    </div>
  );
};

export default MapSearchPage;
