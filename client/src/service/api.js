import axios from 'axios';

const API_URI = 'http://localhost:8000';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
};

export const getFile = async (fileId, password = '') => {
    try {
        const response = await axios.post(`${API_URI}/file/${fileId}`, { password });
        return response.data;
    } catch (error) {
        console.error("Error while fetching the file: ", error.message);
        return null;
    }
};  