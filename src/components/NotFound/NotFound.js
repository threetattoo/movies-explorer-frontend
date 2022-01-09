import React from 'react';
import { useHistory } from "react-router-dom";
import './NotFound.css';

function NotFound() {
    const history = useHistory();

    function handleGoBackClick() {
        history.goBack();
    }

    return (
        <section className="not-found">
            <h1 className="not-found__code">
                404
            </h1>
            <p className="not-found__message">
                Страница не найдена
            </p>
            <button className="not-found__link" type="button" onClick={handleGoBackClick}>
                Назад
            </button>
        </section>
    );
}

export default NotFound;
