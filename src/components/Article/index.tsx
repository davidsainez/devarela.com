import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

type HeadingProps = {
  children: ReactNode;
};

export const Heading: FC<HeadingProps> = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};
