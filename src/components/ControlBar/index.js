import * as NextLink from 'next/link';
import { Grid, Column } from '~/components/Grid';
import { Menu } from './Menu';
import { Social } from './Social';
import { RiMenuLine } from 'react-icons/ri';
import styles from './controlBar.module.scss';

export const Sidebar = ({ path }) => {
  return (
    <div className={styles.bleed}>
      <Grid className={styles.box}>
        <Column
          sm={4}
          md={8}
          lg={{ offset: 1, span: 2 }}
          xlg={{ offset: 1, span: 2 }}
          max={{ offset: 1, span: 2 }}
        >
          <NextLink href="/" className={styles.branding}>
            D.E. Varela
          </NextLink>
        </Column>
        <Column
          sm={4}
          md={8}
          lg={{ offset: 3, span: 12 }}
          xlg={{ offset: 3, span: 12 }}
          max={{ offset: 3, span: 12 }}
        >
          <Menu path={path} />
        </Column>
      </Grid>
    </div>
  );
};

/*
export const Sidebar = ({ path }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.brandingBox}>
          <NextLink href="/" className={styles.branding}>
            DV
          </NextLink>
        </div>
        <div className={styles.menu}>
          <Menu path={path} />
        </div>
        <button className={styles.mobile}>
          <RiMenuLine />
        </button>
      </div>
      <div className={styles.footer}>
        <Social />
        <div className={styles.legal}>© David Varela 2020-2023</div>
      </div>
    </div>
  );
};
*/
