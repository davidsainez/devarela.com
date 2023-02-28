import React from 'react';
import { Grid, Column } from '~/components/Grid';
import Refractor from 'react-refractor';
import typescript from 'refractor/lang/typescript.js';
import { CompactCode } from './Compact';
import { FullCode } from './Full';
import styles from './code.module.scss';

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

const Inline = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

const Expanded = ({ children }) => {
  return (
    <Grid>
      <Column
        className={styles.box}
        sm={4}
        md={{ offset: 1, span: 6 }}
        lg={{ offset: 2, span: 11 }}
        xlg={{ offset: 2, span: 11 }}
        max={{ offset: 2, span: 11 }}
      >
        {children}
      </Column>
    </Grid>
  );
};

const MAX_LENGTH = 56;

export const Code = ({ compact = true, children }) => {
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

  const Layout = compact ? Inline : Expanded;
  let view;
  if (compact) {
    view = <CompactCode rawText={rawText} markers={refractorMarkers} />;
  } else {
    view = (
      <FullCode
        rawText={rawText}
        numberMarkers={numberMarkers}
        refractorMarkers={refractorMarkers}
      />
    );
  }

  return <Layout>{view}</Layout>;
};
