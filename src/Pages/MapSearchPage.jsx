import React from 'react';
import './MapSearchPage.css'; // Create this CSS file if needed

const MapSearchPage = () => {
  return (
    <div className="map-container">
      <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13131208712!2d80.04419850580796!3d13.047473316433955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726639274531!5m2!1sen!2sin" 
  width="100%" 
  height="450" 
  style={{ border: 0 }}
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Map"
/>
    </div>
  );
};

export default MapSearchPage;
