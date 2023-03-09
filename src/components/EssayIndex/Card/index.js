import * as NextLink from 'next/link';
//import { Waypoint } from 'react-waypoint';
import styles from './index.module.scss';

export const Card = ({ href, title, date, summary, tags }) => {
  const last = tags.length;

  return (
    <div className={styles.box}>
      <div className={styles.meta}>
        <span className={styles.date}>{date}</span>
        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <>
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
              {i < last - 1 && '·'}
            </>
          ))}
        </div>
      </div>
      <h2 className={styles.title}>
        <NextLink href={href}>{title}</NextLink>
      </h2>
      <p className={styles.summary}>{summary}</p>
    </div>
  );
};
