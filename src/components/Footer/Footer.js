import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <p className="footer__info">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__container">
                <p className="footer__copyright">© 2021</p>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a className="link footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="link footer__item">
                        <a className="footer__link" href="https://github.com/threetattoo/" target="_blank" rel="noreferrer">Github</a>
                    </li>
                    <li className="link footer__item">
                        <a className="footer__link" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
