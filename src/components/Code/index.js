import React from 'react';
import { Grid, Column } from '~/components/Grid';
import Refractor from 'react-refractor';
import typescript from 'refractor/lang/typescript.js';
import { RiFileCopyLine } from 'react-icons/ri';

Refractor.registerLanguage(typescript);

import styles from './code.module.scss';

const getRawText = (children) => {
  let text = '';

  React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      text += child;
    }
  });

  return text;
};

const textData = (children) => {
  const text = getRawText(children);
  const count = (text.match(/\n/g) || []).length;
  return [text, count];
};

const LineNumbers = ({ count, markers }) => {
  const numbers = [...Array(count)].map((_, i) => {
    const classes = [styles.number];
    if (markers.includes(i + 1)) {
      console.log(i);
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

/*
export const InlineCode = ({ content }) => {
  return <CodeSnippet type="inline">{content}</CodeSnippet>;
};
*/

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const Code = ({ children }) => {
  const [rawText, lineCount] = textData(children);
  const markers = { start: 3, stop: 10 };
  const markedNumbers = arrayRange(markers.start, markers.stop, 1);
  const allNumbers = arrayRange(0, lineCount, 1);
  const refractorMarkers = allNumbers.map((i) => {
    const classes = [styles.line];
    if (markedNumbers.includes(i)) {
      classes.push(styles.marker);
    }
    return {
      line: i,
      className: classes.join(' '),
    };
  });

  return (
    <Grid>
      <Column
        sm={4}
        md={8}
        lg={{ offset: 4, span: 8 }}
        xlg={{ offset: 4, span: 8 }}
        max={{ offset: 5, span: 6 }}
      >
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
      </Column>
    </Grid>
  );
};
