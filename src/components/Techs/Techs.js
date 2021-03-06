import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className="techs section" id="techs">
            <h2 className="techs__title section__title">
                Технологии
            </h2>
            <hr className="techs__subline section__subline" />
            <div className="techs__wrapper">
                <h3 className="techs__subtitle">
                    7 технологий
                </h3>
                <p className="techs__text">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className="techs__list">
                    <li className="techs__item">
                        HTML
                    </li>
                    <li className="techs__item">
                        CSS
                    </li>
                    <li className="techs__item">
                        JS
                    </li>
                    <li className="techs__item">
                        React 
                    </li>
                    <li className="techs__item">
                        Git  
                    </li>
                    <li className="techs__item">
                        Express.js 
                    </li>
                    <li className="techs__item">
                        mongoDB
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;