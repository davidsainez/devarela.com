import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import {
  IBM_Plex_Mono,
  IBM_Plex_Serif,
  Source_Sans_Pro,
} from '@next/font/google';
import Head from 'next/head';
import '~/scss/index.scss';

const mono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
});

const sans = Source_Sans_Pro({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = IBM_Plex_Serif({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
});

/*
export function reportWebVitals(metric) {
  console.log(metric);
}
*/

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <DefaultSeo
        themeColor="#ffffff"
        openGraph={{
          locale: 'en_US',
        }}
        twitter={{
          handle: '@_de_varela',
          cardType: 'summary',
        }}
      />
      <main
        className={[mono.variable, sans.variable, serif.variable].join(' ')}
      >
        <Component {...pageProps} />
      </main>
    </div>
  );
}
