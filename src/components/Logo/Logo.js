import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Logo.css';

function Logo() {
    return (
        <Switch>
            <Route exact path="/">
                <a href="/" className="logo">
                    <div className="logo__main link">
                    </div>
                </a>
            </Route>
            <Route path="/(movies|saved-movies)">
                <a href="/" className="logo">
                    <div className="logo__main logo__main_movies link">
                    </div>
                </a>
            </Route>
            <Route path="/profile">
                <a href="/" className="logo">
                    <div className="logo__main logo__main_profile link">
                    </div>
                </a>
            </Route>
            <Route path="/(signin|signup)">
                <a href="/" className="logo">
                    <div className="logo__main logo__main_smile link">
                    </div>
                </a>
            </Route>
        </Switch>
    );
}

export default Logo;

