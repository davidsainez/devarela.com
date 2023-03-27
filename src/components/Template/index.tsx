import { FC, ReactNode } from 'react';
import { Header } from './Header';
import { Hook } from './Hook';
import { Footer } from './Footer';
import styles from './index.module.scss';

type TemplateProps = {
  white?: boolean;
  children: ReactNode;
};

export const Template: FC<TemplateProps> = ({ white = true, children }) => {
  return (
    <div className={styles.all}>
      <Header white={white} />
      {children}
      <Hook />
      <Footer />
    </div>
  );
};
