import * as NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import { Theme, ClickableTile, Grid, Column } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { Typewriter } from '../Typewriter';

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
      <Column sm={4} md={8} lg={16} xlg={16} max={16}>
        <Grid>
          <Column
            sm={4}
            md={6}
            lg={{ offset: 4, span: 6 }}
            xlg={{ offset: 4, span: 6 }}
            max={{ offset: 5, span: 6 }}
          >
            <h1 className="landing__heading">
              A collection of essays exploring mental models, software design,
              and {<Typewriter text="web technology." />}
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
            <p className="landing__copy">
              Nothing drives clarity of thought more deeply than communication.
              I welcome you to join me in this pursuit.
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
                <ClickableTile className="landing__action">
                  Continue to essays <ArrowRight />
                </ClickableTile>
              </NextLink>
            </Theme>
          </Column>
        </Grid>
      </Column>
    </>
  );
};
