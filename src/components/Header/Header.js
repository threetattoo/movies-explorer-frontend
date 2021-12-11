import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header( { type, } ) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={`header ${
                type === "auth" ? "header__authorized" : ""
            }`}>
            <Logo />
            <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    );
}

export default Header;
