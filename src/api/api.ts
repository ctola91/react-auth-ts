import axios from 'axios';

const URL = import.meta.env.VITE_API_URL || '';

const api = axios.create({
    baseURL: `${URL}`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
    }
});

export const isError = (error: any) => axios.isAxiosError(error);

export default api;