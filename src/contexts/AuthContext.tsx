import React, { useContext } from 'react';
import { useAuth } from '../hooks/useAuth';
import { ReactElement } from 'react';
import { User } from '../types/User';

type ProviderProps = {
    children: ReactElement
}

type AuthContent = {
    user: User | undefined,
    signIn: (data: {email: string, password: string}) => void,
    signUp: () => void,
    signOut: () => void
} | null;

const AuthContext = React.createContext<AuthContent>(null);

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: ProviderProps) => {
    const auth = useAuth();

    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}

export { useAuthContext, AuthProvider }