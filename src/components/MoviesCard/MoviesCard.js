import React from 'react';
import './MoviesCard.css';
import { Route, Switch } from 'react-router-dom';
import thumb from '../../images/moviethumbs/1.png';

function MoviesCard({ type, }) {
    return(
        <Switch>
            <Route path="/movies">
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
                        <button className={`movies-card__type-save ${type === "saved" ? "movies-card__type-save_saved" : ""}`} type="button"></button>
                    </div>
                    <div className="movies-card__thumb-wrapper">
                        <img src={thumb} className="movies-card__thumb" alt="Обложка кинофильма" />
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
                        <img src={thumb} className="movies-card__thumb" alt="Обложка кинофильма" />
                    </div>
                </li>
            </Route>
        </Switch>
    );
}

export default MoviesCard;
