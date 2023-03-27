import { Panel } from 'components/Panel';
import styles from './index.module.scss';

export const Hook = () => {
  return (
    <Panel color={2}>
      <div className={styles.container}>
        <div className={styles.connect}>
          <h2 className={styles.title}>Interested in working together?</h2>
          <span className={styles.sub}>Let&apos;s chat.</span>
        </div>
        <div className={styles.info}>
          <span>$ contact-info --full</span>
          <span className={styles.name}>David Sainez</span>
          <span>San Jose, CA</span>
          <span>david@sainez.io</span>
          <span>@davidsainez</span>
        </div>
      </div>
    </Panel>
  );
};
