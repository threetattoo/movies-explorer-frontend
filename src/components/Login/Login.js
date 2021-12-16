import React from 'react';
import './Login.css';
import Authentification from '../Authentification/Authentification';

function Login() {
    return (
        <Authentification
            title="Рады видеть!"
            buttonName="Войти"
            helpText="Еще не зарегистрированы?"
            helpLink="/signup"
            helpLinkText="Регистрация"
        >
        <div className="authentification__form-field">
            <label className="authentification__form-label">E-mail</label>
            <input className="authentification__form-input" name="name" type="email" placeholder="e-mail" id="email-input" required />
            <p className="authentification__form-error">Ошибочка вышла..</p>
        </div>
        <div className="authentification__form-field">
            <label className="authentification__form-label">Пароль</label>
            <input className="authentification__form-input" name="name" type="password" placeholder="Пароль" id="password-input" required />
            <p className="authentification__form-error"></p>
        </div>
        </Authentification>
    );
}

export default Login;
