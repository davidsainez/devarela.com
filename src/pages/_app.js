import '../scss/index.scss';
import { useRouter } from 'next/router';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Layout path={path} markdoc={pageProps.markdoc}>
      <Component {...pageProps} />
    </Layout>
  );
}
