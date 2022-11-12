import { User } from './../types/User';
import { useState } from 'react';
import AuthService from '../services/AuthService';
import { useLocalStorage } from './useLocalStorage';
export const useAuth = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState<User | undefined>(undefined);
    const [token, setToken] = useState<string | undefined>(undefined);
    const [storage, setStorage] = useLocalStorage('token', '');

    const signIn = async (data: { email: string, password: string }) => {
        try {
            let result = await AuthService.doLogin(data.email, data.password);
            setUser(result?.user);
            setToken(result?.token);
            setStorage(result?.token);
            return user;
        } catch (e) {
            console.log(e);
        }
    }

    const signUp = () => {

    }

    const signOut = () => {
        setUser(undefined);
    }

    return { user, signIn, signUp, signOut }
}