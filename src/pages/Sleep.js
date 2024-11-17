// src/components/Sleep.js

import React, { useState } from 'react';

function Sleep() {
  const [sleeps, setSleeps] = useState([]);
  const [sleepStartTime, setSleepStartTime] = useState('');
  const [sleepEndTime, setSleepEndTime] = useState('');

  const handleAddSleep = () => {
    if (!sleepStartTime || !sleepEndTime) {
      alert("Please fill out all fields");
      return;
    }
    const newSleep = {
      startTime: sleepStartTime,
      endTime: sleepEndTime,
    };
    setSleeps([...sleeps, newSleep]);
    setSleepStartTime('');
    setSleepEndTime('');
  };

  const handleDeleteSleep = (index) => {
    const updatedSleeps = sleeps.filter((_, i) => i !== index);
    setSleeps(updatedSleeps);
  };

  const handleUpdateSleep = (index) => {
    const updatedSleeps = [...sleeps];
    updatedSleeps[index] = {
      startTime: sleepStartTime || sleeps[index].startTime,
      endTime: sleepEndTime || sleeps[index].endTime,
    };
    setSleeps(updatedSleeps);
    setSleepStartTime('');
    setSleepEndTime('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sleep Management</h2>

      <div className="mb-4">
        <input
          type="time"
          value={sleepStartTime}
          onChange={(e) => setSleepStartTime(e.target.value)}
          className="border p-2 mb-2"
        />
        <input
          type="time"
          value={sleepEndTime}
          onChange={(e) => setSleepEndTime(e.target.value)}
          className="border p-2 mb-2 ml-2"
        />
        <button
          onClick={handleAddSleep}
          className="bg-teal-500 text-white py-2 px-4 rounded ml-2"
        >
          Add Sleep
        </button>
      </div>

      <h3 className="text-xl font-semibold mb-2">Sleep List</h3>
      <ul>
        {sleeps.map((sleep, index) => (
          <li key={index} className="mb-2">
            <strong>{sleep.startTime}</strong> to <strong>{sleep.endTime}</strong>
            <button
              onClick={() => handleDeleteSleep(index)}
              className="text-red-500 ml-4"
            >
              Delete
            </button>
            <button
              onClick={() => handleUpdateSleep(index)}
              className="text-blue-500 ml-2"
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sleep;
