import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__wrapper">
                <div className="promo__logo"></div>
                <div className="promo__title">
                    Учебный проект студента факультета Веб-разработки.
                </div>
            </div>
            <NavTab />
        </section>
    );
}

export default Promo;