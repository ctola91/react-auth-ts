import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

import './Header.css';
import { Link, NavLink } from "react-router-dom";

const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <header>
                <div className="title">
                    <Link to="/"><h1>Title</h1></Link>
                </div>
                <div className="menu">
                    <button onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <div className={isOpen ? "header-menu active" : "header-menu"} >
                    <ul>
                        <li className="header-menu-item"><Link to="/">Home</Link></li>
                        <li className="header-menu-item"><Link to="about">About</Link></li>
                        <li className="header-menu-item"><Link to="signup">Signup</Link></li>
                        <li className="header-menu-item"><Link to="login">Login</Link></li>
                    </ul>
                </div>
            </header>

        </>
    );
};

export default Header;
