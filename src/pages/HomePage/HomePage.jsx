import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMoviesTrend } from '../../services/getMovies';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [resultTrend, setResultTrend] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getTrend = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesTrend();
        setResultTrend(data.results);
      } catch (error) {
        console.error('Error:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getTrend();
  }, []);

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      <MoviesList movies={resultTrend} location={location} />
    </div>
  );
};

export default HomePage;
