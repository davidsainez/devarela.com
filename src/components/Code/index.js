import React from 'react';
import Refractor from 'react-refractor';
import typescript from 'refractor/lang/typescript.js';
import { CompactCode } from './Compact';
import styles from './code.module.scss';
import { RiFileCopyLine } from 'react-icons/ri';

// register all used languages here
Refractor.registerLanguage(typescript);

function getRawText(children) {
  let text = '';

  React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      text += child;
    }
  });

  return text;
}

const getWidth = (rawText) => {
  let max = 0;

  rawText.split('\n').forEach((chunk) => {
    if (chunk.length > max) {
      max = chunk.length;
    }
  });

  console.log(max);
  return max;
};

function textData(children) {
  const text = getRawText(children);
  const count = (text.match(/\n/g) || []).length;
  return [text, count];
}

function arrayRange(start, stop, step) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
}

export const Code = ({ children }) => {
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

  return (
    <div className={styles.box}>
      <div className={styles.controls}>
        <button className={styles.button} type="button">
          Copy Text <RiFileCopyLine />
        </button>
      </div>
      <CompactCode
        compact={width < 60}
        rawText={rawText}
        markers={refractorMarkers}
      />
    </div>
  );
};
