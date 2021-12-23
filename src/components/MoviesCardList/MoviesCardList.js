import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import More from '../../components/More/More';
import './MoviesCardList.css';

function MoviesCardList({foundedMovies}) {
    return(
        <Switch>
            <Route path="/movies">
                <section className="movies">
                    <ul className="movies-card__list">
                        {foundedMovies.map((movie) => {
                            return (
                                <MoviesCard
                                    key={movie.movieId}
                                    movie={movie}
                                />
                            )
                        })}
                    </ul>
                    <More />
                </section>
            </Route>
            <Route path="/saved-movies">
                <section className="movies movies_saved">
                    <ul className="movies-card__list">
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                    </ul>
                </section>
            </Route>
        </Switch>
    );
}

export default MoviesCardList;
