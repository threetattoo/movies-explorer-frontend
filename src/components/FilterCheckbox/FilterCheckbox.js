import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({isMoviesShort, changeMoviesType}) {
    return(
        <div className="filter-checkbox">
            <label className="filter-checkbox__wrapper">
                <div className="filter-checkbox__switcher">
                    <input
                        className={`filter-checkbox__input ${isMoviesShort ? "filter-checkbox__input_active" : ""}`}
                        onClick={changeMoviesType}
                        name="short"
                        id="short"
                        type="checkbox"
                    />
                    <span className="filter-checkbox__slider"></span>
                </div>
                <p className="filter-checkbox__label">Короткометражки</p>
            </label>
        </div>
    )
}

export default FilterCheckbox;
