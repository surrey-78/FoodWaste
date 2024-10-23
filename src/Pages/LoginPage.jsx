// src/Pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [userType, setUserType] = useState('customer'); // Default user type is customer
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userType === 'customer') {
      console.log('Logging in as customer');
    } else if (userType === 'owner') {
      console.log('Logging in as owner');
    }
    navigate('/');
  };

  return (
    <div className="page login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>User Type:</label>
            <select 
              value={userType} 
              onChange={(e) => setUserType(e.target.value)} 
              className="form-input"
            >
              <option value="customer">Customer</option>
              <option value="owner">Owner</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="form-input"
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <div className="signup-link">
          <p>
            Don't have an account? 
            <a href="/signup"> Sign up </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
