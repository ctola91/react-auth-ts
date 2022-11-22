import { useState } from "react";

import './Header.css';

const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            <div className="title"><h1>Title</h1></div>
            <div className="menu">Menu</div>
        </header>
    );
};

export default Header;
