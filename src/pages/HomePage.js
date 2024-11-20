import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Add login logic here
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
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            max-width: 600px;
            text-align: center;
          }

          .header h1 {
            color: #4CAF50;
            font-size: 2.5rem;
          }

          .header p {
            font-size: 1.2rem;
            color: #666;
          }

          .login-section {
            background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
          }

          .login-section h2 {
            color: #4CAF50;
            margin-bottom: 20px;
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
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .form-group input:focus {
            border-color: #2196F3; /* Blue border on focus */
            outline: none;
          }

          .login-btn {
            width: 100%;
            padding: 12px;
            background-color: #2196F3; /* Blue button */
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .login-btn:hover {
            background-color: #1976D2; /* Darker blue on hover */
          }

          .register-prompt {
            margin-top: 15px;
            font-size: 14px;
            color: #666;
          }

          .register-link {
            color: #2196F3;
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
