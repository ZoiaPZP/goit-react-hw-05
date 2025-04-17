import { Link } from 'react-router-dom';
import styles from './MovieList.module.css'; 

const MoviesList = ({ movies, location }) => {
  return (
    <div className={styles.boxHome}> 
      <ul className={styles.boxHomeList}> 
        {movies.map(
          ({ original_title, id }) =>
            original_title !== undefined && (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {original_title}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default MoviesList;
