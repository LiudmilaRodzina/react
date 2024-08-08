import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="keywords"
          content="rolling scopes school, nextjs, pages-api"
        ></meta>
        <title>Products</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
