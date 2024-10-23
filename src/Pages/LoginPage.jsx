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
      // Add customer login logic here
      console.log('Logging in as customer');
    } else if (userType === 'owner') {
      // Add owner login logic here
      console.log('Logging in as owner');
    }
    navigate('/');
  };

  return (
    <div className="page login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>User Type:</label>
          <select 
            value={userType} 
            onChange={(e) => setUserType(e.target.value)} 
            style={{ padding: '8px', marginBottom: '10px' }}
          >
            <option value="customer">Customer</option>
            <option value="owner">Owner</option>
          </select>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            style={{ padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={{ padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <div className="signup-link">
        <p>
          Don't have an account? 
          <a href="/signup/customer"> Sign up as Customer </a> or 
          <a href="/signup/owner"> Sign up as Owner</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
