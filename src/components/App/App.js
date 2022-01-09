import React, { useCallback } from 'react';
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
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from  '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import {
    BEATFILM_DOMAIN_URL,
} from '../../utils/constants';

function App() {
    const [ currentUser, setCurrentUser ] = React.useState({});
    const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
    const [ serverErrorMessage, setServerErrorMessage ] = React.useState('');
    const [ isSuccessMessageShowing, setIsSuccessMessageShowing ] = React.useState(false);
    const [ isPreloaderShowing, setIsPreloaderShowing ] = React.useState(false);
    const [ downloadedMovies, setDownloadedMovies ] = React.useState([]);
    const [ isMoviesShort, setIsMoviesShort ] = React.useState(false);
    const [ savedMovies, setSavedMovies ] = React.useState([]);

    const history = useHistory();
    const location = useLocation();

    function handleRegister({ email, password, name }) {
        setIsPreloaderShowing(true);
        mainApi.register({ email: email.toLowerCase(), password, name })
            .then(() => {
                handleLogin({ email, password });
            })
            .catch((err) => {
                setServerErrorMessage(err.message);
            })
            .finally(() => {
                setIsSuccessMessageShowing(true);
                setIsPreloaderShowing(false);
            })
    }

    function handleLogin({ email, password }) {
        setIsPreloaderShowing(true);
        mainApi.login({ email, password })
            .then(() => {
                setIsLoggedIn(true);
                getUserInfo();
            })
            .catch((err) => {
                setServerErrorMessage(err.message);
            })
            .finally(() => {
                setIsPreloaderShowing(false);
            })
    }

    function handleLogout() {
        setIsPreloaderShowing(true);
        mainApi.logout()
            .then(() => {
                setIsLoggedIn(false);
                history.push('/');
                localStorage.removeItem('localMovies');
                localStorage.removeItem('lastQuery');
                localStorage.removeItem('isShortStatus');
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
                const { name, email, _id } = res;
                setCurrentUser({ name, email, _id });
                setIsLoggedIn(true);
                (location.pathname === '/signin' || location.pathname === '/signup') ? history.push('/movies') : history.push(location.pathname);
            })
            .catch((err) => {
                console.log('Не удалось получить данные пользователя');
                handleError(err);
            })
    }


    function handleError(err) {
        if (err.status === 401) {
            setIsLoggedIn(false);
            localStorage.clear();
        }
    }

    const isMoviesDownloaded = useCallback(() => {
        const localMovies = localStorage.getItem('localMovies');
        if (localMovies) {
            setDownloadedMovies(JSON.parse(localMovies));
        } else {
            handleGetMovies();
        }
    }, []);
     
    function handleGetMovies() {
        moviesApi.getMovies()
            .then((moviesList) => {
                const formattedMovies = moviesList.map((movie) => {
                    return {
                        country : movie.country,
                        director : movie.director,
                        duration : movie.duration,
                        year : movie.year,
                        description : movie.description,
                        image: BEATFILM_DOMAIN_URL + movie.image.url,
                        trailer: movie.trailerLink,
                        thumbnail: BEATFILM_DOMAIN_URL + movie.image.formats.thumbnail.url,
                        movieId: movie.id,
                        nameRU : movie.nameRU,
                        nameEN : movie.nameEN,
                    }
                });
            localStorage.setItem('localMovies', JSON.stringify(formattedMovies));
            })
            .catch(() => {
                console.log('Ошибка API');
            })
            .finally(() => {
                const localMovies = localStorage.getItem('localMovies');
                setDownloadedMovies(JSON.parse(localMovies));
            })
    }
    
    function handleSearchByQuery(data, searchQuery) {
        const searchResult = data.filter((movie) => {
            return movie.nameRU.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());
        });
        if (!isMoviesShort) {
            return searchResult;
        } else {
            return filterShortMovies(searchResult);
        }
    }

    function filterShortMovies(movies) {
        return movies.filter((movie) => {
            return movie.duration <= 40;
        });
    }

    function handleGetSavedMovies() {
        setIsPreloaderShowing(true);
        mainApi.getMovies()
            .then((movies) => {
                setSavedMovies(movies.slice().reverse().filter((item) => item.owner === currentUser._id));
            })
            .catch((err) => {
                console.log('Ошибка при загрузке сохраненных фильмов.');
                handleError(err);
            })
            .finally(() => {
                setIsPreloaderShowing(false);
            })
    }
    
    function handleSaveMovie(movie) {
        mainApi.saveMovie(movie)
            .then((savedMovie) => {
                setSavedMovies([savedMovie, ...savedMovies]);
            })
            .catch((err) => {
                console.log('Ошибка при сохранении фильма.');
                handleError(err);
            })
    }
    
    function handleDeleteMovie(movie) {
        const savedMovie = savedMovies.find((item) => item.movieId === movie.movieId);
        mainApi.deleteMovie(savedMovie)
            .then(() => {
                const tempSavedMovies = savedMovies.filter((item) => item._id !== savedMovie._id);
                setSavedMovies(tempSavedMovies);
            })
            .catch((err) => {
                console.log('Ошибка при удалении фильма.');
                handleError(err);
            })
    }

    function checkIsMovieSaved(movie) {
        const isSaved = savedMovies.some((item) => (item.movieId === movie.movieId));   
        return isSaved;
    };

    function handleLikeMovie(movie) {
        const isSaved = checkIsMovieSaved(movie);
        if (!isSaved) {
            handleSaveMovie(movie);
        } else {
            handleDeleteMovie(movie);
        }
    };
    
    React.useEffect(() => {
        if (isLoggedIn) {
            handleGetSavedMovies();
            isMoviesDownloaded();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);
    
    React.useEffect(() => {
            getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Switch>
                    <Route exact path="/">
                        <Header
                            isLoggedIn={isLoggedIn}
                        />
                        <Main />
                        <Footer />
                    </Route>
                    <ProtectedRoute 
                        path="/movies"
                        component={Movies}
                        isLoggedIn={isLoggedIn}
                        handleSearchByQuery={handleSearchByQuery}
                        downloadedMovies={downloadedMovies}
                        isMoviesShort={isMoviesShort}
                        setIsMoviesShort={setIsMoviesShort}
                        filterShortMovies={filterShortMovies}
                        handleSaveMovie={handleSaveMovie}
                        handleDeleteMovie={handleDeleteMovie}
                        handleLikeMovie={handleLikeMovie}
                        savedMovies={savedMovies}
                        checkIsMovieSaved={checkIsMovieSaved}
                        isPreloaderShowing={isPreloaderShowing}
                        setIsPreloaderShowing={setIsPreloaderShowing}
                    />
                    <ProtectedRoute
                        path="/saved-movies"
                        component={SavedMovies}
                        isLoggedIn={isLoggedIn}
                        handleSearchByQuery={handleSearchByQuery}
                        downloadedMovies={downloadedMovies}
                        isMoviesShort={isMoviesShort}
                        setIsMoviesShort={setIsMoviesShort}
                        filterShortMovies={filterShortMovies}
                        handleSaveMovie={handleSaveMovie}
                        handleDeleteMovie={handleDeleteMovie}
                        handleLikeMovie={handleLikeMovie}
                        savedMovies={savedMovies}
                        checkIsMovieSaved={checkIsMovieSaved}
                        isPreloaderShowing={isPreloaderShowing}
                        setIsPreloaderShowing={setIsPreloaderShowing}
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
                            serverErrorMessage={serverErrorMessage}
                            onSubmit={handleLogin}
                            isPreloaderShowing={isPreloaderShowing}                       
                        />
                    </Route>
                    <Route path="/signup">
                        <Register
                            serverErrorMessage={serverErrorMessage}
                            onSubmit={handleRegister}
                            isPreloaderShowing={isPreloaderShowing}
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