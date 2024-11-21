import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // State for showing errors

  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match!"); // Display error message
    } else {
      setError('');
      // Handle registration logic here
      console.log('Registering with:', { email, password });
      alert('Registration successful!');

      // Redirect to ParentsPage
      navigate('/users');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://www.gov.je/Asset%20library/Birth%20banner.jpg?RenditionID=16')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
          {error && <p className="error-message">{error}</p>}
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
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>

      {/* Inline CSS */}
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f3f4f6;
          }

          .register-container {
            background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 350px;
          }

          h2 {
            font-size: 24px;
            color: #4CAF50;
            margin-bottom: 20px;
          }

          .error-message {
            color: #f44336; /* Red for errors */
            font-size: 14px;
            margin-bottom: 15px;
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
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .form-group input:focus {
            border-color: #4CAF50;
            outline: none;
          }

          .register-btn {
            width: 100%;
            padding: 12px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .register-btn:hover {
            background-color: #45a049;
          }

          @media (max-width: 400px) {
            .register-container {
              width: 90%;
            }

            h2 {
              font-size: 20px;
            }

            .form-group input {
              font-size: 14px;
            }

            .register-btn {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RegisterPage;
