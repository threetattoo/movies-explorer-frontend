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
import Preloader from '../Preloader/Preloader';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from  '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';

function App() {
    const [ currentUser, setCurrentUser ] = React.useState({});
    const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
    const [ serverErrorMessage, setServerErrorMessage ] = React.useState('');
    const [ isSuccessMessageShowing, setIsSuccessMessageShowing ] = React.useState(false);
    const [ isPreloaderShowing, setIsPreloaderShowing ] = React.useState(false);
    const history = useHistory();
    const location = useLocation();

    React.useEffect(() => {
        getUserInfo();
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleRegister({ email, password, name }) {
        mainApi.register({ email: email.toLowerCase(), password, name })
            .then(() => {
                handleLogin({ email, password });
            })
            .catch((err) => {
                setServerErrorMessage(err.message);
            })
            .finally(() => {
                setIsSuccessMessageShowing(true);
            })
    }

    function handleLogin({ email, password }) {
        setIsPreloaderShowing(true);
        mainApi.login({ email, password })
            .then(() => {
                setIsLoggedIn(true);
                getUserInfo();
                console.log(isLoggedIn);
            })
            .catch((err) => {
                setServerErrorMessage(err.message);
            })
            .finally(() => {
                setIsPreloaderShowing(false);
            })
    }

    function handleLogout() {
            mainApi.logout()
            .then(() => {
                setIsLoggedIn(false);
                history.push('/');
            })
            .catch((err) => {
                handleError(err);
            })
            .finally(() => {
                setIsPreloaderShowing(false);
            })
    }

    function handleUpdateUser({ name, email }) {
        setIsPreloaderShowing(true);
        mainApi.setNewUserInfo({ name, email })
          .then(() => {
            setCurrentUser({ name, email });
          })
          .catch((err) => {
            handleError(err);
          })
          .finally(() => {
            setIsSuccessMessageShowing(true);
            setIsPreloaderShowing(false);
        })
    }

    function getUserInfo() {
        mainApi.getUserInfo()
            .then((res) => {
                const { name, email } = res;
                setCurrentUser({ name, email });
                setIsLoggedIn(true);
                (location.pathname === '/signin' || location.pathname === '/signup') ? history.push('/movies') : history.push(location.pathname);
            })
            .catch((err) => {
                handleError(err);
            })
    }

    function handleError(err) {
        if (err.status === 401) {
            setIsLoggedIn(false);
            localStorage.clear();
        }
    }
    
    return (
        <CurrentUserContext.Provider value={currentUser}>
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
                        isLoggedIn={isLoggedIn}
                    />
                    <ProtectedRoute
                        path="/saved-movies"
                        component={SavedMovies}
                        isLoggedIn={isLoggedIn}
                    />
                    <ProtectedRoute
                        path="/profile" 
                        component={Profile}
                        isLoggedIn={isLoggedIn}
                        onLogout={handleLogout}
                        onUpdate={handleUpdateUser}
                        isSuccessMessageShowing={isSuccessMessageShowing}
                        setIsSuccessMessageShowing={setIsSuccessMessageShowing}
                    />
                    <Route path="/signin">
                        <Login
                            onSubmit={handleLogin}                        
                        />
                    </Route>
                    <Route path="/signup">
                        <Register
                            onSubmit={handleRegister}
                        />
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