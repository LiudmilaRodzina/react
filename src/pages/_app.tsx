import './../styles/globals.css';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import Loader from './../components/Loader';
import Providers from '../services/context/ThemeContext';
import { store, wrapper } from './../store/store';
import { Provider } from 'react-redux';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);

    if (pageProps) {
      setLoading(false);
    }

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [pageProps]);

  return (
    <>
      <Provider store={store}>
        <Head>
          <meta charSet="UTF-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta
            name="description"
            content="RSSchool learning project: React Routing, Redux, Redux Toolkit, RTK Query, Context Api, Next.js Pages Api, Next.js App Router App, Remix"
          />
          <meta
            name="keywords"
            content="rolling scopes school, rsschool, react, nextjs, remix"
          ></meta>
          <link rel="icon" href="/favicon.svg" />
          <title>Products</title>
        </Head>
        <Providers>
          {loading && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <Loader loading={loading} />
            </div>
          )}
          <Component {...pageProps} />
        </Providers>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
