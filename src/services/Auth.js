// src/services/auth.js
import axios from 'axios';

// Set up base URL
const api = axios.create({
  baseURL: 'https://api.yourserver.com',  // Replace with your API server
  headers: {
    'Content-Type': 'application/json',
  },
});

// Login function
export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    const { token } = response.data;

    // Save token in local storage
    localStorage.setItem('authToken', token);

    return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

// Logout function
export const logout = () => {
  localStorage.removeItem('authToken');
};

// Interceptor to attach token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

