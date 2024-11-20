import React, { useState } from 'react';

const UsersPage = () => {
  // State for managing users
  const [users, setUsers] = useState([
    { id: 1, first: 'Alice', last: 'Johnson', email: 'alice@example.com' },
    { id: 2, first: 'Bob', last: 'Smith', email: 'bob@example.com' },
  ]);

  // State for new user form
  const [newUser, setNewUser] = useState({ first: '', last: '', email: '' });

  // State for updating a user
  const [editUser, setEditUser] = useState(null);

  // Add a new user
  const handleAddUser = () => {
    if (!newUser.first || !newUser.last || !newUser.email) {
      alert('Please fill in all fields.');
      return;
    }
    setUsers([...users, { id: Date.now(), ...newUser }]);
    setNewUser({ first: '', last: '', email: '' });
  };

  // Delete a user
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Start editing a user
  const handleEditUser = (user) => {
    setEditUser(user);
  };

  // Save updated user details
  const handleSaveUser = () => {
    if (!editUser.first || !editUser.last || !editUser.email) {
      alert('Please fill in all fields.');
      return;
    }
    setUsers(users.map((user) => (user.id === editUser.id ? editUser : user)));
    setEditUser(null);
  };

  return (
    <div className="users-page">
      <h1>User Management</h1>

      {/* Add New User */}
      <div className="add-user">
        <h2>Add New User</h2>
        <input
          type="text"
          placeholder="First Name"
          value={newUser.first}
          onChange={(e) => setNewUser({ ...newUser, first: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newUser.last}
          onChange={(e) => setNewUser({ ...newUser, last: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* User List */}
      <div className="user-list">
        <h2>Existing Users</h2>
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
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.first}</td>
                <td>{user.last}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User */}
      {editUser && (
        <div className="edit-user">
          <h2>Edit User</h2>
          <input
            type="text"
            placeholder="First Name"
            value={editUser.first}
            onChange={(e) => setEditUser({ ...editUser, first: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={editUser.last}
            onChange={(e) => setEditUser({ ...editUser, last: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={editUser.email}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
          />
          <button onClick={handleSaveUser}>Save</button>
          <button onClick={() => setEditUser(null)}>Cancel</button>
        </div>
      )}

      {/* Inline CSS */}
      <style>
        {`
          .users-page {
            padding: 20px;
            font-family: Arial, sans-serif;
          }
          h1, h2 {
            color: #333;
          }
          .add-user, .edit-user {
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

export default UsersPage;
