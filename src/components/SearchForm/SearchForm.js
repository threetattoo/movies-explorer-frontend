import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormValidator from '../FormValidator/FormValidator';


function SearchForm(
    {setSearchQuery, isMoviesShort, setIsMoviesShort,}
) {

    const formWithValidation = useFormValidator();
    const { searchValue } = formWithValidation.values;
    const { errors, isFormValid, resetForm } = formWithValidation;

    React.useEffect(() => {
        resetForm();
    }, [resetForm]);

    function changeMoviesType(e) {
        setIsMoviesShort(!isMoviesShort);
        localStorage.setItem('isShortStatus', JSON.stringify(!isMoviesShort));
    }

    function searchFormHandler(evt) {
        evt.preventDefault();
        setSearchQuery(searchValue);
    }

    return(
        <section className="searchform">
            <div className="searchform__wrapper">
                <form
                    className="searchform__search-form"
                    onSubmit={searchFormHandler}
                >
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
                    <p className="searchform__error">{errors.searchValue}</p>
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