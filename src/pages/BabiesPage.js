import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BabiesPage = () => {
  const [babies, setBabies] = useState([]);
  const [error, setError] = useState('');

  // Fetch babies data
  useEffect(() => {
    const fetchBabiesData = async () => {
      try {
        const response = await axios.get('https://tinysteps.onrender.com/api/getAllBabies');
        setBabies(response.data);
      } catch (err) {
        setError('Failed to fetch babies data.');
        console.error(err);
      }
    };

    fetchBabiesData();
  }, []);

  return (
    <div className="container">
      <h2>Babies</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {babies.map((baby) => (
            <tr key={baby.id}>
              <td>{baby.name}</td>
              <td>{baby.dateOfBirth}</td>
              <td>{baby.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BabiesPage;
