import Link from 'next/link';
import styles from './index.module.scss';

export const Header = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/">sainez.io</Link>
        </div>
        <div className={styles.nav}>
          <Link href="/">Writing</Link>
          <Link href="/me">Me</Link>
        </div>
      </div>
    </div>
  );
};
