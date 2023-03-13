import { Children, FC, ReactNode } from 'react';
import Refractor from 'react-refractor';
import typescript from 'refractor/lang/typescript.js';
import styles from './index.module.scss';

// register all used languages here
Refractor.registerLanguage(typescript);

function getRawText(children: ReactNode) {
  let text = '';

  Children.map(children, (child) => {
    if (typeof child === 'string') {
      text += child;
    }
  });

  return text;
}

const getWidth = (rawText: string) => {
  let max = 0;

  rawText.split('\n').forEach((chunk) => {
    if (chunk.length > max) {
      max = chunk.length;
    }
  });

  return max;
};

function textData(children: ReactNode): [string, number] {
  const text = getRawText(children);
  const count = (text.match(/\n/g) || []).length;
  return [text, count];
}

function arrayRange(start: number, stop: number, step: number) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
  );
}

type CodeProps = {
  children: ReactNode;
};
export const Code: FC<CodeProps> = ({ children }) => {
  const [rawText, lineCount] = textData(children);
  const markers = { start: 3, stop: 10 };
  const numberMarkers = arrayRange(markers.start, markers.stop, 1);

  const allNumbers = arrayRange(0, lineCount, 1);
  const refractorMarkers = allNumbers.map((i) => {
    const classes = [styles.line];
    if (numberMarkers.includes(i)) {
      classes.push(styles.marker);
    }
    return {
      line: i,
      className: classes.join(' '),
    };
  });

  const width = getWidth(rawText);
  const classes = [styles.box];
  classes.push(width < 70 ? styles.compact : styles.full);
  const className = classes.join(' ');

  return (
    <div>
      <div className={className}>
        <div className={styles.scrollHack}>
          <Refractor language="ts" value={rawText} markers={refractorMarkers} />
        </div>
      </div>
    </div>
  );
};
