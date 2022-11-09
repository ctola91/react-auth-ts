import { User } from './../types/User';
import { useState } from 'react';
import AuthService from '../services/AuthService';
import { LoginResponse } from '../types/LoginResponse';
export const useAuth = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState<User | undefined>(undefined);
    const [token, setToken] = useState<string | undefined>(undefined);

    const signIn = async (data: { email: string, password: string }) => {
        try {
            let result = await AuthService.doLogin(data.email, data.password);
            setUser(result?.user);
            setToken(result?.token);

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