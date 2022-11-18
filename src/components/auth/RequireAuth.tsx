import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

type RequireAuthProps = {
    children: ReactElement
}

const RequireAuth = ({ children }: RequireAuthProps) => {
    const auth = useAuthContext();
    const location = useLocation();
    
    console.log(auth);
    if (!auth?.user) {
        return <Navigate to="/login" state={{ from: location.pathname }} />
    }
    return children;
}

export default RequireAuth;
