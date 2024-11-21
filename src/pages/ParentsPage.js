import React, { useState } from 'react';

const ParentsPage = () => {
  // State for the list of parents
  const [parents, setParents] = useState([]);

  // State for new parent form
  const [newParent, setNewParent] = useState({ first: '', last: '', email: '' });

  // State for updating a parent
  const [editParent, setEditParent] = useState(null);

  // Add a new parent
  const handleAddParent = () => {
    if (!newParent.first || !newParent.last || !newParent.email) {
      alert('Please fill in all fields.');
      return;
    }
    setParents([...parents, { id: Date.now(), ...newParent }]);
    setNewParent({ first: '', last: '', email: '' });
  };

  // Delete a parent
  const handleDeleteParent = (id) => {
    setParents(parents.filter((parent) => parent.id !== id));
  };

  // Start editing a parent
  const handleEditParent = (parent) => {
    setEditParent(parent);
  };

  // Save updated parent details
  const handleSaveParent = () => {
    if (!editParent.first || !editParent.last || !editParent.email) {
      alert('Please fill in all fields.');
      return;
    }
    setParents(parents.map((parent) => (parent.id === editParent.id ? editParent : parent)));
    setEditParent(null);
  };

  return (
    <div className="parents-page">
      <h1>Parent Management</h1>

      {/* Add New Parent */}
      <div className="add-parent">
        <h2>Add New Parent</h2>
        <input
          type="text"
          placeholder="First Name"
          value={newParent.first}
          onChange={(e) => setNewParent({ ...newParent, first: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newParent.last}
          onChange={(e) => setNewParent({ ...newParent, last: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newParent.email}
          onChange={(e) => setNewParent({ ...newParent, email: e.target.value })}
        />
        <button onClick={handleAddParent}>Add Parent</button>
      </div>

      {/* Parent List */}
      <div className="parent-list">
        <h2>Existing Parents</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parents.map((parent) => (
              <tr key={parent.id}>
                <td>{parent.first}</td>
                <td>{parent.last}</td>
                <td>{parent.email}</td>
                <td>
                  <button onClick={() => handleEditParent(parent)}>Edit</button>
                  <button onClick={() => handleDeleteParent(parent.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Parent */}
      {editParent && (
        <div className="edit-parent">
          <h2>Edit Parent</h2>
          <input
            type="text"
            placeholder="First Name"
            value={editParent.first}
            onChange={(e) => setEditParent({ ...editParent, first: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={editParent.last}
            onChange={(e) => setEditParent({ ...editParent, last: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={editParent.email}
            onChange={(e) => setEditParent({ ...editParent, email: e.target.value })}
          />
          <button onClick={handleSaveParent}>Save</button>
          <button onClick={() => setEditParent(null)}>Cancel</button>
        </div>
      )}

      {/* Inline CSS */}
      <style>
        {`
          .parents-page {
            padding: 20px;
            font-family: Arial, sans-serif;
          }
          h1, h2 {
            color: #333;
          }
          .add-parent, .edit-parent {
            margin-bottom: 20px;
          }
          input {
            margin: 5px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          button {
            margin: 5px;
            padding: 10px 15px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: #45a049;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f4f4f4;
          }
        `}
      </style>
    </div>
  );
};

export default ParentsPage;
