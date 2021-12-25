import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ foundedMovies, savedMovies, handleSaveMovie, handleDeleteMovie, checkIsMovieSaved, handleLikeMovie }) {
    const [numberOfCardsToShow, setNumberOfCardsToShow] = useState(0);

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

    function handleClickMore() {
        if (window.innerWidth >= 570) {
            setNumberOfCardsToShow(numberOfCardsToShow + 7);
        } else {
            setNumberOfCardsToShow(numberOfCardsToShow + 5);
        }
    }
    console.log(numberOfCardsToShow);
    return(
        <Switch>
            <Route path="/movies">
                <section className="movies">
                {foundedMovies && (
                    <>
                    <ul className="movies-card__list">
                        {foundedMovies.map((movie) => {
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
                    {(foundedMovies.length > numberOfCardsToShow) &&
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
                    <ul className="movies-card__list">

                    </ul>
                </section>
            </Route>
        </Switch>
    );
}

export default MoviesCardList;
