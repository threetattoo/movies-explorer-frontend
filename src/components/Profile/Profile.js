import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
    return (
        <>
            <Header
                type="auth"
            />
            <main className="main">
                <section className="profile">
                    <h1 class="profile__hello">
                        Привет, Username
                    </h1>
                    <form class="profile__form">
                        <div class="profile__wrapper">
                            <div class="profile__field">
                                <h2 class="profile__field-name">
                                    Имя
                                </h2>
                                <input class="profile__field-value" type="text" name="name" required="" value="Username" disabled="" />
                            </div>
                            <hr class="profile__line" />
                            <div class="profile__field">
                                <h2 class="profile__field-name">E-mail</h2>
                                <input class="profile__field-value" type="email" name="email" required="" value="Username@mail.com" disabled="" />
                                </div>
                        </div>
                        <button class="profile__edit-button" type="submit">
                            Редактировать
                        </button>
                        <button class="profile__exit-button">
                            Выйти из аккаунта
                        </button>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Profile;
