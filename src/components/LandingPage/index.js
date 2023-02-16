import * as NextLink from 'next/link';
//import { useState, useEffect } from 'react';
import { Theme, ClickableTile, Grid, Column } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

/*
const SocialLink = ({ href, text, children }) => {
  return (
    <a href={href} className="landing__link cds--link">
      <span className="landing__link__icon">{children}</span>
      {text}
    </a>
  );
};

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const text = 'D.E. Varela';

  useEffect(() => {
    const interval = setInterval(
      () => setIndex(index === text.length ? text.length : index + 1),
      250 + Math.floor(Math.random() * 300)
    );
    return () => clearInterval(interval);
  }, [index]);

  return (
    <h1 className="landing__title">
      <span className="landing__branding" style={{ color: 'black' }}>
        {text.slice(0, index)}
      </span>
      <span className="landing__branding__cursor">|</span>
      <span className="landing__branding" style={{ color: 'white' }}>
        {text.slice(index)}
      </span>
    </h1>
  );
};

const LandingPageCard = () => {
  return (
      <div className="landing__card">
        <div className="landing__heading">
          <Typewriter />
          <p className="landing__quote cds--type-serif">
            What I cannot create, I do not understand
          </p>
        </div>
        <div className="landing__meta">
          <Stack className="landing__social">
            <SocialLink
              text="@devarela_com"
              href="https://twitter.com/devarela_com"
            >
              <LogoTwitter />
            </SocialLink>
            <SocialLink text="@de-varela" href="https://github.com/de-varela">
              <LogoGithub />
            </SocialLink>
            <SocialLink
              text="de-varela@outlook.com"
              href="mailto:de-varela@outlook.com"
            >
              <Email />
            </SocialLink>
          </Stack>
          <div className="landing__action">
            <Link href="/essays" icon={ArrowRight}>
              Essays
            </Link>
          </div>
        </div>
      </div>
  );
};
*/

export const LandingPage = () => {
  return (
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
            A collection of essays exploring software design, web technology,
            and communication.
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
              <ClickableTile className="landing__action">
                Continue to essays <ArrowRight />
              </ClickableTile>
            </NextLink>
          </Theme>
        </Column>
      </Grid>
    </Column>
  );
};
