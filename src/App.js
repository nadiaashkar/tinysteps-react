import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import UsersPage from './pages/UsersPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import FeedingPage from './pages/FeedingPage';
import SleepingPage from './pages/SleepingPage';
import VaccinationPage from './pages/VaccinationPage';

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/feeding" element={<FeedingPage />} />
        <Route path="/sleeping" element={<SleepingPage />} />
        <Route path="/vaccination" element={<VaccinationPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
