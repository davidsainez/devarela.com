import { Grid, Column } from '~/components/Grid';
import styles from './article.module.scss';

export const Heading = ({ children }) => {
  return (
    <Grid>
      <Column
        sm={4}
        md={{ offset: 1, span: 6 }}
        lg={{ offset: 4, span: 7 }}
        xlg={{ offset: 4, span: 7 }}
        max={{ offset: 5, span: 7 }}
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
        md={{ offset: 1, span: 6 }}
        lg={{ offset: 4, span: 7 }}
        xlg={{ offset: 4, span: 7 }}
        max={{ offset: 5, span: 7 }}
      >
        <p className={styles.paragraph}>{children}</p>
      </Column>
    </Grid>
  );
};
