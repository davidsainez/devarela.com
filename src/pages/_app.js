import '../scss/index.scss';
import { useRouter } from 'next/router';
import { Layout } from '../components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Layout path={path} markdoc={pageProps.markdoc}>
      <Head>
        <title>D.E. Varela</title>
        <meta
          name="description"
          content="D.E. Varela's collection of essays on web technology, design, software principles, and entrepreneurship."
        ></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
