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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Feeding Management</h2>

      {/* Display error message if any */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Feeding form */}
      <div className="mb-4">
        <input
          type="time"
          value={feedingTime}
          onChange={(e) => setFeedingTime(e.target.value)}
          className="border p-2 mb-2"
        />
        <input
          type="number"
          placeholder="Amount (ml)"
          value={feedingAmount}
          onChange={(e) => setFeedingAmount(e.target.value)}
          className="border p-2 mb-2 ml-2"
        />
        <button
          onClick={isEditing ? handleUpdateFeeding : handleAddFeeding}
          className={`bg-teal-500 text-white py-2 px-4 rounded ml-2 ${isEditing ? 'bg-blue-500' : ''}`}
        >
          {isEditing ? 'Update Feeding' : 'Add Feeding'}
        </button>
      </div>

      {/* Feedings list */}
      <h3 className="text-xl font-semibold mb-2">Feedings List</h3>
      <ul>
        {feedings.map((feeding, index) => (
          <li key={index} className="mb-2">
            <strong>{feeding.time}</strong> - {feeding.amount} ml
            <button
              onClick={() => handleDeleteFeeding(index)}
              className="text-red-500 ml-4"
            >
              Delete
            </button>
            <button
              onClick={() => handleEditFeeding(index)}
              className="text-blue-500 ml-2"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feeding;
