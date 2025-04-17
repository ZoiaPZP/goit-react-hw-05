import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi'; 
import styles from './MovieList.module.css'; 

const MoviesList = ({ movies, location }) => {
  return (
    <div className={styles.boxHome}> 
      <ul className={styles.boxHomeList}> 
        {movies.map(
          ({ original_title, id }) =>
            original_title !== undefined && (
              <li key={id} className={styles.item}>
                <Link to={`/movies/${id}`} state={{ from: location }} className={styles.link}>
                  <BiCameraMovie className={styles.icon} /> {original_title}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default MoviesList;

