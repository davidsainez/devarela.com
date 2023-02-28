import Refractor from 'react-refractor';
import { RiFileCopyLine } from 'react-icons/ri';
import styles from './index.module.scss';

const LineNumbers = ({ count, markers }) => {
  const numbers = [...Array(count)].map((_, i) => {
    const classes = [styles.number];
    if (markers.includes(i + 1)) {
      classes.push(styles.markedNumber);
    }
    return (
      <span className={classes.join(' ')} key={i + 1}>
        {i + 1}
      </span>
    );
  });

  return <div className={styles.numbersBox}>{numbers}</div>;
};

export const FullCode = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.button}>
          <RiFileCopyLine />
        </div>
      </div>
      <div className={styles.codeBox}>
        <div className={styles.codeContent}>
          <LineNumbers count={lineCount} markers={markedNumbers}>
            {children}
          </LineNumbers>
          <div className={styles.codeScrollFrame}>
            <div className={styles.scrollHack}>
              <Refractor
                language="ts"
                value={rawText}
                markers={refractorMarkers}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
