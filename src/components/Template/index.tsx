import { FC, ReactNode } from 'react';
import { Header } from './Header';
import { Hook } from './Hook';
import { Footer } from './Footer';
import styles from './index.module.scss';

type TemplateProps = {
  children: ReactNode;
};

export const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <div className={styles.all}>
      <Header />
      {children}
      <Hook />
      <Footer />
    </div>
  );
};
