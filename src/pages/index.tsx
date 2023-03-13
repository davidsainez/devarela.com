import { FC } from 'react';
import { slugToAST, fetchAllEssaySlugs, getMetadata, Metadata } from 'Data';
import { LandingPage } from 'components/LandingPage';

type LandoProps = {
  essays: Metadata[];
};

const Lando: FC<LandoProps> = ({ essays }) => {
  return <LandingPage essays={essays} />;
};

export default Lando;

export async function getStaticProps() {
  const slugs = await fetchAllEssaySlugs();

  const essays = slugs.map(async (slug) => {
    const ast = await slugToAST(slug);
    return getMetadata(slug, ast);
  });

  return {
    props: {
      essays: await Promise.all(essays),
    },
  };
}
