import { Link } from '../Link';
import {
  Column,
  ContainedList,
  ContainedListItem,
  Grid,
  Link as CarbonLink,
} from '@carbon/react';
import {
  LogoTwitter,
  LogoGithub,
  Email,
  LetterYy,
  LetterSs,
} from '@carbon/icons-react';

const Socials = () => {
  return (
    <ContainedList label="Social" isInset>
      <ContainedListItem>
        <CarbonLink href="https://www.twitter.com" renderIcon={LogoTwitter}>
          Twitter
        </CarbonLink>
      </ContainedListItem>
      <ContainedListItem>
        <CarbonLink href="https://www.github.com" renderIcon={LogoGithub}>
          GitHub
        </CarbonLink>
      </ContainedListItem>
      <ContainedListItem>
        <CarbonLink
          href="https://www.news.ycombinator.com"
          renderIcon={LetterYy}
        >
          HackerNews
        </CarbonLink>
      </ContainedListItem>
      <ContainedListItem>
        <CarbonLink href="https://www.stackoverflow.com" renderIcon={LetterSs}>
          Stackoverflow
        </CarbonLink>
      </ContainedListItem>
      <ContainedListItem>
        <CarbonLink href="https://google.com" renderIcon={Email}>
          Email
        </CarbonLink>
      </ContainedListItem>
    </ContainedList>
  );
};

export const Footer = () => {
  return (
    <Column lg={16} md={8} sm={4} className="footer">
      <Grid>
        <Column md={4} lg={{ offset: 4, span: 2 }} sm={4}>
          <Link href="/">
            <span className="footer__branding__pre">D.E.</span>
            <span className="footer__branding__emphasis">Varela</span>
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
