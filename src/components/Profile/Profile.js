import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import useFormValidator from '../FormValidator/FormValidator';
import CurrentUserContext from '../../context/CurrentUserContext';

function Profile(
    {
        isLoggedIn,
        onLogout,
        onUpdate,
        isSuccessMessageShowing,
        setIsSuccessMessageShowing,
    }
) {
    const formWithValidation = useFormValidator();
    const { values, errors, isFormValid, resetForm, setValues } = formWithValidation;
    const currentUser = React.useContext(CurrentUserContext);
    const { name = currentUser.name, email = currentUser.email } = formWithValidation.values;
    
    React.useEffect(() => {
        setValues(currentUser);
        resetForm();
    }, [currentUser, resetForm, setValues]);

    function handleSubmitForm(evt) {
        evt.preventDefault();
        onUpdate({ name, email });
    }

    function formStatus() {
        let isDataSame = (values.name === currentUser.name) && (values.email === currentUser.email);
        return (!isDataSame && isFormValid);
    }
    
    let disabledStatus = formStatus();

    function handleChange(evt) {
        formWithValidation.handleChange(evt);
        setIsSuccessMessageShowing(false);
    }

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <main className="main">
                <section className="profile">
                    <h1 className="profile__hello">
                        Привет, {currentUser.name}
                    </h1>
                    <form
                        className="profile__form"
                    >
                        <div className="profile__wrapper">
                            <div className="profile__field profile__field_name">
                                <h2 className="profile__field-name">
                                    Имя
                                </h2>
                                <input
                                    className="profile__field-value"
                                    type="text"
                                    name="name"
                                    id="name-input"
                                    placeholder="Имя"
                                    onChange={handleChange}
                                    required
                                    value={values.name || currentUser.name}
                                    disabled=""
                                />
                            </div>
                            <p className="profile__field-error">{errors.name}</p>
                            <div className="profile__field profile__field_password">
                                <h2 className="profile__field-name">E-mail</h2>
                                <input
                                    className="profile__field-value"
                                    type="email"
                                    name="email"
                                    id="email-input"
                                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                    placeholder={currentUser.email}
                                    onChange={formWithValidation.handleChange}
                                    required
                                    value={values.email || currentUser.email}
                                    disabled=""
                                />
                            </div>
                            <p className="profile__field-error">{errors.email}</p>
                        </div>
                        <p className={`profile__seccess-message ${isSuccessMessageShowing && "profile__seccess-message_visible"}`}>
                            Данные профиля успешно изменены!
                        </p>
                        <button
                            className="profile__edit-button"
                            type="submit"
                            disabled={!disabledStatus}
                            onClick={handleSubmitForm}
                        >
                            Редактировать
                        </button>
                        <button
                            type="button"
                            className="profile__exit-button"
                            onClick={onLogout}
                        >
                            Выйти из аккаунта
                        </button>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Profile;

