import React from 'react';
import Authentification from '../Authentification/Authentification';
import useFormValidator from '../FormValidator/FormValidator';

function Register({ onSubmit }) {
    const formWithValidation = useFormValidator();
    const { name, email, password } = formWithValidation.values;
    const { values, handleChange, errors, isFormValid, resetForm } = formWithValidation;

    React.useEffect(() => {
        resetForm();
    }, [resetForm]);
    
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit({ name, email, password });
    }

    return (
            <Authentification
                title="Добро пожаловать!"
                buttonName="Зарегистрироваться"
                helpText="Уже зарегистрированы?"
                helpLink="/signin"
                helpLinkText="Войти"
                handleSubmitForm={handleSubmit}
                isFormValid
            >
            <div className="authentification__form-field">
                <label className="authentification__form-label">Имя</label>
                <input
                    className="authentification__form-input"
                    name="name"
                    type="text"
                    id="name-input"
                    placeholder="Имя"
                    value={values.name || ''}
                    onChange={formWithValidation.handleChange}
                    minLength="2"
                    maxLength="30"
                    required
                />
                <p className="authentification__form-error">{errors.name}</p>
            </div>
            <div className="authentification__form-field">
                <label className="authentification__form-label">E-mail</label>
                <input
                    className="authentification__form-input"
                    name="email"
                    type="email"
                    id="email-input"
                    placeholder="e-mail"
                    value={values.email || ''}
                    onChange={formWithValidation.handleChange}
                    required
                />
                <p className="authentification__form-error">{errors.email}</p>
            </div>
            <div className="authentification__form-field">
                <label className="authentification__form-label">Пароль</label>
                <input
                    className="authentification__form-input"
                    name="password"
                    type="password"
                    id="password-input"
                    placeholder="Пароль"
                    value={values.password || ''}
                    onChange={handleChange}
                    required
                />
                <p className="authentification__form-error">{errors.password}</p>
            </div>
            </Authentification>
    );
}

export default Register;
