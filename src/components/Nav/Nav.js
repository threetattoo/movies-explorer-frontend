import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/signup" className="link nav__link nav__register-link">
                        Регистрация
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/signup" className="link nav__link nav__login-link">
                        Войти
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
