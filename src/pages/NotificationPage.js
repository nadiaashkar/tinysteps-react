import React, { useState } from "react";

const notificationsData = [
  {
    id: 1,
    title: "Feeding Reminder",
    message: "It's time to feed your baby.",
    time: "10:00 AM",
    read: false,
  },
  {
    id: 2,
    title: "Vaccination Reminder",
    message: "Your baby’s next vaccination is due today.",
    time: "12:00 PM",
    read: false,
  },
  {
    id: 3,
    title: "Sleep Tracking",
    message: "Check your baby's sleep patterns for the last night.",
    time: "8:00 PM",
    read: false,
  },
  {
    id: 4,
    title: "Milestone Achievement",
    message: "Your baby has reached a new milestone today!",
    time: "9:00 AM",
    read: false,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  // Function to mark a notification as read
  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notif) =>
      notif.id === id ? { ...notif, read: true } : notif
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="notifications-container">
      <h2 className="notifications-header">Notifications</h2>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${notification.read ? "read" : "unread"}`}
          >
            <div className="notification-header">
              <h3 className="notification-title">{notification.title}</h3>
              <span className="notification-time">{notification.time}</span>
            </div>
            <p className="notification-message">{notification.message}</p>

            <button
              className="mark-read-btn"
              onClick={() => markAsRead(notification.id)}
            >
              {notification.read ? "Marked as Read" : "Mark as Read"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;

// CSS Styles for Notifications Component
const styles = `
.notifications-container {
  padding: 2% 8%;
}

.notifications-header {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

.notifications-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.notification-item {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-left: 4px solid #38b2ac;
}

.notification-item.unread {
  border-left-color: #ff6347; /* Red color for unread */
}

.notification-header {
  display: flex;
  justify-content: space-between;
}

.notification-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.notification-time {
  font-size: 0.9rem;
  color: #6b7280; /* Gray for time */
}

.notification-message {
  font-size: 1rem;
  color: #333;
}

.mark-read-btn {
  padding: 0.5rem 1rem;
  background-color: #38b2ac;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.mark-read-btn:hover {
  background-color: #319795;
}

.notification-item.read {
  background-color: #f0fdf4; /* Light green for read notifications */
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
