import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeedPage from './pages/FeedPage';
import SleepPage from './pages/SleepPage';
import HomePage from './pages/HomePage';
import BabiesPage from './pages/BabiesPage';
import ParentsPage from './pages/ParentsPage';
import VaccinationPage from './pages/VaccinationPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Babies" element={<BabiesPage />} />
        <Route path="/Parents" element={<ParentsPage />} />
        <Route path="/vaccination" element={<VaccinationPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/sleep" element={<SleepPage />} />
      </Routes>
    </Router>
  );
}

export default App;
