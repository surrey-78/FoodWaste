import React from 'react';
import './MapSearchPage.css'; // Ensure this CSS file exists if you have specific styles

const MapSearchPage = () => {
  return (
    <div style={{ width: '100%' }}>
      <iframe
        width="100%"
        height="600"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chennai+(Food%20Waste)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Google Map"
        style={{ border: 'none' }} // Use CSS for border instead of frameBorder
      >
        <a href="https://www.gps.ie/">gps systems</a>
      </iframe>
    </div>
  );
};

export default MapSearchPage;
