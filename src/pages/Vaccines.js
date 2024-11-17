// src/components/Vaccines.js
import React, { useState, useEffect } from 'react';
import { fetchVaccinations, addVaccine, deleteVaccine, updateVaccine } from '../services/vaccination';

function Vaccines() {
  const [vaccines, setVaccines] = useState([]);
  const [vaccineName, setVaccineName] = useState('');
  const [vaccineAge, setVaccineAge] = useState('');
  const [vaccineContents, setVaccineContents] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch vaccines data from the API when the component is mounted
  useEffect(() => {
    const getVaccines = async () => {
      setLoading(true);
      try {
        const data = await fetchVaccinations();
        setVaccines(data);
      } catch (error) {
        alert("Error fetching vaccines");
      } finally {
        setLoading(false);
      }
    };
    getVaccines();
  }, []);

  const handleAddVaccine = async () => {
    if (!vaccineName || !vaccineAge || !vaccineContents) {
      alert("Please fill out all fields");
      return;
    }

    const newVaccine = {
      name: vaccineName,
      age: vaccineAge,
      contents: vaccineContents,
    };

    try {
      setLoading(true);
      const addedVaccine = await addVaccine(newVaccine);
      setVaccines([...vaccines, addedVaccine]);
      setVaccineName('');
      setVaccineAge('');
      setVaccineContents('');
    } catch (error) {
      alert("Error adding vaccine");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteVaccine = async (id) => {
    try {
      setLoading(true);
      await deleteVaccine(id);
      setVaccines(vaccines.filter(vaccine => vaccine.id !== id));
    } catch (error) {
      alert("Error deleting vaccine");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateVaccine = async (id) => {
    const updatedVaccine = {
      name: vaccineName || vaccines.find(vaccine => vaccine.id === id).name,
      age: vaccineAge || vaccines.find(vaccine => vaccine.id === id).age,
      contents: vaccineContents || vaccines.find(vaccine => vaccine.id === id).contents,
    };

    try {
      setLoading(true);
      await updateVaccine(id, updatedVaccine);
      setVaccines(vaccines.map(vaccine =>
        vaccine.id === id ? { ...vaccine, ...updatedVaccine } : vaccine
      ));
      setVaccineName('');
      setVaccineAge('');
      setVaccineContents('');
    } catch (error) {
      alert("Error updating vaccine");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Vaccination Management</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Vaccine Name"
          value={vaccineName}
          onChange={(e) => setVaccineName(e.target.value)}
          className="border p-2 mb-2"
        />
        <input
          type="number"
          placeholder="Age (months)"
          value={vaccineAge}
          onChange={(e) => setVaccineAge(e.target.value)}
          className="border p-2 mb-2 ml-2"
        />
        <input
          type="text"
          placeholder="Vaccine Contents"
          value={vaccineContents}
          onChange={(e) => setVaccineContents(e.target.value)}
          className="border p-2 mb-2 ml-2"
        />
        <button
          onClick={handleAddVaccine}
          className="bg-teal-500 text-white py-2 px-4 rounded ml-2"
        >
          Add Vaccine
        </button>
      </div>

      {loading ? (
        <div className="text-center my-4">Loading...</div>
      ) : (
        <>
          <h3 className="text-xl font-semibold mb-2">Vaccines List</h3>
          <ul>
            {vaccines.map((vaccine) => (
              <li key={vaccine.id} className="mb-2">
                <strong>{vaccine.name}</strong> - {vaccine.age} months - {vaccine.contents}
                <button
                  onClick={() => handleDeleteVaccine(vaccine.id)}
                  className="text-red-500 ml-4"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdateVaccine(vaccine.id)}
                  className="text-blue-500 ml-2"
                >
                  Update
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Vaccines;
