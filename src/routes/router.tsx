import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import About from "../components/About/About";
import Home from '../components/Home/Home';
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
]);

const AppRoutes = () => (
    <>
        <App>
            <RouterProvider router={router} />
        </App>
    </>
)

export default AppRoutes;