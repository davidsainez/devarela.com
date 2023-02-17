import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, IconButton, Column, Grid } from '@carbon/react';
import { AssemblyCluster, Forum, Book, Menu } from '@carbon/icons-react';
import { Link } from '~/components/Link';
import { Contact } from '~/components/Contact';
import { MenuModal } from '~/components/MenuModal';
//branding icons: Idea, ModelAlt

const MobileMenu = ({ isOpen, setIsOpen, setIsContactOpen }) => {
  const router = useRouter();

  return (
    <MenuModal
      items={[
        {
          text: 'Essays',
          icon: Book,
          onClick: () => router.push('/essays'),
        },
        {
          text: 'Contact',
          icon: Forum,
          onClick: () => setIsContactOpen(true),
        },
      ]}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};

const Branding = () => {
  return (
    <Link href="/">
      <div className="header__branding">
        <AssemblyCluster />
        <span>D.E. Varela</span>
      </div>
    </Link>
  );
};

const ContactButton = ({ setIsContactOpen }) => {
  return (
    <Button
      size="md"
      onClick={() => setIsContactOpen(true)}
      className="header__contact__button"
      renderIcon={Forum}
    >
      Contact
    </Button>
  );
};

const MobileMenuButton = ({ setIsMenuOpen }) => {
  return (
    <IconButton
      label="menu"
      kind="secondary"
      onClick={() => setIsMenuOpen(true)}
    >
      <Menu />
    </IconButton>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Contact isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      <MobileMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        setIsContactOpen={setIsContactOpen}
      />
      <Column className="header" sm={4} md={8} lg={16} xlg={16} max={16}>
        <Grid>
          <Column
            className="header__branding__track"
            sm={2}
            md={2}
            lg={{ offset: 4, span: 2 }}
            xlg={{ offset: 4, span: 2 }}
            max={{ offset: 5, span: 2 }}
          >
            <Branding />
          </Column>
          <Column
            className="header__nav"
            sm={0}
            md={4}
            lg={{ offset: 6, span: 4 }}
            xlg={{ offset: 6, span: 4 }}
            max={{ offset: 7, span: 2 }}
          >
            <Link href="/essays">Essays</Link>
          </Column>
          <Column
            className="header__action"
            sm={0}
            md={2}
            lg={{ offset: 10, span: 2 }}
            xlg={{ offset: 10, span: 2 }}
            max={{ offset: 9, span: 2 }}
          >
            <ContactButton setIsContactOpen={setIsContactOpen} />
          </Column>
          <Column
            className="header__mobile__menu__column"
            sm={2}
            md={2}
            lg={0}
            xlg={0}
            max={0}
          >
            <MobileMenuButton setIsMenuOpen={setIsMenuOpen} />
          </Column>
        </Grid>
      </Column>
    </>
  );
};
