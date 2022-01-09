import React, {useState, useEffect, useCallback} from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from "../Preloader/Preloader";
import {
    DESKTOP_AMOUNT_OF_CARDS,
    MOBILE_AMOUNT_OF_CARDS,
    HERE_WILL_BE_YOUR_SAVED_MOVIES,
    HERE_WILL_BE_YOUR_MOVIES,
    SHORT_MOVIES_NOT_FOUND,
    NO_MOVIES_WITH_LAST_QUERY,
    PAGE_WIDTH,
} from '../../utils/constants';

function MoviesCardList(
    {
        searchQuery,
        isMoviesShort,
        filterShortMovies,
        findedMovies,
        savedMovies,
        handleSaveMovie,
        handleDeleteMovie,
        checkIsMovieSaved,
        handleLikeMovie,
        isPreloaderShowing,
        setIsPreloaderShowing,
    }
) {
    const [ numberOfCardsToShow, setNumberOfCardsToShow ] = useState(0);
    const [ renderMovies, setRenderMovies ] = useState([]);
    const [ moviesErrorMessage, setMoviesErrorMessage ] = useState('');
    const location = useLocation();
    
    const numberOfInitialCards = () => {
        if (window.innerWidth > PAGE_WIDTH) {
            setNumberOfCardsToShow(DESKTOP_AMOUNT_OF_CARDS);
        } else if (window.innerWidth <= PAGE_WIDTH) {
            setNumberOfCardsToShow(MOBILE_AMOUNT_OF_CARDS);
        } else {
            return;
        }
    };

    useEffect(() => {
        numberOfInitialCards();
        window.addEventListener('resize', () => {
            setTimeout(numberOfInitialCards, 2000);
        });
           
        return () => {
            window.removeEventListener('resize', numberOfInitialCards);
        };
    }, []);
    
    const setTypeOfMovies = useCallback(() => {
        (isMoviesShort) ? setRenderMovies(filterShortMovies(findedMovies)) : setRenderMovies(findedMovies);
    }, [filterShortMovies, findedMovies, isMoviesShort]);

    useEffect(() => {
        setTypeOfMovies();
    }, [setTypeOfMovies]);

    function handleClickMore() {
        if (window.innerWidth >= PAGE_WIDTH) {
            setNumberOfCardsToShow(numberOfCardsToShow + DESKTOP_AMOUNT_OF_CARDS);
        } else {
            setNumberOfCardsToShow(numberOfCardsToShow + MOBILE_AMOUNT_OF_CARDS);
        }
    }
    
    useEffect(() => {
        const lastQuery = localStorage.getItem('lastQuery');
        if (location.pathname === '/saved-movies' && renderMovies.length === 0) {
            setMoviesErrorMessage(HERE_WILL_BE_YOUR_SAVED_MOVIES);
        } else if (!lastQuery && renderMovies.length === 0) {
            setMoviesErrorMessage(HERE_WILL_BE_YOUR_MOVIES);
        } else if (lastQuery && isMoviesShort && renderMovies.length === 0) {
            setMoviesErrorMessage(SHORT_MOVIES_NOT_FOUND);
        } else if (lastQuery && renderMovies.length === 0) {
            setMoviesErrorMessage(NO_MOVIES_WITH_LAST_QUERY);
        } else {
            setMoviesErrorMessage(' ');
        }
    }, [isMoviesShort, location.pathname, moviesErrorMessage, renderMovies.length, searchQuery, setMoviesErrorMessage]);
    
    return(
        <Switch>
            <Route path="/movies">
                <section className="movies">
                {
                isPreloaderShowing ? (<Preloader/>) :
                    renderMovies && (
                        <>
                        <p className="movies__messages">
                            <span className="movies__messages-text">{ moviesErrorMessage }</span>
                        </p>
                        <ul className="movies-card__list">
                            {renderMovies.map((movie) => {
                                return (
                                    <MoviesCard
                                        key={movie.movieId}
                                        movie={movie}
                                        savedMovies={savedMovies}
                                        checkIsMovieSaved={checkIsMovieSaved}
                                        handleSaveMovie={handleSaveMovie}
                                        handleDeleteMovie={handleDeleteMovie}
                                        handleLikeMovie={handleLikeMovie}
                                    />
                                )
                            }).slice(0, numberOfCardsToShow)}
                        </ul>
                        {(renderMovies.length > numberOfCardsToShow) &&
                        (<div className="more">
                            <button className="more__button" onClick={handleClickMore}>
                                Ещё
                            </button>
                        </div>)}
                        </>
                )}
                </section>
            </Route>
            <Route path="/saved-movies">
                <section className="movies movies_saved">
                {
                isPreloaderShowing ? (<Preloader/>) :
                    renderMovies && (
                        <>
                        <p className="movies__messages">
                            <span className="movies__messages-text">{ moviesErrorMessage }</span>
                        </p>
                        <ul className="movies-card__list">
                            {renderMovies.map((movie) => {
                                return (
                                    <MoviesCard
                                        key={movie.movieId}
                                        movie={movie}
                                        savedMovies={savedMovies}
                                        checkIsMovieSaved={checkIsMovieSaved}
                                        handleSaveMovie={handleSaveMovie}
                                        handleDeleteMovie={handleDeleteMovie}
                                        handleLikeMovie={handleLikeMovie}
                                    />
                                )
                            })}
                        </ul>
                        </>
                )}
                </section>
            </Route>
        </Switch>
    );
}

export default MoviesCardList;
