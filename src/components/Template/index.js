import * as NextLink from 'next/link';
import styles from './index.module.scss';
import bg from './template.module.scss';

export const Template = ({ color = false, children }) => {
  return (
    <>
      {color && (
        <div className={bg.background}>
          <div className={bg.solid} />
          <div className={bg.gradient} />
        </div>
      )}
      <div className={styles.all}>
        <div className={styles.header}>
          <div className={styles.info}>
            <span className={styles.name}>
              <NextLink href="/">David E Varela</NextLink>
            </span>
            <span>Software Engineer</span>
            <span>San Jose, CA</span>
          </div>
          <div className={styles.nav}>
            <NextLink href="/">Essays</NextLink>
            <NextLink href="/me">Me</NextLink>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
