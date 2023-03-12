import Link from 'next/link';
import { useInView, animated } from '@react-spring/web';
import styles from './index.module.scss';

export const IndexCard = ({ href, title, date, summary }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      once: true,
    }
  );

  return (
    <animated.div className={styles.box} ref={ref} style={springs}>
      <div className={styles.meta}>
        <span className={styles.date}>{date}</span>
      </div>
      <h2 className={styles.title}>
        <Link href={href}>{title}</Link>
      </h2>
      <p className={styles.summary}>{summary}</p>
      {/*
      <div className={styles.meta}>
        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <>
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
              {i < tags.length - 1 && '·'}
            </>
          ))}
        </div>
      </div>
       */}
    </animated.div>
  );
};
