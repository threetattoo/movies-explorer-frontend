import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Navigation.css';
import accIcon from '../../images/account_icon.svg';

function Navigation(props) {
    return(
        <Switch>
            <Route exact path="/">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/signup" className="link nav__link nav__register-link">
                                Регистрация
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/signin" className="link nav__link nav__login-link">
                                Войти
                            </a>
                        </li>
                    </ul>
                </nav>
            </Route>
            <Route path="/(movies|saved-movies|profile)">
                <nav className="nav-auth">
                    <div className="nav-auth__burger-button" onClick={props.toggleMenu}></div>
                    <div className={`${props.isMenuOpen ? 'nav-auth__overlay_visible' : ''} nav-auth__overlay`}></div>
                    <div className={`${props.isMenuOpen ? 'nav-auth__menu_mobile' : ''} nav-auth__menu`}>
                        <ul className="nav-auth__list">
                            <li className="nav-auth__item nav-auth__item_main-page">
                                <a href="/" className="link nav-auth__link nav-auth__link_mobile">
                                    Главная
                                </a>
                            </li>
                            <li className="nav-auth__item">
                                <a href="/movies" className="link nav-auth__link nav-auth__link_mobile">
                                    Фильмы
                                </a>
                            </li>
                            <li className="nav-auth__item">
                                <a href="/saved-movies" className="link nav-auth__link nav-auth__link_mobile">
                                    Сохранённые фильмы
                                </a>
                            </li>
                        </ul>
                        <a href="/profile" className="nav-auth__link nav-auth__link-account">
                            <span className="nav-auth__link-ancor">Аккаунт</span>
                            <div className="nav-auth__icon-wrapper">
                                <img src={accIcon} alt="Иконка аккаунта" />
                            </div>
                        </a>
                        <div className="nav-auth__close-button" onClick={props.toggleMenu}></div>
                </div>
                </nav>
            </Route>
        </Switch>
    );
}

export default Navigation;
