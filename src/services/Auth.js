import {loginAdmin, loginUser} from './http'

// Login function
export const login = async (email, password, isAdmin) => {
  try {
    // const response = await api.post('/login', { email, password });
    // const { token } = response.data;
    let token ; 
    if(isAdmin) {
      token = await loginAdmin(email, password, isAdmin);
    } else {
      token = await loginUser(email, password);
    }


    // Save token in local storage
    localStorage.setItem('authToken', token);
  } catch (error) {
    if(error.status === 500) {
      console.log("Something is wrong with the server. status 500")
    }
  }
};

// Logout function
export const logout = () => {
  localStorage.removeItem('authToken');
};

const day = 1000* 60 *24;

setInterval(logout, day);