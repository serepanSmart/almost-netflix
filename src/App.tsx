import React from 'react';
import GlobalStyle from './GlobalStyle';
import ErrorBoundary from '@/hoc/ErrorBoundary';
import Header from '@/containers/Header';
import { Loader } from '@/UI';
import Footer from '@/components/Footer';
import { MoviesContextProvider } from './context';
import { EXTERNAL_LINK } from '@/constants';

const MoviesList = React.lazy(() => import('@/containers/MoviesList'));

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <MoviesContextProvider>
      <Header />
      <ErrorBoundary>
        <React.Suspense fallback={<Loader />}>
          <MoviesList />
        </React.Suspense>
      </ErrorBoundary>
    </MoviesContextProvider>
    <Footer>
      <EXTERNAL_LINK />
    </Footer>
  </>
);

export default App;
