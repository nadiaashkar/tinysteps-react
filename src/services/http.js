// src/utils/http.js
import axios from 'axios';

// Set up a base URL for all API requests
export const api = axios.create({
  baseURL: 'https://tinysteps.onrender.com/api', // Replace with your actual API server URL
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

export const loginAdmin = async (email, password) => {
  const res = await api.post('/admin/login',  {email, password})
  console.log(res)
}

// Fetch user data
export const fetchBabiesData = async (idParent) => {
  try {
    const response = await api.post('/getParentChildren', { idParent });
    return response.data;
  } catch (error) {
    console.error('Error fetching babies data:', error);
    throw error;
  }
};

export const addBabyData = async (babyData) => {
  try {
    const response = await api.post(`/AddBaby`,babyData);
    return response.data;
  } catch (error) {
    console.error('Error fetching Babies data:', error);
    throw error;
  }
};
export const updateBabyData = async (babyData) => {
  try {
    const response = await api.put(`/updateBaby`,babyData);
    return response.data;
  } catch (error) {
    console.error('Error fetching Babies data:', error);
    throw error;
  }
};
export const deleteBabyData = async (babyData) => {
  try {
    const response = await api.delete(`/deleteBaby`,babyData);
    return response.data;
  } catch (error) {
    console.error('Error fetching Babies data:', error);
    throw error;
  }
};

// Fetch vaccination data
export const fetchVaccinations = async () => {
  try {
    const response = await api.get('/showVaccineData');
    return response.data;
  } catch (error) {
    console.error('Error fetching vaccinations:', error);
    throw error;
  }
};

// Add a new vaccine record
export const addVaccine = async (vaccineData) => {
  try {
    const response = await api.post('/insertVaccineData', vaccineData);
    return response.data;
  } catch (error) {
    console.error('Error adding vaccine:', error);
    throw error;
  }
};

// Update vaccine details
export const updateVaccine = async (updatedData) => {
  try {
    const response = await api.put(`/updateVaccineData`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating vaccine:', error);
    throw error;
  }
};

// Delete a vaccine record
export const deleteVaccine = async (vaccineData) => {
  try {
    const response = await api.delete(`/deleteVaccineData`, vaccineData);
    return response.data;
  } catch (error) {
    console.error('Error deleting vaccine:', error);
    throw error;
  }
};

// Fetch feeding data
export const fetchFeedingData = async () => {
  try {
    const response = await api.get('/ShowFeedData');
    return response.data;
  } catch (error) {
    console.error('Error fetching feeding data:', error);
    throw error;
  }
};

// Add new feeding entry
export const addFeedingEntry = async (feedingData) => {
  try {
    const response = await api.post('/insertFeedData', feedingData);
    return response.data;
  } catch (error) {
    console.error('Error adding feeding entry:', error);
    throw error;
  }
};

export const updateFeedingEntry = async (feedingData) => {
  try {
    const response = await api.put('/updateFeedData', feedingData);
    return response.data;
  } catch (error) {
    console.error('Error adding feeding entry:', error);
    throw error;
  }
};
export const deleteFeedingEntry = async (feedingData) => {
  try {
    const response = await api.delete('/deleteFeedData', feedingData);
    return response.data;
  } catch (error) {
    console.error('Error adding feeding entry:', error);
    throw error;
  }
};



export const fetchSleep = async () => {
  try {
    const response = await api.git('/showSleepData');
    return response.data;
  } catch (error) {
    console.error('Error adding sleeping entry:', error);
    throw error;
  }
};

export const deletesleep = async (sleepData) => {
  try {
    const response = await api.git('/deleteSleepData', sleepData);
    return response.data;
  } catch (error) {
    console.error('Error adding sleeping entry:', error);
    throw error;
  }
};

export const updatesleep = async (sleepData) => {
  try {
    const response = await api.put('/updateSleepData', sleepData);
    return response.data;
  } catch (error) {
    console.error('Error adding sleeping entry:', error);
    throw error;
  }
};
export const addsleep = async (sleepData) => {
  try {
    const response = await api.post('/addSleepData', sleepData);
    return response.data;
  } catch (error) {
    console.error('Error adding sleeping entry:', error);
    throw error;
  }
};


 //console.log(await addVaccine({ idBaby:211585633 ,name:'nadia', date:'08-2021', description:'done' })) 




// Additional API calls can follow the same pattern...
