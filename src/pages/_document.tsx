import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
        <meta name="description" content="Your default description" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
