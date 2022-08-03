/* eslint-disable max-len */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';
import { rootPath } from '@/constants';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render(): ReactElement {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href={`${rootPath}favicon.ico`} type='image/ico' />
          {/* ************* BLOCK BELOW IS FOR ELIMINATING THIRD PARTY RENDER BLOCKING RESOURCES ************* */}
          <link
            rel='preconnect'
            href='https://fonts.googleapis.com'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
            as='style'
            crossOrigin='anonymous'
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `</style>
                          <link
                            rel="stylesheet"
                            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
                            media="print"
                            onload="this.media='all';"
                          />
                        <style>`,
            }}
          ></style>
          <noscript>
            <link
              rel='stylesheet'
              type='text/css'
              href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
            />
          </noscript>
          {/* ************* END OF BLOCK FOR ELIMINATING RENDER BLOCKING RESOURCES ************* */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
