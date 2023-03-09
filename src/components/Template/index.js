import * as NextLink from 'next/link';
import { Hook } from './Hook';
import { Footer } from './Footer';
import styles from './index.module.scss';

export const Template = ({ children }) => {
  return (
    <>
      <div className={styles.all}>
        <div className={styles.headerPanel}>
          <div className={styles.header}>
            <div className={styles.info}>
              <span className={styles.name}>
                <NextLink href="/">sainez.io</NextLink>
              </span>
            </div>
            <div className={styles.nav}>
              <NextLink href="/">Writing</NextLink>
              <NextLink href="/me">Me</NextLink>
            </div>
          </div>
        </div>
        {children}
        <Hook />
      </div>
      <Footer />
    </>
  );
};
