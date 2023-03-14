import styles from './index.module.scss';

export const Footer = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.content}>
        <div className={styles.brand}>sainez.io</div>
        <div className={styles.nav}>
          <div className={styles.heading}>Nav</div>
          <div>Writing</div>
          <div>Me</div>
        </div>
        <div id={styles.links}>
          <div className={styles.heading}>Contact</div>
          <div>
            <a href="mailto:david@sainez.io">Email</a>
          </div>
          <div>
            <a href="https://twitter.com/davidsainez">Twitter</a>
          </div>
          <div>
            <a href="https://github.com/davidsainez">GitHub</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com">HackerNews</a>
          </div>
          <div>
            <a href="https://stackoverflow.com/user/">StackOverflow</a>
          </div>
        </div>
        <div className={styles.copyright}>© 2023 David Sainez</div>
      </div>
    </div>
  );
};
