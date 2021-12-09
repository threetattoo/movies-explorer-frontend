import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <>
            <Header
                type="auth"
            />
            <SearchForm />
            <Footer />
        </>
    );
}

export default Movies;
