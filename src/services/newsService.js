import axios from 'axios';

const BASE_URL = 'http://localhost:5173/news';;

// Create
export const createItem = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/items`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || 'Error creating item');
  }
};

// Read
export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/items`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || 'Error fetching items');
  }
};

export const getNewById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/items/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || 'Error fetching item');
  }
};

// Update
export const updateNew = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/items/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || 'Error updating item');
  }
};

// Delete
export const deleteNew = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/items/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || 'Error deleting item');
  }
};
