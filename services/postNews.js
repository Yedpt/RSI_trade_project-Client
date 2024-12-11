import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/news';

export const createNews = async (newsData) => {
  try {
    const response = await axios.post(BASE_URL, newsData);
    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

export const getAllNews = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

export const updateNews = async (id, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

export const deleteNews = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};
