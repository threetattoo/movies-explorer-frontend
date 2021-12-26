import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(
    { 
        isMoviesShort,
        setIsMoviesShort,
        handleSearchByQuery,
        downloadedMovies,
        savedMovies,
        checkIsMovieSaved,
        handleSaveMovie,
        handleDeleteMovie,
        handleLikeMovie,
    }
) {
    const [searchQuery, setSearchQuery] = React.useState([]);
    const [foundedMovies, setFoundedMovies] = React.useState([]);

    React.useEffect(() => {
        handleMoviesSearch();
    }, [searchQuery]);  

    function handleMoviesSearch() {
        if (searchQuery.length > 0) {
            setFoundedMovies(handleSearchByQuery(downloadedMovies, searchQuery));
        }
    }
    return (
        <>
            <Header />
            <main className="main">
                <SearchForm
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isMoviesShort={isMoviesShort}
                    setIsMoviesShort={setIsMoviesShort}
                />
                <MoviesCardList 
                    foundedMovies={foundedMovies}
                    savedMovies={savedMovies}
                    checkIsMovieSaved={checkIsMovieSaved}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    handleLikeMovie={handleLikeMovie}
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
