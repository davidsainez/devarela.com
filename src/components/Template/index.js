import * as NextLink from 'next/link';
import { Sidebar } from '~/components/ControlBar';
import { Grid, Column } from '~/components/Grid';
import styles from './index.module.scss';

export const Template = ({ dark = false, children }) => {
  return (
    <div className={[styles.all, dark ? styles.dark : styles.light].join(' ')}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.info}>
            <span className={styles.name}>
              <NextLink href="/">David E Varela</NextLink>
            </span>
            <span>Software Engineer</span>
            <span>San Jose, CA</span>
          </div>
          <div className={styles.nav}>
            <NextLink href="/essays">Essays</NextLink>
            <NextLink href="/me">Me</NextLink>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

/*
export const Template = ({ path, gradient = false, children }) => {
  return (
    <>
      <div className={styles.background}>
        {gradient && (
          <div className={styles.isolate}>
            <div className={styles.gradient} />
            <div className={styles.solid} />
            <div className={styles.overlay} />
          </div>
        )}
      </div>
      <div className={styles.stack}>
        <Sidebar path={path} />
        <div>{children}</div>
      </div>
    </>
  );
};
*/
