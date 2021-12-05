import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <h2 className="about-project__title">
                О проекте
            </h2>
            <hr className="about-project__subline" />
            <div className="about-project__wrapper">
                <div className="about-project__columns">
                    <div className="about-project__column">
                        <h3 className="about-project__column-title">
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className="about-project__column-text">
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="about-project__column">
                        <h3 className="about-project__column-title">
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className="about-project__column-text">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="about-project__progressbar">
                    <div className="about-project__progressbar-part about-project__progressbar-part_backend">
                        <p className="about-project__progressbar-time">1 неделя</p>
                    </div>
                    <div className="about-project__progressbar-part about-project__progressbar-part_frontend">
                        <p className="about-project__progressbar-time">4 недели</p>
                    </div>
                    <div className="about-project__progressbar-part">
                        <p className="about-project__progressbar-type">Back-end</p>
                    </div>
                    <div className="about-project__progressbar-part">
                        <p className="about-project__progressbar-type">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;