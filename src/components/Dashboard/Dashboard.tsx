import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';

const Dashboard = () => {
    const token = useContext(AuthContext);
    return (
        <>
            <h2>Dashboard</h2>
            <div>Authenticated as {token}</div>
        </>
    );
}

export default Dashboard;
