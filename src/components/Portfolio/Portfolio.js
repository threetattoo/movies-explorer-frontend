import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return(
        <section className="portfolio">
            <h2 className="portfolio__title">
                Портфолио
            </h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="link portfolio__link" href="https://threetattoo.github.io/how-to-learn/index.html" target="_blank" rel="noreferrer">
                        <p className="portfolio__site-name">Статичный сайт</p>
                        <p className="portfolio__arrow-wrapper">↗</p>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="link portfolio__link" href="https://threetattoo.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">
                        <p className="portfolio__site-name">Адаптивный сайт</p>
                        <p className="portfolio__arrow-wrapper">↗</p>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="link portfolio__link" href="https://threetattoo-mesto.nomoredomains.rocks/" target="_blank" rel="noreferrer">
                        <p className="portfolio__site-name">Одностраничное приложение</p>
                        <p className="portfolio__arrow-wrapper">↗</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
