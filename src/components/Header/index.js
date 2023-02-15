import { useState } from 'react';
import { useRouter } from 'next/router';
import { Link } from '../Link';
import { Button, IconButton, Column, Grid } from '@carbon/react';
import { Contact } from '../Contact';
import { MenuModal } from '../MenuModal';
import { Idea, Collaborate, Book, Menu } from '@carbon/icons-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Contact isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      <MenuModal
        items={[
          {
            text: 'Essays',
            icon: Book,
            onClick: () => router.push('/essays'),
          },
          {
            text: 'Contact',
            icon: Collaborate,
            onClick: () => setIsContactOpen(true),
          },
        ]}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />
      <Column lg={16} md={8} sm={4} className="header">
        <Grid>
          <Column
            lg={{ offset: 4, span: 2 }}
            sm={2}
            className="header__branding__box"
          >
            <Link href="/">
              <div className="header__branding">
                <Idea />
                <span>D.E. Varela</span>
              </div>
            </Link>
          </Column>
          <Column lg={{ offset: 6, span: 4 }} sm={0} className="header__nav">
            <Link href="/essays">Essays</Link>
          </Column>
          <Column
            lg={{ offset: 10, span: 2 }}
            sm={0}
            className="header__action"
          >
            <Button
              size="md"
              onClick={() => setIsContactOpen(true)}
              className="header__contact__button"
              renderIcon={Collaborate}
            >
              Contact
            </Button>
          </Column>
          <Column lg={0} sm={2} className="header__mobile__menu__column">
            <IconButton
              onClick={() => setIsMenuOpen(true)}
              className="header__mobile__menu__button"
            >
              <Menu />
            </IconButton>
          </Column>
        </Grid>
      </Column>
    </>
  );
};
