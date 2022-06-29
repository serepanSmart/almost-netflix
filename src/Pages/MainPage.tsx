import React from 'react';
import ErrorBoundary from '@/hoc/ErrorBoundary';
import Header from '@/containers/Header';
import { Loader } from '@/UI';

const MoviesList = React.lazy(() => import('@/containers/MoviesList'));

const MainPage: React.FC = () => (
  <ErrorBoundary>
    <Header />
    <React.Suspense fallback={<Loader />}>
      <MoviesList />
    </React.Suspense>
  </ErrorBoundary>
);

export default MainPage;
