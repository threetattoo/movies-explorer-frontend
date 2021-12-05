import React from 'react';
import './AboutMe.css';
import profilephoto from '../../images/hero_pic.png';

function AboutMe() {
    return(
        <section className="about-me section" id="about-me">
            <h2 className="about-me__title section__title">
                Студент
            </h2>
            <hr className="about-me__subline section__subline" />
            <div className="about-me__profile">
                <div className="about-me__info">
                    <h3 className="about-me__name">Михаил</h3>
                    <p className="about-me__job">Фронтенд-разработчик, 35 лет</p>
                    <p className="about-me__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <ul className="about-me__links">
                        <li className="about-me__item">
                            <a href="http://facebook.com" className="link about-me__link">
                                Facebook
                            </a>
                        </li>
                        <li className="about-me__item">
                            <a href="https://github.com/threetattoo/" className="link about-me__link">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="about-me__photo-wrapper">
                    <img src={profilephoto} alt="Фото профайла" className="link about-me__photo" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
