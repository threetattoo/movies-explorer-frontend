import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

function App() {
    return (
        <div className="page">
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Main />
                    <Footer />
                </Route>
                <Route exact path="/movies">
                    <Movies />
                </Route>
                <Route exact path="/saved-movies">
                    <SavedMovies />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/signin">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Register />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>

        </div>
    );
}
    
export default App;