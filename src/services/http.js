// src/utils/http.js
import axios from 'axios';

// Set up a base URL for all API requests
export const api = axios.create({
  baseURL: 'http://localhost:9876/api', // Replace with your actual API server URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to handle tokens (if needed)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Get token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// API Request Functions

export const loginUser = async (email, password) => {
  const res = await api.post('/parent/login',  {email, password})
  console.log(res)
}

// Fetch user data
export const fetchUserData = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Fetch vaccination data
export const fetchVaccinations = async () => {
  try {
    const response = await api.get('/vaccinations');
    return response.data;
  } catch (error) {
    console.error('Error fetching vaccinations:', error);
    throw error;
  }
};

// Add a new vaccine record
export const addVaccine = async (vaccineData) => {
  try {
    const response = await api.post('/vaccinations', vaccineData);
    return response.data;
  } catch (error) {
    console.error('Error adding vaccine:', error);
    throw error;
  }
};

// Update vaccine details
export const updateVaccine = async (vaccineId, updatedData) => {
  try {
    const response = await api.put(`/vaccinations/${vaccineId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating vaccine:', error);
    throw error;
  }
};

// Delete a vaccine record
export const deleteVaccine = async (vaccineId) => {
  try {
    const response = await api.delete(`/vaccinations/${vaccineId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting vaccine:', error);
    throw error;
  }
};

// Fetch feeding data
export const fetchFeedingData = async () => {
  try {
    const response = await api.get('/feeding');
    return response.data;
  } catch (error) {
    console.error('Error fetching feeding data:', error);
    throw error;
  }
};

// Add new feeding entry
export const addFeedingEntry = async (feedingData) => {
  try {
    const response = await api.post('/feeding', feedingData);
    return response.data;
  } catch (error) {
    console.error('Error adding feeding entry:', error);
    throw error;
  }
};

// Additional API calls can follow the same pattern...
