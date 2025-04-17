import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('../../layout/Layout'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('../../components/MovieCast/MovieCast'));
const Reviews = lazy(() => import('../../components/MovieReviews/MovieReviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;





