import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';

type Props = {}

const Dashboard = (props: Props) => {
    const token = useContext(AuthContext);
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard;
