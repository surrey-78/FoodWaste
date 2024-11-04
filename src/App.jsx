import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import MapSearchPage from './Pages/MapSearchPage';
import HomePage from './Pages/HomePage';
import RestaurantPage from './Pages/RestaurantPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme'); // This line applies the dark theme class
  };  

  return (
    <Router>
      <Header />
      <button 
        onClick={toggleTheme} 
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#555' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          zIndex: 1000,
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/map" element={<MapSearchPage />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
