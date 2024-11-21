import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParentsPage from './pages/ParentsPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import VaccinationPage from './pages/VaccinationPage';
import Babypage from './pages/BabyPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<ParentsPage />} />
        <Route path="/vaccination" element={<VaccinationPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/baby" element={<Babypage />} /> {/* Correct route */}
      </Routes>
    </Router>
  );
}

export default App;
