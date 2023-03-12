import styles from './index.module.scss';

export const Hook = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.name}>David Sainez</span>
          <span>david@sainez.io</span>
          <span>San Jose, CA</span>
        </div>
        <div className={styles.connect}>
          <h2 className={styles.title}>Interested in working together?</h2>
          <span className={styles.sub}>Let&apos;s chat.</span>
        </div>
      </div>
    </div>
  );
};
