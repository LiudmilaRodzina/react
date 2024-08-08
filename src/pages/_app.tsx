import './../styles/globals.css';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import Loader from './../components/Loader';
import Providers from './../context/ThemeContext';
import { store, wrapper } from './../store/store';
import ErrorBoundary from './../components/ErrorBoundary';
import { Provider } from 'react-redux';

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
      {' '}
      <Provider store={store}>
        <ErrorBoundary>
          <Providers>
            {loading && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <Loader loading={loading} />
              </div>
            )}
            <Component {...pageProps} />
          </Providers>
        </ErrorBoundary>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
