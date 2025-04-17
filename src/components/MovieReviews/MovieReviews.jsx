import Loader from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/getMovies';
import css from './MovieReviews.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getReviews = async id => {
      try {
        const data = await getMovieReviews(id);
        setMovieReviews(data.results);
      } catch (error) {
        console.log('Error:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {movieReviews.length > 0 ? (
        <div className={css.boxCast}>
          <ul className={css.boxCastList}>
            {movieReviews.map(({ id, author, content }) => (
              <li key={id}>
                <p><strong>Author:</strong> {author}</p>
                <p className={css.reviewText}>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>There are no reviews</p>
      )}
    </>
  );
};

export default Reviews;

