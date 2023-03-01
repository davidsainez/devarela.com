import * as NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import { Template } from '~/components/Template';
import { Card } from './Card';
import styles from './landingPage.module.scss';

const TITLE = 'D.E. Varela';
const URL = 'devarela.com';
const DESCRIPTION = `
D.E. Varela's collection of essays exploring mental models, software design, and web technology.
`;

const PINNED = [
  '/essays/pareto',
  '/essays/getting-started',
  '/essays/blockchain_basics',
];

const match = (essays, path) => {
  for (const essay of essays) {
    if (essay.href === path) {
      return essay;
    }
  }
  return undefined;
};

export const LandingPage = ({ essays }) => {
  return (
    <Template>
      <NextSeo
        title={TITLE}
        description={DESCRIPTION}
        openGraph={{
          url: URL,
          title: TITLE,
          description: DESCRIPTION,
        }}
      />

      <div className={styles.container}>
        <h1 className={styles.heading}>Welcome</h1>
        <p className={styles.about}>
          This site hosts a collection of{' '}
          <NextLink href="/essays" className={styles.link}>
            essays
          </NextLink>{' '}
          that explore mental models, software design, and web technology.
        </p>
        <p className={styles.about}>
          I write to pursue clarity. Good ideas don&apos;t spring out of the
          abyss. They are a product of constant refinement. I offer my writing
          here so that it may be of service to you as well.
        </p>
        <h2 className={styles.heading}>Selected Essays</h2>
        <Card essay={match(essays, PINNED[0])} />
        <Card essay={match(essays, PINNED[1])} />
        <h2 className={styles.heading}>Contact</h2>
        <div className={styles.contactItem}>
          Twitter
          <a href="https://twitter.com/varelabuilds" className={styles.link}>
            @varelabuilds
          </a>
        </div>
        <div className={styles.contactItem}>
          GitHub
          <a href="https://github.com/de-varela" className={styles.link}>
            @de-varela
          </a>
        </div>
        <div className={styles.contactItem}>
          Email
          <a href="mailto:de-varela@outlook.com" className={styles.link}>
            de-varela@outlook.com
          </a>
        </div>
      </div>
    </Template>
  );
};
