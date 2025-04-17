import Loader from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/getMovies';
import styles from './MovieCast.module.css'; 

const defaultPhoto =
  'https://static.vecteezy.com/system/resources/previews/033/042/430/original/anonymous-man-icon-secret-person-unknown-incognito-vector.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCast = async id => {
      try {
        const data = await getMovieCast(id);
        const { cast } = data;
        setMovieCast(cast);
      } catch (error) {
        console.log('Error:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movieCast.length !== 0 ? (
        <div className={styles.boxCast}>
          <ul className={styles.boxCastList}>
            {movieCast.map(
              ({ profile_path, id, original_name, popularity }) => (
                <li key={id}>
                  <img
                    width="185"
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                        : defaultPhoto
                    }
                    alt={original_name}
                  />
                  <h4>Name: {original_name}</h4>
                  <span>Popularity: {Math.round(popularity)} %</span>
                </li>
              )
            )}
          </ul>
        </div>
      ) : (
        <p>No information available</p>
      )}
    </>
  );
};

export default Cast;