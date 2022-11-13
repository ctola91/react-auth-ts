import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import About from "../components/About/About";
import Login from "../components/auth/Login";
import Home from '../components/Home/Home';
import { AuthProvider } from "../contexts/AuthContext";
import RequireAuth from '../components/auth/RequireAuth';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RequireAuth><Home /></RequireAuth>
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: 'login',
        element: <Login />

    }
]);

const AppRoutes = () => (
    <AuthProvider>
        <App>
            <RouterProvider router={router} />
        </App>
    </AuthProvider>
)

export default AppRoutes;