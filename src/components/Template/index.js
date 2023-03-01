import * as NextLink from 'next/link';
import styles from './index.module.scss';

//<div className={styles.container}>
//</div>
export const Template = ({ dark = false, children }) => {
  return (
    <div className={[styles.all, dark ? styles.dark : styles.light].join(' ')}>
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
  );
};
