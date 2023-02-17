import { Grid, Column } from '@carbon/react';
import styles from './article.module.scss';

export const Heading = ({ children }) => {
  return (
    <Grid>
      <Column
        sm={4}
        md={6}
        lg={{ offset: 4, span: 6 }}
        xlg={{ offset: 4, span: 6 }}
        max={{ offset: 5, span: 6 }}
      >
        <h2 className={styles.heading}>{children}</h2>
      </Column>
    </Grid>
  );
};

export const Paragraph = ({ children }) => {
  return (
    <Grid>
      <Column
        sm={4}
        md={6}
        lg={{ offset: 4, span: 6 }}
        xlg={{ offset: 4, span: 6 }}
        max={{ offset: 5, span: 5 }}
      >
        <p className={styles.paragraph}>{children}</p>
      </Column>
    </Grid>
  );
};
