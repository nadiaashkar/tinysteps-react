/*/import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedPage = () => {
  const [feedData, setFeedData] = useState([]);
  const [error, setError] = useState('');

  // Fetch feed data
  useEffect(() => {
    const fetchFeedData = async () => {
      try {
        const response = await axios.get('https://tinysteps.onrender.com/api/getAllFeeds');
        setFeedData(response.data);
      } catch (err) {
        setError('Failed to fetch feed data.');
        console.error(err);
      }
    };

    fetchFeedData();
  }, []);

  return (
    <div className="container">
      <h2>Feeding Details</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {feedData.map((feed) => (
            <tr key={feed.id}>
              <td>{feed.time}</td>
              <td>{feed.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedPage;/*/
