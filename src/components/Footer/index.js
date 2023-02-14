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
        @devarela_com
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
    <Column lg={16} md={8} sm={4} className="footer">
      <Grid>
        <Column md={4} lg={{ offset: 4, span: 2 }} sm={4}>
          <Link href="/">
            <span className="footer__branding">D.E. Varela</span>
          </Link>
        </Column>
        <Column md={4} lg={{ offset: 6, span: 2 }} sm={4}>
          <Socials />
        </Column>
        <Column md={4} lg={{ offset: 10, span: 2 }} sm={4}>
          <p className="footer__copy">© 2020-2023 David E. Varela</p>
        </Column>
      </Grid>
    </Column>
  );
};
