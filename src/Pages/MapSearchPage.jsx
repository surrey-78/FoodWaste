import React from 'react';
import './MapSearchPage.css'; // Ensure this CSS file exists if you have specific styles

const MapSearchPage = () => {
  return (
    <div style={{ width: '500%' }}>
      <iframe
        width="100%"
        height="600"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13131208712!2d80.04419850580791!3d13.047473316433955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726986678249!5m2!1sen!2sin"
        title="Google Map"
        style={{ border: 'none' }} // Use CSS for border instead of frameBorder
      >
        <a href="https://www.gps.ie/">gps systems</a>
      </iframe>
    </div>
  );
};

export default MapSearchPage;
