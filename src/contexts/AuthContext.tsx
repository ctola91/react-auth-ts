import React from 'react';

type AuthContent = {
    token: string,
    setToken: (t: string) => void
} | null;

export const AuthContext = React.createContext<AuthContent>(null);
