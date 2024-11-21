import { api } from './http';

const babyService = {
    insertBaby,
    getAllBabies,
    updateBaby,
};

// Function to update a baby
async function updateBaby(id, updatedData) {
    try {
        const res = await api.put(`/parent/updateBabyData/${id}`, updatedData); // Adjust endpoint as needed
        return res.data;
    } catch (error) {
        console.error("Error updating baby:", error);
        throw error;
    }
}

// Function to get all babies
async function getAllBabies() {
    try {
        const res = await api.get('/parent/getAllBabies'); // Adjust endpoint as needed
        return res.data;
    } catch (error) {
        console.error("Error fetching babies:", error);
        throw error;
    }
}

// Function to insert a new baby
async function insertBaby(newBaby) {
    try {
        const res = await api.post('/parent/insertBabyData', newBaby); // Adjust endpoint as needed
        return res.data;
    } catch (error) {
        console.error("Error inserting baby:", error);
        throw error;
    }
}

export default babyService;
