import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/Babies" className="navbar-link">Babies</Link>
        </li>
        <li>
        <Link to="/Sleep" className="navbar-link">Sleep</Link>
        </li>
        <li>
          <Link to="/Parents" className="navbar-link">Parents</Link>
        </li>
        <li>
          <Link to="/vaccination" className="navbar-link">Vaccination</Link>
        </li>
      </ul>

      {/* Inline CSS */}
      <style>
        {`
          .navbar {
            background-color: #ffe5ec; /* Soft pink background */
            padding: 15px 20px;
            border-radius: 10px; /* Rounded corners */
            display: flex;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          }

          .navbar-list {
            list-style: none;
            display: flex;
            gap: 25px;
            margin: 0;
            padding: 0;
          }

          .navbar-link {
            text-decoration: none;
            color: #4b4b4b; /* Neutral gray for text */
            font-size: 18px;
            font-weight: bold;
            font-family: 'Comic Sans MS', 'Comic Sans', cursive; /* Playful font */
            padding: 8px 12px;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
          }

          .navbar-link:hover {
            background-color: #ffcccb; /* Light pink hover */
            color: #ffffff; /* White text on hover */
          }

          .navbar-link:active {
            background-color: #f48fb1; /* Deeper pink on click */
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
