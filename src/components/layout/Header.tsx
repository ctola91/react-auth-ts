import { useState } from "react";

const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            <div className="logo">Logo</div>
            <div className="menu">Menu</div>
        </header>
    );
};

export default Header;
