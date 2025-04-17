import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="header">
        <Navigation />
      </header>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
