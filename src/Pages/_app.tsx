/* eslint-disable max-len */
import ModalMovie from '@/components/Modals';
import ContextProvider from '@/context';
import GlobalStyle from '@/GlobalStyle';
import store from '@/redux/store';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Layout from '@/components/Layout';
import favicon from '@public/favicon.ico';

const App: React.FC<{ Component: React.FC; pageProps: object }> = ({
  Component,
  pageProps,
}) => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ContextProvider>
        <ModalMovie />
        <Layout>
          <Head>
            <meta charSet='UTF-8' />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1.0'
            />
            <link rel='icon' href={`${favicon.src}`} type='image/ico' />
            <title>React Movie</title>
          </Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </Provider>
  </>
);

export default App;
