import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

type RequireAuthProps = {
    children: ReactElement
}

const RequireAuth = ({ children }: RequireAuthProps) => {
    const auth = useAuthContext();

    if (!auth?.user) {
        return <Navigate to="/login" />
    }
    return children;
}

export default RequireAuth;
