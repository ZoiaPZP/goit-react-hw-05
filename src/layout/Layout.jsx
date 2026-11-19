import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import tmdbLogo from '../assets/tmdb-logo.svg';

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="header">
        <Navigation />
      </header>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Outlet />
      </Suspense>
      <footer className="site-footer">
        <a
          className="site-footer-logo"
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tmdbLogo} alt="TMDB" width="137" height="18" />
        </a>
        <p>
          Educational project · Movie data and images from{'\u00a0'}
          <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
            TMDB
          </a>
        </p>
        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      </footer>
    </div>
  );
};

export default Layout;
