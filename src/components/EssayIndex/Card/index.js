import * as NextLink from 'next/link';
import styles from './index.module.scss';

export const Card = ({ href, title, date, summary }) => {
  return (
    <NextLink href={href} className={styles.box}>
      <span className={styles.date}>{date}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.summary}>
        <p>{summary}</p>
      </div>
    </NextLink>
  );
};
