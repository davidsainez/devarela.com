import * as NextLink from 'next/link';
import { RiArrowRight } from 'react-icons/ri';
import styles from './index.module.scss';

export const Card = ({ essay }) => {
  if (!essay) {
    return undefined;
  }

  return (
    <div className={styles.box}>
      <div className={styles.date}>{essay.formated_date}</div>
      <h2 className={styles.title}>{essay.title}</h2>
      <p className={styles.summary}>{essay.summary}</p>
      <NextLink className={styles.read} href={essay.href}>
        Read
      </NextLink>
    </div>
  );
};
