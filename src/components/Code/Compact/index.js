import Refractor from 'react-refractor';
import { RiFileCopyLine } from 'react-icons/ri';
import styles from './index.module.scss';

export const CompactCode = ({ rawText, markers }) => {
  return (
    <div className={styles.box}>
      <Refractor language="ts" value={rawText} markers={markers} />
      <div className={styles.copy}>
        <RiFileCopyLine />
      </div>
    </div>
  );
};
