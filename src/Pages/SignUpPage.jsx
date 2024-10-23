// src/Pages/SignUpPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  const [userType, setUserType] = useState('customer'); // Default user type is customer
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Can be a name or restaurant name depending on user type
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (userType === 'customer') {
      // Add customer signup logic here
      console.log('Signing up as customer');
    } else if (userType === 'owner') {
      // Add owner signup logic here
      console.log('Signing up as owner');
    }
    // After successful signup, navigate to login page
    navigate('/login');
  };

  return (
    <div className="page signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
          <label>{userType === 'customer' ? 'Name' : 'Restaurant Name'}:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder={userType === 'customer' ? 'Enter your name' : 'Enter restaurant name'}
            style={{ padding: '8px', marginBottom: '10px' }}
          />
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
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <div className="login-link">
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
