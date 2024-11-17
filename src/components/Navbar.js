import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import Vaccines from './pages/Vaccines';
import Feeding from './pages/Feeding';
import Sleep from './pages/Sleep';
import Admin from './pages/Admin';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/vaccines" element={<Vaccines />} />
          <Route path="/feeding" element={<Feeding />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
