import { FC } from 'react';
import Link from 'next/link';
import { useInView, animated } from '@react-spring/web';
import { RiArrowRightLine } from 'react-icons/ri';
import styles from './index.module.scss';

type IndexCardProps = {
  href: string;
  title: string;
  date: string;
  summary: string;
  tags: Array<string>;
};

export const IndexCard: FC<IndexCardProps> = ({
  href,
  title,
  date,
  summary,
  tags,
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

  const Tags = tags.map((tag, i) => (
    <>
      <span key={tag} className={styles.tag}>
        {tag}
      </span>
      {i < tags.length - 1 && '·'}
    </>
  ));

  return (
    <animated.div className={styles.box} ref={ref} style={springs}>
      <span className={styles.date}>{date}</span>
      <div className={styles.meta}>
        <div className={styles.tags}>{Tags}</div>
      </div>
      <h2 id={styles.title}>
        <Link href={href}>{title}</Link>
      </h2>
      <p className={styles.description}>{summary}</p>
      <Link className={styles.read} href={href}>
        Read
        <RiArrowRightLine className={styles.accent} />
      </Link>
    </animated.div>
  );
};
