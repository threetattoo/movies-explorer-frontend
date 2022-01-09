import React, { useCallback, useEffect, } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(
    {
        isLoggedIn,
        isMoviesShort,
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
        setIsPreloaderShowing,
    }
) {
    const [ searchQuery, setSearchQuery ] = React.useState('');
    const [ isFirstRequest, setIsFirstRequest ] = React.useState(true);
    const [ findedMovies, setFindedMovies ] = React.useState([]);
    
    const handleMoviesSearch = useCallback(() => {
        if (searchQuery.length > 0) {
            setFindedMovies(handleSearchByQuery(downloadedMovies, searchQuery));
            setIsFirstRequest(false);
            localStorage.setItem('lastQuery', searchQuery);
        }
        setTimeout(() => setIsPreloaderShowing(false), 1000);
    }, [downloadedMovies, handleSearchByQuery, searchQuery, setIsPreloaderShowing]);
    
    useEffect(() => {
        handleMoviesSearch();
    }, [handleMoviesSearch]);


    const getLastCheckboxStatus = useCallback(() => {
        const lastCheckboxStatus = localStorage.getItem('isShortStatus');
        if (lastCheckboxStatus && lastCheckboxStatus === 'true') {
            return true;
        } else {
            return false;
        }
    }, []);

    
    const showMoviesFromLastSearch = useCallback(() => {
        const lastQuery = localStorage.getItem('lastQuery');
        if (lastQuery && isFirstRequest) {
            const longMovies = handleSearchByQuery(downloadedMovies, lastQuery);
            const shortMovies = filterShortMovies(longMovies);
            if (getLastCheckboxStatus()) {
                setFindedMovies(shortMovies);
                setIsMoviesShort(true);
            } else {
                setFindedMovies(longMovies);
                setIsMoviesShort(false);
            }
        }/* else {
            //console.log(isFirstRequest);
            console.log('');
        }*/
    }, [downloadedMovies, filterShortMovies, getLastCheckboxStatus, handleSearchByQuery, isFirstRequest, setIsMoviesShort]);
    
    useEffect(() => {
        showMoviesFromLastSearch();
    }, [showMoviesFromLastSearch]);
    
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
                    isMoviesShort={isMoviesShort}
                    filterShortMovies={filterShortMovies}
                    findedMovies={findedMovies}
                    savedMovies={savedMovies}
                    checkIsMovieSaved={checkIsMovieSaved}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    handleLikeMovie={handleLikeMovie}
                    isPreloaderShowing={isPreloaderShowing}
                    setIsPreloaderShowing={setIsPreloaderShowing}
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
