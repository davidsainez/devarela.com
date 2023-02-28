import { fetchEssayMetadata } from '~/Data';
import { EssayIndex } from '~/components/EssayIndex';

const EssayIndexLayout = ({ essays }) => {
  return <EssayIndex essays={[...essays, ...essays, ...essays]} />;
};

export default EssayIndexLayout;

export async function getStaticProps() {
  return {
    props: {
      essays: await fetchEssayMetadata(),
    },
  };
}
