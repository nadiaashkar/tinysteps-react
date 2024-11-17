// src/components/ParentHome.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function ParentHome() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-teal-600 mb-4">Parent Dashboard</h2>
      <p>Welcome to the Parent Dashboard! Here you can manage your child's information and track their growth and milestones.</p>
      
      {/* Quick Links */}
      <div className="mt-6 space-y-4">
        <Link to="/child-information">
          <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700 w-full sm:w-auto">
            View Child Information
          </button>
        </Link>
        
        <Link to="/growth-tracking">
          <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700 w-full sm:w-auto">
            Track Growth
          </button>
        </Link>
        
        <Link to="/milestones">
          <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700 w-full sm:w-auto">
            Log Milestones
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ParentHome;
