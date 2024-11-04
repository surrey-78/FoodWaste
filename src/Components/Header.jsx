// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/map">Search in Map</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
