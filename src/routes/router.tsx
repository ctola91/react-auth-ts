import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import About from "../components/About/About";
import Login from "../components/auth/Login";
import Home from '../components/Home/Home';
import { AuthContext } from '../contexts/AuthContext';
import { useState } from 'react';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]);

const AppRoutes = () => {
    const [token, setToken] = useState(null);
    return (
    <AuthContext.Provider value={token}>
        <App>
            <RouterProvider router={router} />
        </App>
    </AuthContext.Provider>
)}

export default AppRoutes;