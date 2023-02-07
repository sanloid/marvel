import React from 'react';
import ErrorFallback from './ErrorFallback';

const ErrorBoundaryFall: React.FC = () => {
  return <ErrorFallback code={404} message="Something went wrong" />;
};

export default ErrorBoundaryFall;
