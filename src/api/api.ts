import axios from 'axios';

const URL = 'http://172.31.133.99:8000/api'

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