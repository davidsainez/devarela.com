import { useState, useEffect } from 'react';
import { Stack, Grid, Column } from '@carbon/react';
import { Link } from '../Link';
import {
  ArrowRight,
  LogoTwitter,
  LogoGithub,
  Email,
} from '@carbon/icons-react';

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

export const LandingPage = () => {
  return (
    <div className="landing__layout">
      <Grid fullWidth className="landing__grid">
        <Column lg={{ offset: 4, span: 8 }} sm={4} className="landing__track">
          <LandingPageCard />
        </Column>
      </Grid>
    </div>
  );
};
