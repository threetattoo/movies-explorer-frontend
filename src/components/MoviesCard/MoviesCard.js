import React, { useEffect, useState } from 'react';
import './MoviesCard.css';
import { Route, Switch } from 'react-router-dom';

function MoviesCard({ movie, savedMovies, checkIsMovieSaved, handleSaveMovie, handleDeleteMovie, handleLikeMovie }) {

    const [isSaved, setIsSaved] = useState(false);

    function convertDuration(duration) {
        const hours = Math.trunc(duration / 60);
        const minutes = duration % 60;    
        const convertedDuration = hours + 'ч ' + minutes + 'м';
        return convertedDuration;
    };

    const isMovieSaved = checkIsMovieSaved(movie);

    useEffect(() => {
        if (isMovieSaved) {
            setIsSaved(true);
        } else {
            setIsSaved(false);
        }
    }, []);

    function handleLikeClick() {
        setIsSaved(!isSaved);   
        handleLikeMovie(movie);
    };

    return(
        <Switch>
            <Route path="/movies">
                <li className="movies-card">
                    <div className="movies-card__info">
                        <div className="movies-card__data">
                            <h2 className="movies-card__title">
                            {movie.nameRU}
                            </h2>
                            <span className="movies-card__duration">
                                {convertDuration(movie.duration)}
                            </span>
                        </div>
                        <button
                            className={`movies-card__type-save ${isSaved ? "movies-card__type-save_saved" : ""}`}
                            type="button"
                            onClick={handleLikeClick}
                        >
                        </button>
                    </div>
                    <div className="movies-card__thumb-wrapper">
                        <a href={movie.trailer}>
                            <img src={movie.image} target="_blank" className="movies-card__thumb" alt="Обложка кинофильма" />
                        </a>
                    </div>
                </li>
            </Route>
            <Route path="/saved-movies">
            <li className="movies-card">
                    <div className="movies-card__info">
                        <div className="movies-card__data">
                            <h2 className="movies-card__title">
                                33 слова о дизайне
                            </h2>
                            <span className="movies-card__duration">
                                1ч42м
                            </span>
                        </div>
                        <button className="movies-card__type-save movies-card__type-delete" type="button"></button>
                    </div>
                    <div className="movies-card__thumb-wrapper">
                        <img src={movie.image} className="movies-card__thumb" alt="Обложка кинофильма" />
                    </div>
                </li>
            </Route>
        </Switch>
    );
}

export default MoviesCard;
