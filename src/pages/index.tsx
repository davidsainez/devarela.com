import { fetchEssayMetadata } from 'Data';
import { LandingPage } from 'components/LandingPage';

const Lando = ({ essays }) => {
  return <LandingPage essays={essays} />;
};

export default Lando;

export async function getStaticProps() {
  return {
    props: {
      essays: await fetchEssayMetadata(),
    },
  };
}
