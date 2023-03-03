import * as NextLink from 'next/link';
import styles from './index.module.scss';

export const Card = ({ href, title, date, summary, tags }) => {
  return (
    <NextLink href={href} className={styles.box}>
      <span className={styles.date}>{date}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </NextLink>
  );
};
