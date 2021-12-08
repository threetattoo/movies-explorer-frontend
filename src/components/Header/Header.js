import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavAuth from '../NavAuth/NavAuth';
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
            {type === "auth" ? <NavAuth isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> : <Nav />}
        </header>
    );
}

export default Header;
