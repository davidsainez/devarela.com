import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { Layout } from '../components/Layout';
import Head from 'next/head';
import '../scss/index.scss';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Layout path={path} markdoc={pageProps.markdoc}>
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
      <Component {...pageProps} />
    </Layout>
  );
}
