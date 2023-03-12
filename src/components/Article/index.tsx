import styles from './index.module.scss';

export const Heading = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export const Paragraph = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};
