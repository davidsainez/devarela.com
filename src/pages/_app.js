import { DefaultSeo } from 'next-seo';
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
} from '@next/font/google';
import Head from 'next/head';
import '~/scss/index.scss';

const mono = IBM_Plex_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
});

const sans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
});

const condensed = IBM_Plex_Sans_Condensed({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-condensed',
});

/*
export function reportWebVitals(metric) {
  console.log(metric);
}
*/

export default function App({ Component, pageProps }) {
  //const router = useRouter();
  //const path = router.asPath;

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
        className={[mono.variable, sans.variable, condensed.variable].join(' ')}
      >
        <Component {...pageProps} />
      </main>
    </div>
  );
}
