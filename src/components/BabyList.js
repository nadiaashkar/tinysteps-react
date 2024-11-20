import React, { useState, useEffect } from 'react';

// Dummy data for babies
const initialBabies = [
  { id: 1, name: 'Baby 1' },
  { id: 2, name: 'Baby 2' },
  { id: 3, name: 'Baby 3' },
];

const BabyList = () => {
  // State to manage the list of babies
  const [babies, setBabies] = useState(initialBabies);

  // Example of side effects (e.g., fetching data)
  useEffect(() => {
    // In a real-world scenario, you would fetch data from an API here
    console.log('Fetching baby data...');
    // Simulate a delay and update the babies list (optional)
    setTimeout(() => {
      // Update the babies state if needed
      setBabies([
        ...babies,
        { id: 4, name: 'Baby 4' },
        { id: 5, name: 'Baby 5' },
      ]);
    }, 2000);
  }, [babies]);

  // Styling for the list and items
  const listStyle = {
    listStyleType: 'none',
    paddingLeft: 0,
  };

  const itemStyle = {
    padding: '8px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div>
      <h2>All Babies</h2>
      <ul style={listStyle}>
        {babies.map((baby) => (
          <li key={baby.id} style={itemStyle}>
            {baby.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BabyList;
