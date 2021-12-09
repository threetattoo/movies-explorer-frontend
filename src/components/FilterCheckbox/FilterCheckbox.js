import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return(
        <div className="filter-checkbox">
            <label className="filter-checkbox__wrapper">
                <p className="filter-checkbox__label">Короткометражка</p>
                <div className="filter-checkbox__switcher">
                    <input className={`filter-checkbox__input ${props.isMoviesShort ? "filter-checkbox__input_active" : ""}`} onClick={props.changeMoviesType} name="short" id="short" type="checkbox" />
                    <span className="filter-checkbox__slider"></span>
                </div>
            </label>
        </div>
    )
}

export default FilterCheckbox;
