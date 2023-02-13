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
  const text = 'D.E.Varela';

  useEffect(() => {
    const interval = setInterval(
      () => setIndex(index === text.length ? text.length : index + 1),
      250 + Math.floor(Math.random() * 300)
    );
    return () => clearInterval(interval);
  }, [index]);

  const visible = text
    .slice(0, index)
    .split('')
    .map((letter, i) => (
      <span
        key={i}
        style={{ color: 'black' }}
        className={i < 4 ? 'landing__branding__pre' : 'landing__branding__post'}
      >
        {letter}
      </span>
    ));
  const invisible = text
    .slice(index, text.length)
    .split('')
    .map((letter, i) => (
      <span
        key={index + i}
        style={{ color: 'white' }}
        className={i < 4 ? 'landing__branding__pre' : 'landing__branding__post'}
      >
        {letter}
      </span>
    ));

  return (
    <h1 className="landing__title">
      {visible}
      <span className="landing__branding__cursor">|</span>
      {invisible}
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
        <Stack gap={2} className="landing__social">
          <SocialLink
            text="de-varela@outlook.com"
            href="mailto:de-varela@outlook.com"
          >
            <Email />
          </SocialLink>
          <SocialLink
            text="@devarela_com"
            href="https://twitter.com/devarela_com"
          >
            <LogoTwitter />
          </SocialLink>
          <SocialLink text="@de-varela" href="https://github.com/de-varela">
            <LogoGithub />
          </SocialLink>
        </Stack>
        <Link href="/essays" icon={ArrowRight}>
          Essays
        </Link>
      </div>
    </div>
  );
};

export const LandingPage = () => {
  return (
    <div className="landing__layout">
      <Grid fullWidth>
        <Column lg={16}>
          <Grid fullWidth>
            <Column lg={{ offset: 4, span: 8 }}>
              <LandingPageCard />
            </Column>
          </Grid>
        </Column>
      </Grid>
    </div>
  );
};
