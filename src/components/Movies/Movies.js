import React, { useCallback, useEffect, } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(
    { 
        isMoviesShort,
        findedMovies,
        setFindedMovies,
        setIsMoviesShort,
        filterShortMovies,
        handleSearchByQuery,
        downloadedMovies,
        savedMovies,
        checkIsMovieSaved,
        handleSaveMovie,
        handleDeleteMovie,
        handleLikeMovie,
        isPreloaderShowing,
    }
) {
    const [ searchQuery, setSearchQuery ] = React.useState('');
    const [ isFirstRequest, setIsFirstRequest ] = React.useState(true);
    
    const handleMoviesSearch = useCallback(() => {
        if (searchQuery) {
            setFindedMovies(handleSearchByQuery(downloadedMovies, searchQuery));
            setIsFirstRequest(false);
        }
    }, [downloadedMovies, handleSearchByQuery, searchQuery, setFindedMovies]);
    
    useEffect(() => {
        handleMoviesSearch();
    }, [handleMoviesSearch]);  
    
    const setMoviesFromLastSearch = useCallback(() => {
        const getLastSearchMovies = localStorage.getItem('lastSearchMovies');
        if (getLastSearchMovies && isFirstRequest) {
            setFindedMovies(JSON.parse(getLastSearchMovies));
        } else {
            console.log('Фильмы из последнего запроса не установлены');
        }
    }, [isFirstRequest, setFindedMovies]);
    
    useEffect(() => {
        setMoviesFromLastSearch();
    }, [setMoviesFromLastSearch]);  

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

export default Movies;
