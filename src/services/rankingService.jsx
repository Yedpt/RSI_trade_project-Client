// src/services/rankingService.jsx
import axios from 'axios';

// Asumiendo que tu API está corriendo en localhost:4000
const API_URL = 'http://localhost:4000/api';

// Obtener todos los rankings
export const getRankings = async () => {
    try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`${API_URL}/rankings`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener rankings:', error);
        throw new Error(error.response?.data?.message || 'Error al cargar los rankings');
    }
};

// Obtener un ranking específico
export const getRankingById = async (id) => {
    try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`${API_URL}/rankings/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener ranking específico:', error);
        throw new Error(error.response?.data?.message || 'Error al cargar el ranking');
    }
};

// Actualizar un ranking
export const updateRanking = async (id, data) => {
    try {
        const token = localStorage.getItem('authToken');
        const response = await axios.put(`${API_URL}/rankings/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al actualizar ranking:', error);
        throw new Error(error.response?.data?.message || 'Error al actualizar el ranking');
    }
};

// Crear un nuevo ranking
export const createRanking = async (data) => {
    try {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(`${API_URL}/rankings`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al crear ranking:', error);
        throw new Error(error.response?.data?.message || 'Error al crear el ranking');
    }
};