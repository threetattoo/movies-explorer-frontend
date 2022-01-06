import React, {useState, useEffect, useCallback} from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from "../Preloader/Preloader";

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
    }
) {
    const [ numberOfCardsToShow, setNumberOfCardsToShow ] = useState(0);
    const [ renderMovies, setRenderMovies ] = useState([]);
    const [ moviesErrorMessage, setMoviesErrorMessage ] = useState('');
    const location = useLocation();
    
    const numberOfInitialCards = () => {
        if (window.innerWidth > 570) {
            setNumberOfCardsToShow(7);
        } else if (window.innerWidth <= 570) {
            setNumberOfCardsToShow(5);
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
        if (window.innerWidth >= 570) {
            setNumberOfCardsToShow(numberOfCardsToShow + 7);
        } else {
            setNumberOfCardsToShow(numberOfCardsToShow + 5);
        }
    }
    
    useEffect(() => {
        const lastQuery = localStorage.getItem('lastQuery');
        if (location.pathname === '/saved-movies' && renderMovies.length === 0) {
            setMoviesErrorMessage('Здесь появятся ваши сохраненные фильмы.');
        } else if (!lastQuery && renderMovies.length === 0) {
            setMoviesErrorMessage('Здесь появятся ваши фильмы.');
        } else if (lastQuery && isMoviesShort && renderMovies.length === 0) {
            setMoviesErrorMessage('Короткометражных фильмов по зарпосу не найдено.');
        } else if (lastQuery && renderMovies.length === 0) {
            setMoviesErrorMessage('По последнему запросу ничего не найдено.');
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
                {renderMovies && (
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
