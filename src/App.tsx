import React from 'react';
import GlobalStyle from './GlobalStyle';
import Fonts from '@/fonts';
import ErrorBoundary from '@/hoc/ErrorBoundary';
import Header from '@/containers/Header';
import MoviesList from '@/containers/MoviesList';
import Footer from '@/components/Footer';
import WithLoading from '@/hoc/WithLoading';

const MoviesListWithLoading = WithLoading(MoviesList);

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Fonts />
      <Header />
      <ErrorBoundary>
        <MoviesListWithLoading />
      </ErrorBoundary>
      <Footer>
        <a href="https://www.netflix.com/" target="_blank">
          <b>netflix</b>roulette
        </a>
      </Footer>
    </>
  );
};

export default App;
