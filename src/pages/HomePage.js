import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from './../services/Auth';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Tiny Steps</h1>
        <p>
          Tiny Steps helps parents monitor their baby's growth, sleep patterns, feeding schedules, 
          and vaccination records. Sign in to track your baby's development!
        </p>
      </header>

      {/* Login Section */}
      <section className="login-section">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Registration Prompt */}
        <p className="register-prompt">
          Still have no account?{' '}
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </section>

      {/* Inline CSS */}
      <style>
        {`
          .home-page {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background-image: url('https://wallpapers.com/images/high/very-cute-baby-on-moon-pillow-dyahlgg7pcfsc8lj.webp');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh; /* Full height of the viewport */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .header {
            background-color: rgba(255, 239, 239, 0.8); /* Soft pink background */
            padding: 20px;
            border-radius: 15px;
            margin-bottom: 20px;
            max-width: 600px;
            text-align: center;
          }

          .header h1 {
            color: #ff88a5; /* Baby pink */
            font-size: 2.5rem;
            font-family: 'Comic Sans MS', cursive;
          }

          .header p {
            font-size: 1.2rem;
            color: #666;
          }

          .login-section {
            background-color: rgba(255, 239, 239, 0.9); /* Semi-transparent pink */
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
          }

          .login-section h2 {
            color: #ff88a5; /* Baby pink */
            margin-bottom: 20px;
            font-family: 'Comic Sans MS', cursive;
          }

          .form-group {
            margin-bottom: 15px;
            text-align: left;
          }

          .form-group label {
            display: block;
            font-size: 14px;
            margin-bottom: 5px;
            color: #333;
          }

          .form-group input {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ff88a5; /* Pink border */
            border-radius: 10px;
          }

          .form-group input:focus {
            border-color: #ffcccb; /* Lighter pink on focus */
            outline: none;
          }

          .login-btn {
            width: 100%;
            padding: 12px;
            background-color: #ff88a5; /* Pink button */
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-family: 'Comic Sans MS', cursive;
          }

          .login-btn:hover {
            background-color: #ffcccb; /* Lighter pink on hover */
          }

          .register-prompt {
            margin-top: 15px;
            font-size: 14px;
            color: #666;
          }

          .register-link {
            color: #ff88a5;
            font-weight: bold;
            text-decoration: none;
          }

          .register-link:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
