import { User } from './../types/User';
import API, { isError } from '../api/api';
import { LoginResponse } from '../types/LoginResponse';

const AUTH_URL = '/auth';

const doLogin = async (email: string, password: string) => {
    try {
        const { data } = await API.post<LoginResponse>(`${AUTH_URL}/login`, { email, password });
        return data;
    } catch (error: any) {
        if (isError(error)) {
            console.log(error.message);
        }
    }
}

export default { doLogin }