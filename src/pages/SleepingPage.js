import React, { useState } from 'react';

const SleepingPage = () => {
  const [sleepRecords, setSleepRecords] = useState([
    { id: 1, babyName: 'Alice', start: '10:00 PM', duration: '8 hours' },
    { id: 2, babyName: 'Bob', start: '9:30 PM', duration: '7.5 hours' },
  ]);

  const [newRecord, setNewRecord] = useState({ babyName: '', start: '', duration: '' });
  const [editRecord, setEditRecord] = useState(null);

  // Add a new sleep record
  const handleAddRecord = () => {
    if (!newRecord.babyName || !newRecord.start || !newRecord.duration) {
      alert('Please fill in all fields.');
      return;
    }

    setSleepRecords([...sleepRecords, { ...newRecord, id: Date.now() }]);
    setNewRecord({ babyName: '', start: '', duration: '' });
  };

  // Delete a sleep record
  const handleDeleteRecord = (id) => {
    setSleepRecords(sleepRecords.filter((record) => record.id !== id));
  };

  // Edit a sleep record (pre-fill the edit form)
  const handleEditRecord = (record) => {
    setEditRecord(record);
  };

  // Save the updated sleep record
  const handleSaveRecord = () => {
    if (!editRecord.babyName || !editRecord.start || !editRecord.duration) {
      alert('Please fill in all fields.');
      return;
    }

    setSleepRecords(
      sleepRecords.map((record) =>
        record.id === editRecord.id ? editRecord : record
      )
    );
    setEditRecord(null);
  };

  return (
    <div className="sleeping-page">
      <header className="header">
        <h1>Sleeping Tracker</h1>
        <p>Monitor your baby's sleep schedule for healthy growth and development.</p>
      </header>

      {/* Add Sleep Record Section */}
      <section className="add-record">
        <h2>{editRecord ? 'Update Sleep Record' : 'Add Sleep Record'}</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Baby Name"
            value={editRecord ? editRecord.babyName : newRecord.babyName}
            onChange={(e) =>
              editRecord
                ? setEditRecord({ ...editRecord, babyName: e.target.value })
                : setNewRecord({ ...newRecord, babyName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="time"
            placeholder="Start Time"
            value={editRecord ? editRecord.start : newRecord.start}
            onChange={(e) =>
              editRecord
                ? setEditRecord({ ...editRecord, start: e.target.value })
                : setNewRecord({ ...newRecord, start: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Duration (e.g., 8 hours)"
            value={editRecord ? editRecord.duration : newRecord.duration}
            onChange={(e) =>
              editRecord
                ? setEditRecord({ ...editRecord, duration: e.target.value })
                : setNewRecord({ ...newRecord, duration: e.target.value })
            }
          />
        </div>
        {editRecord ? (
          <button className="save-btn" onClick={handleSaveRecord}>
            Save Record
          </button>
        ) : (
          <button className="add-btn" onClick={handleAddRecord}>
            Add Record
          </button>
        )}
      </section>

      {/* Display Sleep Records */}
      <section className="record-list">
        <h2>Sleep Records</h2>
        {sleepRecords.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Baby Name</th>
                <th>Start Time</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sleepRecords.map((record) => (
                <tr key={record.id}>
                  <td>{record.babyName}</td>
                  <td>{record.start}</td>
                  <td>{record.duration}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditRecord(record)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteRecord(record.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No sleep records yet.</p>
        )}
      </section>

      {/* Inline CSS */}
      <style>
        {`
          .sleeping-page {
            font-family: 'Arial', sans-serif;
            padding: 20px;
            text-align: center;
            background-image: url('https://images.agoramedia.com/wte3.0/gcms/Can-Babies-Sleep-Too-Much-722x406.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh; /* Full height of the viewport */
          }

          .header {
            margin-bottom: 30px;
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
            padding: 20px;
            border-radius: 10px;
            color: #333;
          }

          .header h1 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .header p {
            font-size: 1.2rem;
          }

          .add-record, .record-list {
            background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white */
            padding: 20px;
            margin: 20px auto;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
          }

          .add-record h2, .record-list h2 {
            color: #4caf50;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 15px;
            text-align: left;
          }

          .form-group input {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .form-group input:focus {
            border-color: #4caf50;
            outline: none;
          }

          .add-btn, .save-btn {
            background-color: #2196F3; /* Blue */
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .add-btn:hover, .save-btn:hover {
            background-color: #1976D2; /* Darker blue */
          }

          .edit-btn {
            background-color: #ff9800; /* Orange */
            color: white;
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .edit-btn:hover {
            background-color: #f57c00; /* Darker orange */
          }

          .delete-btn {
            background-color: #f44336; /* Red */
            color: white;
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .delete-btn:hover {
            background-color: #d32f2f; /* Darker red */
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          table th, table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
          }

          table th {
            background-color: #4caf50;
            color: white;
          }

          table td {
            background-color: rgba(255, 255, 255, 0.8);
          }
        `}
      </style>
    </div>
  );
};

export default SleepingPage;
