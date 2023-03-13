import { FC } from 'react';
import Link from 'next/link';
import { useInView, animated } from '@react-spring/web';
import styles from './index.module.scss';

type IndexCardProps = {
  href: string;
  title: string;
  date: string;
  summary: string;
};

export const IndexCard: FC<IndexCardProps> = ({
  href,
  title,
  date,
  summary,
}) => {
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
      <h2 id={styles.title}>
        <Link href={href}>{title}</Link>
      </h2>
      <p className={styles.summary}>{summary}</p>
    </animated.div>
  );
};
