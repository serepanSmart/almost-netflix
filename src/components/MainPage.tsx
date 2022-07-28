import React from 'react';
import ErrorBoundary from '@/hoc/ErrorBoundary';
import Header from '@/containers/Header';
import { Loader } from '@/UI';
import { MoviesListProps } from '@/types';

const MoviesList = React.lazy(() => import('@/containers/MoviesList'));

const MainPage: React.FC<MoviesListProps> = ({ list }) => (
  <ErrorBoundary>
    <Header />
    <React.Suspense fallback={<Loader />}>
      <MoviesList list={list} />
    </React.Suspense>
  </ErrorBoundary>
);

export default MainPage;
