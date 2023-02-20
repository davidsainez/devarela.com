import styles from './tag.module.scss';

export const Tag = ({ children }) => {
  return <div className={styles.tag}>{children}</div>;
};
