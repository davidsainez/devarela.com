import { Link } from '../Link';
import { Column, Stack, Grid, Link as CarbonLink } from '@carbon/react';
import { LogoTwitter, LogoGithub, Email } from '@carbon/icons-react';

const Socials = () => {
  return (
    <Stack>
      <CarbonLink
        href="https://twitter.com/devarela_com"
        className="footer__social__link"
      >
        <LogoTwitter />
        @_de_varela
      </CarbonLink>
      <CarbonLink
        href="https://github.com/de-varela"
        className="footer__social__link"
      >
        <LogoGithub />
        @de-varela
      </CarbonLink>
      <CarbonLink
        href="mailto:de-varela@outlook.com"
        className="footer__social__link"
      >
        <Email />
        de-varela@outlook.com
      </CarbonLink>
    </Stack>
  );
};

export const Footer = () => {
  return (
    <Column sm={4} md={8} lg={16} xlg={16} max={16}>
      <Grid className="footer">
        <Column
          sm={4}
          md={2}
          lg={{ offset: 4, span: 2 }}
          xlg={{ offset: 4, span: 2 }}
          max={{ offset: 5, span: 2 }}
        >
          <Link href="/">
            <span className="footer__branding">D.E. Varela</span>
          </Link>
        </Column>
        <Column
          sm={4}
          md={4}
          lg={{ offset: 6, span: 4 }}
          xlg={{ offset: 6, span: 4 }}
          max={{ offset: 7, span: 2 }}
        >
          <Socials />
        </Column>
        <Column
          sm={4}
          md={2}
          lg={{ offset: 10, span: 2 }}
          xlg={{ offset: 10, span: 2 }}
          max={{ offset: 9, span: 2 }}
        >
          <p className="footer__copy">© 2020-2023 David E. Varela</p>
        </Column>
      </Grid>
    </Column>
  );
};
