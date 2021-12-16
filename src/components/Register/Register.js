import React from 'react';
import Authentification from '../Authentification/Authentification';

function Register() {
    return (
            <Authentification
                title="Добро пожаловать!"
                buttonName="Зарегистрироваться"
                helpText="Уже зарегистрированы?"
                helpLink="/signin"
                helpLinkText="Войти"
            >
            <div className="authentification__form-field">
                <label className="authentification__form-label">Имя</label>
                <input className="authentification__form-input" name="name" type="text" id="name-input" placeholder="Имя" minLength="2" maxLength="30" required />
                <p className="authentification__form-error">Ошибочка вышла..</p>
            </div>
            <div className="authentification__form-field">
                <label className="authentification__form-label">E-mail</label>
                <input className="authentification__form-input" name="email" type="text" id="email-input" placeholder="e-mail" required />
                <p className="authentification__form-error"></p>
            </div>
            <div className="authentification__form-field">
                <label className="authentification__form-label">Пароль</label>
                <input className="authentification__form-input" name="password" type="password" id="password-input" placeholder="Пароль" required />
                <p className="authentification__form-error"></p>
            </div>
            </Authentification>
    );
}

export default Register;
