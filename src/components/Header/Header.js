import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ isLoggedIn, }) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <Switch>
            <Route exact path="/">
                <header className="header">
                    <Logo />
                    <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isLoggedIn={isLoggedIn} />
                </header>
            </Route>
            <Route path="/(movies|saved-movies|profile)">
                <header className="header header__authorized">
                    <Logo />
                    <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isLoggedIn={isLoggedIn} />
                </header> 
            </Route>
        </Switch>
    );
}

export default Header;
