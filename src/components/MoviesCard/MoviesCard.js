import React from 'react';
import './MoviesCard.css';
import { Route, Switch } from 'react-router-dom';
import thumb from '../../images/moviethumbs/1.png';

function MoviesCard() {
    return(
        <Switch>
            <Route path="/movies">
                <li className="movies-card">
                    <div className="movies-card__thumb-wrapper">
                        <img src={thumb} className="movies-card__thumb" alt="Обложка кинофильма" />
                    </div>
                    <div className="movies-card__info">
                        <h2 className="movies-card__title">
                        33 слова о дизайне
                        </h2>
                        <button className="movies-card__type-save" type="button"></button>
                    </div>
                    <span className="movies-card__duration">
                        1ч42м
                    </span>
                </li>
            </Route>
            <Route path="/saved-movies">
                <li className="movies-card movies-card_saved">
                    <div className="movies-card__thumb-wrapper">
                        <img src={thumb} className="movies-card__thumb" alt="Обложка кинофильма" />
                    </div>
                    <div className="movies-card__info">
                        <h2 className="movies-card__title">
                        33 слова о дизайне
                        </h2>
                        <button className="movies-card__type-save movies-card__type-delete" type="button"></button>
                    </div>
                    <span className="movies-card__duration">
                        1ч42м
                    </span>
                </li>
            </Route>
        </Switch>
    );
}

export default MoviesCard;
