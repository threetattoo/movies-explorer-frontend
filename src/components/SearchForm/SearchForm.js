import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormValidator from '../FormValidator/FormValidator';


function SearchForm({isMoviesShort, setIsMoviesShort}) {

    const formWithValidation = useFormValidator();
    const { searchValue } = formWithValidation.values;
    const { values, errors, isFormValid, resetForm } = formWithValidation;

    React.useEffect(() => {
        resetForm();
    }, [resetForm]);

    function changeMoviesType(e) {
        setIsMoviesShort(!isMoviesShort);
    }

    return(
        <section className="searchform">
            <div className="searchform__wrapper">
                <form className="searchform__search-form">
                    <fieldset className="searchform__input-fieldset">
                        <input
                            className="search-form__input"
                            placeholder="Фильм"
                            name="searchValue"
                            id="searchValue"
                            value={searchValue || ''}
                            onChange={formWithValidation.handleChange}
                            required
                        />
                        <button
                            className={`search-form__submit ${!isFormValid && "search-form__submit_disabled"}`}
                            type="submit"
                            disabled={!isFormValid}
                        >
                        </button>
                    </fieldset>
                    <FilterCheckbox
                        isMoviesShort={isMoviesShort}
                        setIsMoviesShort={setIsMoviesShort}
                        changeMoviesType={changeMoviesType}
                    />
                </form>
            </div>
        </section>
    )
}

export default SearchForm;