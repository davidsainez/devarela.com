import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { Hook } from './Hook';
import { Footer } from './Footer';
import styles from './index.module.scss';

type TemplateProps = {
  children: ReactNode;
};

export const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <div className={styles.all}>
      <div className={styles.headerPanel}>
        <div className={styles.header}>
          <div className={styles.info}>
            <span className={styles.name}>
              <Link href="/">sainez.io</Link>
            </span>
          </div>
          <div className={styles.nav}>
            <Link href="/">Writing</Link>
            <Link href="/me">Me</Link>
          </div>
        </div>
      </div>
      {children}
      <Hook />
      <Footer />
    </div>
  );
};
