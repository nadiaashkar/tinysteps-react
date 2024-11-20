// src/components/VaccinationPage.js

import React, { useState } from 'react';

function VaccinationPage() {
  const [vaccinations, setVaccinations] = useState([]);
  const [vaccineName, setVaccineName] = useState('');
  const [vaccinationDate, setVaccinationDate] = useState('');
  const [vaccineStatus, setVaccineStatus] = useState('Pending');
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddVaccination = () => {
    if (!vaccineName || !vaccinationDate) {
      alert('Please fill out all fields');
      return;
    }
    const newVaccination = {
      vaccineName,
      vaccinationDate,
      vaccineStatus,
    };
    setVaccinations([...vaccinations, newVaccination]);
    setVaccineName('');
    setVaccinationDate('');
    setVaccineStatus('Pending');
  };

  const handleDeleteVaccination = (index) => {
    const updatedVaccinations = vaccinations.filter((_, i) => i !== index);
    setVaccinations(updatedVaccinations);
  };

  const handleUpdateVaccination = (index) => {
    const updatedVaccinations = [...vaccinations];
    updatedVaccinations[index] = {
      vaccineName,
      vaccinationDate,
      vaccineStatus,
    };
    setVaccinations(updatedVaccinations);
    setIsEditing(false);
    setEditingIndex(null);
    setVaccineName('');
    setVaccinationDate('');
    setVaccineStatus('Pending');
  };

  const handleEditVaccination = (index) => {
    const vaccination = vaccinations[index];
    setVaccineName(vaccination.vaccineName);
    setVaccinationDate(vaccination.vaccinationDate);
    setVaccineStatus(vaccination.vaccineStatus);
    setIsEditing(true);
    setEditingIndex(index);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-6">
      <h2 className="text-3xl font-bold text-teal-600 mb-6">Vaccination Management</h2>

      <div className="mb-6">
        <input
          type="text"
          value={vaccineName}
          onChange={(e) => setVaccineName(e.target.value)}
          placeholder="Vaccine Name"
          className="border p-2 mb-4 rounded-lg w-full sm:w-80"
        />
        <input
          type="date"
          value={vaccinationDate}
          onChange={(e) => setVaccinationDate(e.target.value)}
          className="border p-2 mb-4 rounded-lg w-full sm:w-80"
        />
        <select
          value={vaccineStatus}
          onChange={(e) => setVaccineStatus(e.target.value)}
          className="border p-2 mb-4 rounded-lg w-full sm:w-80"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Missed">Missed</option>
        </select>
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
                <strong>{vaccination.vaccineName}</strong> - {vaccination.vaccinationDate} -{' '}
                <span className={`font-semibold ${vaccination.vaccineStatus === 'Completed' ? 'text-green-500' : vaccination.vaccineStatus === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
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
  );
}

export default VaccinationPage;
