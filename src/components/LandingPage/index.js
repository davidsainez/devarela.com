import * as NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import { Theme, ClickableTile } from '@carbon/react';
import { RiArrowRightLine } from 'react-icons/ri';
import { Grid, Column } from '~/components/Grid';
import { Typewriter } from '~/components/Typewriter';
import styles from './landingPage.module.scss';

const TITLE = 'D.E. Varela';
const URL = 'devarela.com';
const DESCRIPTION = `
D.E. Varela's collection of essays exploring mental models, software design, and web technology.
`;

export const LandingPage = () => {
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
      <Grid>
        <Column
          sm={4}
          md={6}
          lg={{ offset: 4, span: 6 }}
          xlg={{ offset: 4, span: 6 }}
          max={{ offset: 5, span: 6 }}
        >
          <h1 className={styles.heading}>
            A collection of essays exploring mental models, software design, and{' '}
            {<Typewriter text="web technology." />}
          </h1>
        </Column>
      </Grid>
      <Grid>
        <Column
          sm={4}
          md={4}
          lg={{ offset: 4, span: 6 }}
          xlg={{ offset: 4, span: 6 }}
          max={{ offset: 5, span: 4 }}
        >
          <p className={styles.copy}>
            Nothing drives clarity of thought more deeply than communication. I
            welcome you to join me in this pursuit.
          </p>
        </Column>
      </Grid>
      <Grid>
        <Column
          sm={4}
          md={4}
          lg={{ offset: 4, span: 4 }}
          xlg={{ offset: 4, span: 4 }}
          max={{ offset: 5, span: 2 }}
        >
          <Theme theme="g100">
            <NextLink href="/essays" legacyBehavior passHref>
              <ClickableTile className={styles.cta}>
                Essays <RiArrowRightLine />
              </ClickableTile>
            </NextLink>
          </Theme>
        </Column>
      </Grid>
    </>
  );
};
