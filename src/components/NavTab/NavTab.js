import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <nav className="promo__navtab">
            <ul className="promo__navtab-list">
                <li className="promo__navtab-item">
                    <a href="/#about-project" className="link promo__navtab-link">О проекте</a>
                </li>
                <li className="promo__navtab-item">
                    <a href="/#techs" className="link promo__navtab-link">Технологии</a>
                </li>
                <li className="promo__navtab-item">
                    <a href="/#about-me" className="link promo__navtab-link">Студент</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;