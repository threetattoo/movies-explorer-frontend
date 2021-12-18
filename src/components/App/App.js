import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from  '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';

function App() {
    const [ currentUser, setCurrentUser ] = React.useState({});
    const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);

    return (
        <CurrentUserContext.Provider value={ currentUser }>
            <div className="page">
                <Switch>
                    <Route exact path="/">
                        <Header
                            type=""
                        />
                        <Main />
                        <Footer />
                    </Route>
                    <ProtectedRoute 
                        path="/movies"
                        component={Movies}
                    />
                    <ProtectedRoute
                        path="/saved-movies"
                        component={SavedMovies}
                    />
                    <ProtectedRoute
                        path="/profile" 
                        component={Profile}
                    />
                    <Route path="/signin">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Register />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>

            </div>
        </CurrentUserContext.Provider>
    );
}
    
export default App;