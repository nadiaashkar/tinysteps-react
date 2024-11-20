import React from 'react';
import './NotificationList.css'; // Import the CSS file for styling

const NotificationList = () => {
  return (
    <div className="notification-container">
      <h2 className="notification-title">All Notifications</h2>
      <ul className="notification-list">
        <li className="notification-item">Reminder: Baby's Checkup</li>
        <li className="notification-item">Reminder: Next Vaccination</li>
        <li className="notification-item">Reminder: Baby's Feed Time</li>
        <li className="notification-item">Reminder: Baby's Sleep Time</li>
      </ul>
    </div>
  );
  
};

export default NotificationList;
