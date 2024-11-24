
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
    withCredentials: true // Para enviar cookies con las solicitudes
});

export const registerUser = (data) => api.post('/users/register', data);
export const loginUser = (data) => api.post('/users/login', data);
export const logoutUser = () => api.post('/users/logout');
export const getProfile = () => api.get('/users/profile');
export const getComments = () => api.get('/comments');
export const createComment = (data) => api.post('/comments', data);
export const submitContactForm = (data) => api.post('/contact', data);