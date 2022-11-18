import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import App from "../App";
import About from "../components/About/About";
import Login from "../components/auth/Login";
import Home from '../components/Home/Home';
import { AuthProvider } from "../contexts/AuthContext";
import RequireAuth from '../components/auth/RequireAuth';
import Dashboard from '../components/Dashboard/Dashboard';

// const location = useLocation();
// const pathName = location.state?.from || '';
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
        path: 'login',
        element: <Login />

    },
    { path: '/dashboard', element: <RequireAuth><Dashboard /></RequireAuth> }
]);

const AppRoutes = () => (
    <AuthProvider>
        <App>
            <RouterProvider router={router} />
        </App>
    </AuthProvider>
)

export default AppRoutes;