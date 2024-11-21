import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VaccinationPage = () => {
  const [vaccines, setVaccines] = useState([]);
  const [error, setError] = useState('');

  // Fetch vaccination data
  useEffect(() => {
    const fetchVaccinationData = async () => {
      try {
        const response = await axios.get('https://tinysteps.onrender.com/api/getAllVaccines');
        setVaccines(response.data);
      } catch (err) {
        setError('Failed to fetch vaccination data.');
        console.error(err);
      }
    };

    fetchVaccinationData();
  }, []);

  return (
    <div className="container">
      <h2>Vaccination Details</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Vaccine Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {vaccines.map((vaccine) => (
            <tr key={vaccine.id}>
              <td>{vaccine.name}</td>
              <td>{vaccine.date}</td>
              <td>{vaccine.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VaccinationPage;
