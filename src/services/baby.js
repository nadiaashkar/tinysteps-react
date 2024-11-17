// src/services/baby.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.yourserver.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all baby profiles
export const fetchBabies = async () => {
  try {
    const response = await api.get('/babies');
    return response.data;
  } catch (error) {
    console.error("Error fetching babies:", error);
    throw error;
  }
};

// Add a new baby profile
export const addBaby = async (babyData) => {
  try {
    const response = await api.post('/babies', babyData);
    return response.data;
  } catch (error) {
    console.error("Error adding baby:", error);
    throw error;
  }
};

// Update a baby's details
export const updateBaby = async (babyId, updatedData) => {
  try {
    const response = await api.put(`/babies/${babyId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating baby:", error);
    throw error;
  }
};

// Delete a baby profile
export const deleteBaby = async (babyId) => {
  try {
    const response = await api.delete(`/babies/${babyId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting baby:", error);
    throw error;
  }
};
