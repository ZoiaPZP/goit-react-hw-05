import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/MovieList/MovieList';
import { getMovieSearch } from '../../services/getMovies';

import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('search');
    if (!query) return;
    getSearchName(query);
  }, [searchParams]);

  const getSearchName = async Name => {
    setIsLoading(true);
    try {
      const data = await getMovieSearch(Name);
      const { results } = data;
      setMovies(results);
    } catch (error) {
      console.log('Error:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = e => {
    setSearchName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchName.trim()) return alert('Can not be empty');
    setSearchParams({ search: searchName });
    setSearchName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={searchName}
          onChange={handleInputChange}
          className={css.searchInput}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>

      {isLoading && <Loader />}

      {!isLoading && searchParams.get('search') && movies.length === 0 && (
        <p style={{ textAlign: 'center' }}>No results found.</p>
      )}

      <MoviesList movies={movies} location={location} />
    </>
  );
};

export default MoviesPage;
