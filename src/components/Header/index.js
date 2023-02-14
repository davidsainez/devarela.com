import { Link } from '../Link';
import { Column, Grid } from '@carbon/react';
import { Contact } from '../Contact';

export const Header = () => {
  return (
    <Column lg={16} md={8} sm={4} className="header">
      <Grid>
        <Column
          lg={{ offset: 4, span: 2 }}
          sm={4}
          className="header__branding__box"
        >
          <Link href="/">
            <span className="header__branding">D.E. Varela</span>
          </Link>
        </Column>
        <Column lg={{ offset: 6, span: 4 }} sm={2} className="header__nav">
          <Link href="/essays">Essays</Link>
        </Column>
        <Column lg={{ offset: 10, span: 2 }} sm={2} className="header__action">
          <Contact />
        </Column>
      </Grid>
    </Column>
  );
};
