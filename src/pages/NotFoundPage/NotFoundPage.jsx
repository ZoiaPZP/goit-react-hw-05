import React from 'react';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Oops! Page not found.</p>

    </div>
  );
};

export default NotFoundPage;
