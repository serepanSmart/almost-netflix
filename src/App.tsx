import React from 'react';
import GlobalStyle from './GlobalStyle';
// import Fonts from '@/fonts' is replaced with CDN. Previous import was just for investigating how to use fonts by importing + Styled Components. However, it's a reason of screen flicker
import ErrorBoundary from '@/hoc/ErrorBoundary';
import Header from '@/containers/Header';
import { Loader } from '@/UI';
import Footer from '@/components/Footer';
import { EXTERNAL_LINK } from '@/constants';

const MoviesList = React.lazy(() => import('@/containers/MoviesList'));

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
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
