import React, { useState } from 'react';

function Feeding() {
  const [feedings, setFeedings] = useState([]);
  const [feedingTime, setFeedingTime] = useState('');
  const [feedingAmount, setFeedingAmount] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [error, setError] = useState('');

  // Add a new feeding entry
  const handleAddFeeding = () => {
    if (!feedingTime || !feedingAmount || feedingAmount <= 0) {
      setError("Please fill out all fields with valid values.");
      return;
    }
    const newFeeding = {
      time: feedingTime,
      amount: feedingAmount,
    };
    setFeedings([...feedings, newFeeding]);
    setFeedingTime('');
    setFeedingAmount('');
    setError('');
  };

  // Delete a feeding entry
  const handleDeleteFeeding = (index) => {
    const updatedFeedings = feedings.filter((_, i) => i !== index);
    setFeedings(updatedFeedings);
  };

  // Update an existing feeding entry
  const handleUpdateFeeding = () => {
    if (!feedingTime || !feedingAmount || feedingAmount <= 0) {
      setError("Please fill out all fields with valid values.");
      return;
    }
    const updatedFeedings = [...feedings];
    updatedFeedings[currentIndex] = {
      time: feedingTime,
      amount: feedingAmount,
    };
    setFeedings(updatedFeedings);
    setFeedingTime('');
    setFeedingAmount('');
    setIsEditing(false);
    setCurrentIndex(null);
    setError('');
  };

  // Set the form for editing
  const handleEditFeeding = (index) => {
    setFeedingTime(feedings[index].time);
    setFeedingAmount(feedings[index].amount);
    setIsEditing(true);
    setCurrentIndex(index);
    setError('');
  };

  return (
    <div className="feeding-container">
      <h2 className="heading">Feeding Management</h2>

      {/* Display error message if any */}
      {error && <p className="error-message">{error}</p>}

      {/* Feeding form */}
      <div className="form-container">
        <input
          type="time"
          value={feedingTime}
          onChange={(e) => setFeedingTime(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Amount (ml)"
          value={feedingAmount}
          onChange={(e) => setFeedingAmount(e.target.value)}
          className="input-field"
        />
        <button
          onClick={isEditing ? handleUpdateFeeding : handleAddFeeding}
          className={`action-button ${isEditing ? 'update-button' : ''}`}
        >
          {isEditing ? 'Update Feeding' : 'Add Feeding'}
        </button>
      </div>

      {/* Feedings list */}
      <h3 className="list-heading">Feedings List</h3>
      <ul className="feedings-list">
        {feedings.map((feeding, index) => (
          <li key={index} className="feeding-item">
            <strong>{feeding.time}</strong> - {feeding.amount} ml
            <button
              onClick={() => handleDeleteFeeding(index)}
              className="delete-button"
            >
              Delete
            </button>
            <button
              onClick={() => handleEditFeeding(index)}
              className="edit-button"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .feeding-container {
          padding: 20px;
          background-color: #fafafa;
          border-radius: 10px;
        }

        .heading {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .error-message {
          color: red;
          margin-bottom: 20px;
        }

        .form-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }

        .input-field {
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          width: 100%;
        }

        .action-button {
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .update-button {
          background-color: #2196F3;
        }

        .list-heading {
          font-size: 1.5rem;
          font-weight: semi-bold;
          margin-bottom: 10px;
        }

        .feedings-list {
          list-style-type: none;
          padding: 0;
        }

        .feeding-item {
          background-color: #f1f1f1;
          padding: 15px;
          margin-bottom: 10px;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .delete-button {
          color: #ff1744;
          background: none;
          border: none;
          cursor: pointer;
        }

        .edit-button {
          color: #1e88e5;
          background: none;
          border: none;
          cursor: pointer;
        }

        .delete-button:hover,
        .edit-button:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Feeding;
