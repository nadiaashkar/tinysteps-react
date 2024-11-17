// src/App.js
// In App.js
import AdminHome from './components/AdminHome';  // Correct path to the AdminHome component
import Feeding from './components/Feeding';  // Correct path to the Feeding component
import Vaccines from './components/Vaccines';  // Correct path to the Vaccines component
import Sleep from './components/Sleep';  // Correct path to the Sleep component
import Users from './components/Users';  // Correct path to the Users component
import Navbar from './components/Navbar';  // Correct path to the Navbar component


function App() {
  return (
    <Router>
      <div>
        {/* Navbar displayed on all pages */}
        <Navbar />
        <div className="container mx-auto mt-4">
          <Routes>
            {/* Home and Admin routes */}
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminHome />} />

            {/* Admin management routes */}
            <Route path="/vaccines" element={<Vaccines />} />
            <Route path="/feeding" element={<Feeding />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
