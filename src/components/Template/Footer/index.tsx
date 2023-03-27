import { Panel } from 'components/Panel';
import Link from 'next/link';
import styles from './index.module.scss';

export const Footer = () => {
  return (
    <Panel color={3} className={styles.panel}>
      <div className={styles.content}>
        <div className={styles.brand}>sainez.io</div>
        <div className={styles.nav}>
          <div className={styles.heading}>Navigation</div>
          <Link href="/">Writing</Link>
          <Link href="/me">Me</Link>
        </div>
        <div id={styles.links}>
          <div className={styles.heading}>Contact</div>
          <a id={styles.linkItem} href="mailto:david@sainez.io">
            Email
          </a>
          <a id={styles.linkItem} href="https://twitter.com/davidsainez">
            Twitter
          </a>
          <a id={styles.linkItem} href="https://github.com/davidsainez">
            GitHub
          </a>
          <a
            id={styles.linkItem}
            href="https://news.ycombinator.com/user?id=sainez"
          >
            HackerNews
          </a>
          <a
            id={styles.linkItem}
            href="https://stackoverflow.com/users/7077117/david-sainez"
          >
            StackOverflow
          </a>
        </div>
        <div className={styles.copyright}>© 2023 David Sainez</div>
      </div>
    </Panel>
  );
};
