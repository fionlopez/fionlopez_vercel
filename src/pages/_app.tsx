import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';
import Head from 'next/head';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
