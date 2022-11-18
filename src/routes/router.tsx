import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useLocation } from 'react-router-dom';
import App from "../App";
import About from "../components/About/About";
import Login from "../components/auth/Login";
import Home from '../components/Home/Home';
import { AuthProvider } from "../contexts/AuthContext";
import RequireAuth from '../components/auth/RequireAuth';
import Dashboard from '../components/Dashboard/Dashboard';

const AppRoutes = () => (
    <BrowserRouter>
        <AuthProvider>
            <App>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
                </Routes>
            </App>
        </AuthProvider>
    </BrowserRouter>
)

export default AppRoutes;