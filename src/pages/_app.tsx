import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
} from '@next/font/google';
import Head from 'next/head';
import '~/scss/index.scss';

// 600 for brand
// 400 for ui and code blocks
// 500 for ui
const mono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
});

// 500 for footer heading
// 400 for reading
const sans = IBM_Plex_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-sans',
});

// 300 for big headings
// 500 for small headings
const condensed = IBM_Plex_Sans_Condensed({
  weight: ['300', '500'],
  subsets: ['latin'],
  variable: '--font-condensed',
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
        className={[condensed.variable, mono.variable, sans.variable].join(' ')}
      >
        <Component {...pageProps} />
      </main>
    </div>
  );
}
