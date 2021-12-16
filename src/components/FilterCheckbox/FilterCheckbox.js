import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return(
        <div className="filter-checkbox">
            <label className="filter-checkbox__wrapper">
                <div className="filter-checkbox__switcher">
                    <input className={`filter-checkbox__input ${props.isMoviesShort ? "filter-checkbox__input_active" : ""}`} onClick={props.changeMoviesType} name="short" id="short" type="checkbox" />
                    <span className="filter-checkbox__slider"></span>
                </div>
                <p className="filter-checkbox__label">Короткометражки</p>
            </label>
        </div>
    )
}

export default FilterCheckbox;
