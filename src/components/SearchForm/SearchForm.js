import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

    const [isMoviesShort, setIsMoviesShort] = React.useState(false);

    function changeMoviesType(e) {
        setIsMoviesShort(!isMoviesShort);
    }

    return(
        <section className="searchform">
            <div className="searchform__wrapper">
                <form className="searchform__search-form">
                    <fieldset className="searchform__input-fieldset">
                        <input className="search-form__input" placeholder="Фильм" name="searchValue" id="searchValue" value="" required />
                        <button className="search-form__submit" type="submit">
                        </button>
                    </fieldset>
                    <FilterCheckbox  isMoviesShort={isMoviesShort} changeMoviesType={changeMoviesType} />
                </form>
            </div>
        </section>
    )
}

export default SearchForm;