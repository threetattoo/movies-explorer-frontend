import React from 'react';
import './NotFound.css';

function NotFound() {
    return (
        <section className="not-found">
            <h1 className="not-found__code">
                404
            </h1>
            <p className="not-found__message">
                Страница не найдена
            </p>
            <a className="not-found__link" href="/">
                Назад
            </a>
        </section>
    );
}

export default NotFound;
