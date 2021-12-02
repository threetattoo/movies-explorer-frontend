import React from 'react';
import './Logo.css';
import logo from '../../images/logo.svg';

function Logo() {
    return (
        <a href="/" className="Logo">
            <img src={logo} alt="Лого" className="header__logo"/>
        </a>
    );
}

export default Logo;

