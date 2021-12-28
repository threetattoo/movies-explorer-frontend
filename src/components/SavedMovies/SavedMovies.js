import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ 
    isMoviesShort,
    setIsMoviesShort,
    handleSearchByQuery,
    downloadedMovies,
    savedMovies,
    checkIsMovieSaved,
    handleSaveMovie,
    handleDeleteMovie,
    handleLikeMovie,
}) {

    const [searchQuery, setSearchQuery] = React.useState([]);
    const [foundedMovies, setFoundedMovies] = React.useState([]);

    React.useEffect(() => {
        handleMoviesSearch();
    }, [searchQuery]);

    React.useEffect(() => {
        setFoundedMovies(savedMovies);
    }, [savedMovies]);

    console.log(savedMovies);
    function handleMoviesSearch() {
        if (searchQuery.length > 0) {
            setFoundedMovies(handleSearchByQuery(savedMovies, searchQuery));
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
                    handleSearchByQuery={handleSearchByQuery}
                    downloadedMovies={downloadedMovies}
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

export default SavedMovies;
