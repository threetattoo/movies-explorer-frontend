import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ handleSearchByQuery, downloadedMovies, }) {
    const [searchQuery, setSearchQuery] = React.useState([]);
    const [isMoviesShort, setIsMoviesShort] = React.useState(false);
    const [foundedMovies, setFoundedMovies] = React.useState([]);

    React.useEffect(() => {
        handleMoviesSearch();
    }, [searchQuery]);  

    function handleMoviesSearch() {
        if (searchQuery.length > 0) {
            setFoundedMovies(handleSearchByQuery(downloadedMovies, searchQuery));
            console.log(foundedMovies);
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
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
