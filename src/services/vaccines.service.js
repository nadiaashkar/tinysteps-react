import { api } from './http';

const vaccineService = {
    insertVaccine,
    getAllVaccines,
    updateVaccine,
};

// Function to update a vaccine
async function updateVaccine(id, updatedData) {
    try {
        const res = await api.put(`/parent/updateVaccineData/${id}`, updatedData);
        return res.data;
    } catch (error) {
        console.error("Error updating vaccine:", error);
        throw error;
    }
}

// Function to get all vaccines
async function getAllVaccines() {
    try {
        const res = await api.get('/parent/showVaccineData');
        return res.data;
    } catch (error) {
        console.error("Error fetching vaccines:", error);
        throw error;
    }
}

// Function to insert a new vaccine
async function insertVaccine(newVaccine) {
    try {
        const res = await api.post('/parent/insertVaccineData', newVaccine);
        return res.data;
    } catch (error) {
        console.error("Error inserting vaccine:", error);
        throw error;
    }
}

export default vaccineService;
