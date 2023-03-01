import * as NextLink from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';
import styles from './index.module.scss';

export const Card = ({ href, title, date, summary }) => {
  return (
    <div className={styles.box}>
      <span className={styles.date}>{date}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.summary}>
        <p>{summary}</p>
      </div>
      <NextLink href={href} className={styles.read}>
        Read <RiArrowRightLine />
      </NextLink>
    </div>
  );
};
