import React, {useState, useEffect, useCallback} from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from "../Preloader/Preloader";

function MoviesCardList(
    {
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
    const [numberOfCardsToShow, setNumberOfCardsToShow] = useState(0);
    const [renderMovies, setRenderMovies] = useState([]);
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
    
    const setLastSearchMovies = useCallback(() => {
        if (findedMovies.length > 0  && location.pathname === "/movies") {
            localStorage.setItem('lastSearchMovies', JSON.stringify(findedMovies));
        }
    }, [findedMovies, location.pathname]);

    useEffect(() => {
        setTypeOfMovies();
        setLastSearchMovies();
    }, [setLastSearchMovies, setTypeOfMovies]);

    function handleClickMore() {
        if (window.innerWidth >= 570) {
            setNumberOfCardsToShow(numberOfCardsToShow + 7);
        } else {
            setNumberOfCardsToShow(numberOfCardsToShow + 5);
        }
    }

    return(
        <Switch>
            <Route path="/movies">
                <section className="movies">
                {
                isPreloaderShowing ? (<Preloader/>) :
                    renderMovies && (
                        <>
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
