import { useState } from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@carbon/react';
import { IconButton as UIIconButton } from '~/components/Button';
import { RiChat2Line, RiArticleLine, RiMenuLine } from 'react-icons/ri';
import { Link } from '~/components/Link';
import { Contact } from '~/components/Contact';
import { MenuModal } from '~/components/MenuModal';
import { Grid, Column } from '~/components/Grid';
import styles from './header.module.scss';
//branding icons: AssemblyCluster

const MobileMenu = ({ isOpen, setIsOpen, setIsContactOpen }) => {
  const router = useRouter();

  return (
    <MenuModal
      items={[
        {
          text: 'Essays',
          icon: RiArticleLine,
          onClick: () => router.push('/essays'),
        },
        {
          text: 'Contact',
          icon: RiChat2Line,
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
      <div className={styles.branding}>
        <span>D.E. Varela</span>
      </div>
    </Link>
  );
};

const ContactButton = ({ setIsContactOpen }) => {
  return (
    <UIIconButton icon={RiChat2Line} onPress={() => setIsContactOpen(true)}>
      Contact
    </UIIconButton>
  );
};

const MobileMenuButton = ({ setIsMenuOpen }) => {
  return (
    <IconButton
      label="menu"
      kind="secondary"
      onClick={() => setIsMenuOpen(true)}
    >
      <RiMenuLine />
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
      <div className={styles.box}>
        <Grid>
          <Column
            className={styles.branding_track}
            sm={2}
            md={2}
            lg={{ offset: 4, span: 2 }}
            xlg={{ offset: 4, span: 2 }}
            max={{ offset: 5, span: 2 }}
          >
            <Branding />
          </Column>
          <Column
            className={styles.nav_track}
            sm={0}
            md={4}
            lg={{ offset: 6, span: 4 }}
            xlg={{ offset: 6, span: 4 }}
            max={{ offset: 7, span: 2 }}
          >
            <Link href="/essays">Essays</Link>
          </Column>
          <Column
            className={styles.contact_track}
            sm={0}
            md={2}
            lg={{ offset: 10, span: 2 }}
            xlg={{ offset: 10, span: 2 }}
            max={{ offset: 9, span: 2 }}
          >
            <ContactButton setIsContactOpen={setIsContactOpen} />
          </Column>
          <Column
            className={styles.mobile_menu_track}
            sm={2}
            md={2}
            lg={0}
            xlg={0}
            max={0}
          >
            <MobileMenuButton setIsMenuOpen={setIsMenuOpen} />
          </Column>
        </Grid>
      </div>
    </>
  );
};
