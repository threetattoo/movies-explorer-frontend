import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
    const [ searchQuery, setSearchQuery ] = React.useState([]);
    const [isMoviesShort, setIsMoviesShort] = React.useState(false);
    return (
        <>
            <Header />
            <main className="main">
                <SearchForm
                    isMoviesShort={isMoviesShort}
                    setIsMoviesShort={setIsMoviesShort}
                />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
