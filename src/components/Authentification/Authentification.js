import React from 'react';
import './Authentification.css';
import Logo from '../Logo/Logo';

function Register({
        title,
        children,
        buttonName,
        helpText,
        helpLink,
        helpLinkText,
      }) {
    return (
        <section className="authentification">
            <div className="authentification__wrapper">
                <Logo />
                <h1 className="authentification__title">
                    {title}
                </h1>
                <form className="authentification__form">
                    {children}
                    <button className="authentification__submit-button" type="submit">{buttonName}</button>
                </form>
                <p className="authentification__help-text">
                    {helpText}
                    <a className="link authentification__help-link" href={helpLink}>{helpLinkText}</a>
                </p>
            </div>
        </section>
    );
}

export default Register;
