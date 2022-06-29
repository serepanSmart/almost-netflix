import React from 'react';
import GlobalStyle from './GlobalStyle';
import Footer from './components/Footer';
import Providers from './Providers';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Providers />
    <Footer />
  </>
);

export default App;
