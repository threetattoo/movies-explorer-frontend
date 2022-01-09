import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({
    isLoggedIn,
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
    isPreloaderShowing,
    setIsPreloaderShowing,
}) {

    const [ searchQuery, setSearchQuery ] = React.useState('');
    const [ findedMovies, setFindedMovies ] = React.useState([]);

    React.useEffect(() => {
        handleMoviesSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    React.useEffect(() => {
        setFindedMovies(savedMovies);
    }, [savedMovies]);
    
    function handleMoviesSearch() {
        if (searchQuery) {
            setFindedMovies(handleSearchByQuery(savedMovies, searchQuery));
            setTimeout(() => setIsPreloaderShowing(false), 1000);
        }
    }
    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <main className="main">
                <SearchForm
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isMoviesShort={isMoviesShort}
                    setIsMoviesShort={setIsMoviesShort}
                    setIsPreloaderShowing={setIsPreloaderShowing}
                />
                <MoviesCardList
                    searchQuery={searchQuery}
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
                    isPreloaderShowing={isPreloaderShowing}
                />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
