import React, { useEffect, useState } from 'react';
import vaccineService from './../services/vaccines.service';
import babyService from './../services/babies.service'; // Assuming you have a service for fetching baby data

function VaccinationPage() {
  const [vaccinations, setVaccinations] = useState([]);
  const [vaccineName, setVaccineName] = useState('');
  const [vaccinationDate, setVaccinationDate] = useState('');
  const [vaccineStatus, setVaccineStatus] = useState('Pending');
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [babies, setBabies] = useState([]); // State to hold the list of babies
  const [selectedBabyId, setSelectedBabyId] = useState(''); // State to hold the selected baby ID

  // Fetch the list of babies when the component mounts
  useEffect(() => {
    const fetchBabies = async () => {
      try {
        const babyData = await babyService.getAllBabies(); // Assuming this fetches all babies
        setBabies(babyData);
      } catch (error) {
        console.error('Error fetching babies:', error);
      }
    };
    fetchBabies();
  }, []);

  const handleAddVaccination = () => {
    if (!selectedBabyId || !vaccineName || !vaccinationDate) {
      alert('Please fill out all fields and select a baby.');
      return;
    }

    const newVaccination = {
      babyId: selectedBabyId,
      vaccineName,
      vaccinationDate,
      vaccineStatus,
    };

    setVaccinations([...vaccinations, newVaccination]);
    setSelectedBabyId('');
    setVaccineName('');
    setVaccinationDate('');
    setVaccineStatus('Pending');
    // vaccineService.insertVaccine(newVaccination); // Uncomment this when API is ready
  };

  const handleDeleteVaccination = (index) => {
    const updatedVaccinations = vaccinations.filter((_, i) => i !== index);
    setVaccinations(updatedVaccinations);
  };

  const handleUpdateVaccination = (index) => {
    const updatedVaccinations = [...vaccinations];
    updatedVaccinations[index] = {
      babyId: selectedBabyId,
      vaccineName,
      vaccinationDate,
      vaccineStatus,
    };
    setVaccinations(updatedVaccinations);
    setIsEditing(false);
    setEditingIndex(null);
    setSelectedBabyId('');
    setVaccineName('');
    setVaccinationDate('');
    setVaccineStatus('Pending');
  };

  const handleEditVaccination = (index) => {
    const vaccination = vaccinations[index];
    setSelectedBabyId(vaccination.babyId);
    setVaccineName(vaccination.vaccineName);
    setVaccinationDate(vaccination.vaccinationDate);
    setVaccineStatus(vaccination.vaccineStatus);
    setIsEditing(true);
    setEditingIndex(index);
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://myhv.lgt.nhs.uk/wp-content/uploads/2018/07/vaccinations.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundRepeat:'no-repeat'
      }}
    >
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-6 bg-opacity-80">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Vaccination Management</h2>

        <div className="mb-6">
          {/* Baby Selector */}
          <select
            value={selectedBabyId}
            onChange={(e) => setSelectedBabyId(e.target.value)}
            className="border p-2 mb-4 rounded-lg w-full sm:w-80"
          >
            <option value="">Select Baby</option>
            {babies.map((baby) => (
              <option key={baby.id} value={baby.id}>
                {baby.name} (ID: {baby.id})
              </option>
            ))}
          </select>

          {/* Vaccine Name */}
          <input
            type="text"
            value={vaccineName}
            onChange={(e) => setVaccineName(e.target.value)}
            placeholder="Vaccine Name"
            className="border p-2 mb-4 rounded-lg w-full sm:w-80"
          />

          {/* Vaccination Date */}
          <input
            type="date"
            value={vaccinationDate}
            onChange={(e) => setVaccinationDate(e.target.value)}
            className="border p-2 mb-4 rounded-lg w-full sm:w-80"
          />

          {/* Vaccine Status */}
          <select
            value={vaccineStatus}
            onChange={(e) => setVaccineStatus(e.target.value)}
            className="border p-2 mb-4 rounded-lg w-full sm:w-80"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Missed">Missed</option>
          </select>

          {/* Add or Update Button */}
          <button
            onClick={isEditing ? () => handleUpdateVaccination(editingIndex) : handleAddVaccination}
            className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-700"
          >
            {isEditing ? 'Update Vaccination' : 'Add Vaccination'}
          </button>
        </div>

        <h3 className="text-xl font-semibold text-teal-600 mb-4">Vaccination List</h3>
        <ul className="space-y-4">
          {vaccinations.map((vaccination, index) => (
            <li key={index} className="flex items-center justify-between">
              <div>
                <p>
                  <strong>Baby ID:</strong> {vaccination.babyId} -{' '}
                  <strong>Vaccine:</strong> {vaccination.vaccineName} -{' '}
                  <strong>Date:</strong> {vaccination.vaccinationDate} -{' '}
                  <span
                    className={`font-semibold ${
                      vaccination.vaccineStatus === 'Completed'
                        ? 'text-green-500'
                        : vaccination.vaccineStatus === 'Pending'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}
                  >
                    {vaccination.vaccineStatus}
                  </span>
                </p>
              </div>
              <div>
                <button
                  onClick={() => handleEditVaccination(index)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteVaccination(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VaccinationPage;
