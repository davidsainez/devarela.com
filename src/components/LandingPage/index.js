import * as NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import { Grid, Column } from '~/components/Grid';
import { Template } from '~/components/Template';
import { Typewriter } from '~/components/Typewriter';
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
      <h1 className={styles.segmentHeading}>Welcome</h1>
      <p className={styles.about}>
        This site hosts a collection of{' '}
        <NextLink href="/essays" className={styles.link}>
          essays
        </NextLink>{' '}
        that explore mental models, software design, and web technology.
      </p>
      <p className={styles.about}>
        I write to pursue clarity. Good ideas don't spring out of the abyss.
        They are a product of constant refinement. I offer my writing here so
        that it may be of service to you as well.
      </p>
      <p className={styles.about}>
        Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do
        eiusmod *tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h2 className={styles.segmentHeading}>Selected Essays</h2>
      <Card essay={match(essays, PINNED[0])} />
      <Card essay={match(essays, PINNED[1])} />
      <h2 className={styles.segmentHeading}>Contact</h2>
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
    </Template>
  );
};

/*
export const LandingPage = ({ essays }) => {
  return (
    <>
      <NextSeo
        title={TITLE}
        description={DESCRIPTION}
        openGraph={{
          url: URL,
          title: TITLE,
          description: DESCRIPTION,
        }}
      />
      <Template path="/" gradient>
        <Grid>
          <Column
            sm={4}
            md={8}
            lg={{ offset: 4, span: 8 }}
            xlg={{ offset: 4, span: 8 }}
            max={{ offset: 4, span: 7 }}
          >
            <div className={styles.heading}>
              <h1>WELCOME</h1>
            </div>
            <p className={styles.copy}>
              This site hosts a collection of{' '}
              <NextLink href="/essays" className={styles.link}>
                essays
              </NextLink>{' '}
              that explore mental models, software design, and web technology.
            </p>
            <p className={styles.copy}>
              I write to pursue clarity. Good ideas don't spring out of the
              abyss. They are a product of constant refinement.
            </p>
            <p className={styles.copy}>
              I offer my writing here so that it may be of service to you as
              well.
            </p>
            <div className={styles.signature}>
              <p className={styles.copy}>— David</p>
            </div>
          </Column>
          <Column
            sm={4}
            md={8}
            lg={{ offset: 0, span: 6 }}
            xlg={{ offset: 0, span: 6 }}
            max={{ offset: 13, span: 3 }}
          >
            <Card essay={match(essays, PINNED[0])} />
          </Column>
        </Grid>

        <Column
          sm={4}
          md={6}
          lg={{ offset: 8, span: 4 }}
          xlg={{ offset: 8, span: 4 }}
          max={{ offset: 7, span: 3 }}
        >
          <Card essay={match(essays, PINNED[1])} />
        </Column>
        <Column
          sm={4}
          md={6}
          lg={{ offset: 10, span: 3 }}
          xlg={{ offset: 10, span: 3 }}
          max={{ offset: 10, span: 3 }}
        >
          <Card essay={match(essays, PINNED[2])} />
        </Column>
      </Template>
    </>
  );
};
*/
