import React, { useContext, useMemo, useState } from 'react';
// import { useAuth } from '../hooks/useAuth';
import { ReactElement, useEffect } from 'react';
import { User } from '../types/User';
import AuthService from '../services/AuthService';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

type ProviderProps = {
    children: ReactElement
}

type AuthContent = {
    user?: User,
    token?: string,
    loading: boolean,
    error?: any;
    signIn: (data: { email: string, password: string }) => void,
    signUp: () => void,
    signOut: () => void
};

const AuthContext = React.createContext<AuthContent>({} as AuthContent);

const AuthProvider = ({ children }: ProviderProps) => {
    // const auth = useAuth();
    const navigate = useNavigate();

    const [localUser, setLocalUser] = useLocalStorage('user', '');
    const [localToken, setLocalToken] = useLocalStorage('token', '');
    const [user, setUser] = useState<User | undefined>(localUser);
    const [token, setToken] = useState<string | undefined>(localToken);
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

    const signIn = async (data: { email: string, password: string }) => {
        try {
            setLoading(true);
            let result = await AuthService.doLogin(data.email, data.password);
            setLoading(false);
            setUser(result?.user);
            setToken(result?.token);
            setLocalToken(result?.token);
            setLocalUser(result?.user);
            navigate('/dashboard');
        } catch (e) {
            console.log(e);
        }
    }

    const signUp = () => {

    }

    const signOut = () => {
        setUser(undefined);
        setToken(undefined);
        setLocalToken('');
        setLocalUser('');
    }

    const auth = useMemo(() => ({
        user,
        token,
        loading,
        error,
        signIn,
        signUp,
        signOut
    }), [user, loading, error]);

    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}


const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider }