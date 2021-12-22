import React from 'react';
import './Login.css';
import Authentification from '../Authentification/Authentification';
import useFormValidator from '../FormValidator/FormValidator';

function Login({ onSubmit }) {
    const formWithValidation = useFormValidator();
    const { email, password } = formWithValidation.values;
    const { values, handleChange, errors, isFormValid, resetForm } = formWithValidation;

    React.useEffect(() => {
        resetForm();
    }, [resetForm]);

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit({ email, password });
    }

    return (
        <Authentification
            title="Рады видеть!"
            buttonName="Войти"
            helpText="Еще не зарегистрированы?"
            helpLink="/signup"
            helpLinkText="Регистрация"
            handleSubmitForm={handleSubmit}
            isFormValid
        >
        <div className="authentification__form-field">
            <label className="authentification__form-label">E-mail</label>
            <input
                className="authentification__form-input"
                name="email"
                type="email"
                placeholder="e-mail"
                id="email-input"
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
                placeholder="Пароль"
                id="password-input"
                value={values.password || ''}
                onChange={formWithValidation.handleChange}
                required />
            <p className="authentification__form-error">{errors.password}</p>
        </div>
        </Authentification>
    );
}

export default Login;
