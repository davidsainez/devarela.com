import { cj } from '~/components/Utilities';
import {
  RiGithubLine,
  RiMailLine,
  RiTwitterLine,
  RiStackOverflowLine,
} from 'react-icons/ri';
import { DiHackernews } from 'react-icons/di';
import styles from './index.module.scss';

export const Social = () => {
  return (
    <div className={styles.box}>
      <a
        href="https://twitter.com/varelabuilds"
        className={cj(styles.item, styles.twitter)}
      >
        <RiTwitterLine />
      </a>
      <a
        href="https://github.com/de-varela"
        className={cj(styles.item, styles.github)}
      >
        <RiGithubLine />
      </a>
      <a
        href="mailto:de-varela@outlook.com"
        className={cj(styles.item, styles.mail)}
      >
        <RiMailLine />
      </a>
      <a
        href="https://stackoverflow.com/users/7077117"
        className={cj(styles.item, styles.stackoverflow)}
      >
        <RiStackOverflowLine />
      </a>
      <a
        href="https://news.ycombinator.com/user?id=davidvarela_us"
        className={cj(styles.item, styles.hackernews)}
      >
        <DiHackernews />
      </a>
    </div>
  );
};
