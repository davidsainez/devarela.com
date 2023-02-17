import { Grid, Column } from '@carbon/react';
import styles from './guideline.module.scss';

export const Guideline = () => {
  return (
    <Grid fullWidth condensed className={styles.box}>
      <Column
        className={styles.edge}
        sm={2}
        md={2}
        lg={{ offset: 4, span: 2 }}
        xlg={{ offset: 4, span: 2 }}
        max={{ offset: 5, span: 2 }}
      />
      <Column
        className={styles.inside}
        sm={0}
        md={2}
        lg={{ offset: 6, span: 2 }}
        xlg={{ offset: 6, span: 2 }}
        max={{ offset: 7, span: 2 }}
      />
      <Column
        className={styles.inside}
        sm={0}
        md={2}
        lg={{ offset: 8, span: 2 }}
        xlg={{ offset: 8, span: 2 }}
        max={{ offset: 9, span: 2 }}
      />
      <Column
        className={styles.inside}
        sm={0}
        md={2}
        lg={{ offset: 10, span: 2 }}
        xlg={{ offset: 10, span: 2 }}
        max={0}
      />
      <Column
        className={styles.edge}
        sm={{ offset: 4, span: 1 }}
        md={{ offset: 8, span: 1 }}
        lg={{ offset: 12, span: 1 }}
        xlg={{ offset: 12, span: 1 }}
        max={{ offset: 11, span: 1 }}
      />
    </Grid>
  );
};
