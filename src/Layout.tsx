import React from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFall from 'components/ErrorBoundaryFall';
import Footer from './components/Footer';
import Header from './components/Header';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorBoundaryFall}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Layout;
