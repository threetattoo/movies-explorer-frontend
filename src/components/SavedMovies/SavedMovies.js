import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({
    findedMovies,
    setFindedMovies,
    isMoviesShort,
    setIsMoviesShort,
    handleSearchByQuery,
    downloadedMovies,
    savedMovies,
    filterShortMovies,
    checkIsMovieSaved,
    handleSaveMovie,
    handleDeleteMovie,
    handleLikeMovie,
}) {

    const [searchQuery, setSearchQuery] = React.useState('');
    //const [findedMovies, setFindedMovies] = React.useState([]);

    React.useEffect(() => {
        handleMoviesSearch();
    }, [searchQuery]);

    React.useEffect(() => {
        setFindedMovies(savedMovies);
    }, [savedMovies]);
    
    function handleMoviesSearch() {
        if (searchQuery) {
            setFindedMovies(handleSearchByQuery(savedMovies, searchQuery));
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
                    isMoviesShort={isMoviesShort}
                    filterShortMovies={filterShortMovies}
                    findedMovies={findedMovies}
                    setFindedMovies={setFindedMovies}
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
