import React from 'react';
import GlobalStyle from './GlobalStyle';
import ErrorBoundary from '@/hoc/ErrorBoundary';
import Header from '@/containers/Header';
import { Loader } from '@/UI';
import Footer from '@/components/Footer';
import { EXTERNAL_LINK } from '@/constants';
import { MovieDetails, ConfirmDeleteMovie } from './components/Modals';

const MoviesList = React.lazy(() => import('@/containers/MoviesList'));

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <MovieDetails />
    <ConfirmDeleteMovie />
    <ErrorBoundary>
      <React.Suspense fallback={<Loader />}>
        <MoviesList />
      </React.Suspense>
    </ErrorBoundary>
    <Footer>
      <EXTERNAL_LINK />
    </Footer>
  </>
);

export default App;
