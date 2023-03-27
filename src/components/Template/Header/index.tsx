import { FC } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

type HeaderProps = {
  white: boolean;
};

export const Header: FC<HeaderProps> = ({ white }) => {
  return (
    <div className={white ? styles.whitePanel : styles.colorPanel}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/">sainez</Link>
        </div>
        <div className={styles.nav}>
          <Link href="/">Writing</Link>
          <Link href="/me">Me</Link>
        </div>
      </div>
    </div>
  );
};
