// src/Pages/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUp = () => {
  const [userType, setUserType] = useState('customer'); // Default user type is customer
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (userType === 'customer') {
      console.log('Signing up as customer');
    } else if (userType === 'owner') {
      console.log('Signing up as owner');
    }
    navigate('/');
  };

  return (
    <div className="page login-page">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
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
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
              className="form-input"
            />
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
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <div className="login-link">
          <p>
            Already have an account? 
            <a href="/login"> Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
