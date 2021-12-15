import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
        <>
            <Header
                type="auth"
            />
            <main className="main">
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
