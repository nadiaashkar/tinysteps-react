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
          <Link to="/users" className="navbar-link">Users</Link>
        </li>
        <li>
          <Link to="/feeding" className="navbar-link">Feeding</Link>
        </li>
        <li>
          <Link to="/sleeping" className="navbar-link">Sleeping</Link>
        </li>
        <li>
          <Link to="/vaccination" className="navbar-link">Vaccination</Link>
        </li>

      </ul>

      {/* Inline CSS */}
      <style>
        {`
          .navbar {
            background-color: #4caf50; /* Green background */
            padding: 10px 20px;
            display: flex;
            justify-content: center;
          }

          .navbar-list {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 0;
            padding: 0;
          }

          .navbar-link {
            text-decoration: none;
            color: white;
            font-size: 16px;
            font-weight: bold;
            transition: color 0.3s;
          }

          .navbar-link:hover {
            color: #ffeb3b; /* Yellow on hover */
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
