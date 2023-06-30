import axios from 'axios';

const API_BASE_URL = 'https://api.sheety.co/0704b338c342d7675872488f2adb2571'; // Replace with your API base URL

export const fetchUsers = async() => {
  try{
    const response = await axios.get(`${API_BASE_URL}/users/users`);
    return response.data;
  }catch(error){
    throw new Error(error.response.data.message);
  }
}
export const createItem = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/users`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateItem = async (itemId, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/users/${itemId}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteItem = async (itemId) => {
  try {
    await axios.delete(`${API_BASE_URL}/users/users//${itemId}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
