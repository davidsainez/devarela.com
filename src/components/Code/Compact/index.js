import Refractor from 'react-refractor';
import styles from './index.module.scss';

export const CompactCode = ({ compact, rawText, markers }) => {
  const classes = [styles.box];
  classes.push(compact ? styles.compact : styles.full);

  return (
    <div className={classes.join(' ')}>
      <Refractor language="ts" value={rawText} markers={markers} />
    </div>
  );
};
