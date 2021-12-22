import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header( { isLoggedIn, } ) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={`header ${!isLoggedIn ? "header__authorized" : ""}`}>
            <Logo />
            <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    );
}

export default Header;
