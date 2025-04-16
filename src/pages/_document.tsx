/* eslint-disable prettier/prettier */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
        <meta name="description" content="Your default description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Set the global title here */}
        <title>Fiona Lopez</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
