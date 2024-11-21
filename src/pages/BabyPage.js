import React, { useState } from 'react';

function Babypage() {
  const [babyName, setBabyName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [babyStatus, setBabyStatus] = useState('Healthy');
  const [babies, setBabies] = useState([]);

  const handleAddBaby = () => {
    if (!babyName || !dateOfBirth) {
      alert('Please fill out all fields');
      return;
    }

    const newBaby = { id: Date.now(), babyName, dateOfBirth, babyStatus };
    setBabies([...babies, newBaby]);

    console.log('Baby added:', newBaby);

    setBabyName('');
    setDateOfBirth('');
    setBabyStatus('Healthy');
  };

  const handleDeleteBaby = (id) => {
    const updatedBabies = babies.filter((baby) => baby.id !== id);
    setBabies(updatedBabies);
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.theconversation.com/files/528474/original/file-20230526-23-qh7azn.jpg?ixlib=rb-1.1.0&rect=301%2C760%2C3838%2C2282&q=45&auto=format&w=754&fit=clip')`,
        backgroundSize: 'center',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        color: 'white',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Baby Information</h2>

      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '10px',
          padding: '20px',
          maxWidth: '400px',
          margin: '0 auto 20px',
        }}
      >
        <input
          type="text"
          value={babyName}
          onChange={(e) => setBabyName(e.target.value)}
          placeholder="Baby Name"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <select
          value={babyStatus}
          onChange={(e) => setBabyStatus(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        >
          <option value="Healthy">Healthy</option>
          <option value="Sick">Sick</option>
          <option value="Under Observation">Under Observation</option>
        </select>
        <button
          onClick={handleAddBaby}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Add Baby
        </button>
      </div>

      {/* Babies List */}
      <ul
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          listStyle: 'none',
          padding: '0',
        }}
      >
        {babies.map((baby) => (
          <li
            key={baby.id}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div>
              <p>
                <strong>{baby.babyName}</strong> - {baby.dateOfBirth} -{' '}
                <span style={{ color: babyStatus === 'Healthy' ? 'green' : 'red' }}>
                  {baby.babyStatus}
                </span>
              </p>
            </div>
            <button
              onClick={() => handleDeleteBaby(baby.id)}
              style={{
                backgroundColor: '#F44336',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Babypage;
