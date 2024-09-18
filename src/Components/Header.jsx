// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">FoodWaste</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/map">Search in Map</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
