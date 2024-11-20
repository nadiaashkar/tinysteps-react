import React, { useEffect, useState } from 'react';

const BabyPage = () => {
  // Define state
  const [babies, setBabies] = useState([]);

  // Fetch or initialize babies data
  useEffect(() => {
    // Example: set babies manually or from an API
    setBabies([{ id: 1, name: 'Baby A' }, { id: 2, name: 'Baby B' }]);
  }, []);

  return (
    <div>
      <h1>Babies List</h1>
      <ul>
        {babies.map((baby) => (
          <li key={baby.id}>{baby.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BabyPage;
