import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

type HeadingProps = {
  children: ReactNode;
};

export const Heading: FC<HeadingProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{children}</h2>
    </div>
  );
};

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>{children}</p>
    </div>
  );
};

type ListProps = {
  children: ReactNode;
};

export const List: FC<ListProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};
