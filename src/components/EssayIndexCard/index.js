import { Link } from '~/components/Link';
import { Column, Tag, Grid } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import styles from './essayIndexCard.module.scss';

export const EssayIndexCard = ({ href, title, date, summary, tags }) => {
  return (
    <div className={styles.box}>
      <Grid className={styles.metadata_row}>
        <Column
          sm={2}
          md={6}
          lg={{ offset: 4, span: 6 }}
          xlg={{ offset: 4, span: 6 }}
          max={{ offset: 5, span: 4 }}
        >
          <div className={styles.tags}>
            {tags.map((x) => (
              <Tag key={x} type="gray" size="sm">
                {x}
              </Tag>
            ))}
          </div>
        </Column>
        <Column
          className={styles.date_track}
          sm={2}
          md={2}
          lg={{ offset: 10, span: 2 }}
          xlg={{ offset: 10, span: 2 }}
          max={{ offset: 9, span: 2 }}
        >
          <p className={styles.date}>{date}</p>
        </Column>
      </Grid>
      <Grid>
        <Column
          sm={4}
          md={6}
          lg={{ offset: 4, span: 6 }}
          xlg={{ offset: 4, span: 6 }}
          max={{ offset: 5, span: 6 }}
        >
          <h2 className={styles.title}>{title}</h2>
        </Column>
      </Grid>
      <Grid>
        <Column
          sm={4}
          md={6}
          lg={{ offset: 4, span: 6 }}
          xlg={{ offset: 4, span: 6 }}
          max={{ offset: 5, span: 4 }}
        >
          <p className={styles.summary}>{summary}</p>
          <Link href={href} className={styles.read} icon={ArrowRight}>
            Read
          </Link>
        </Column>
      </Grid>
    </div>
  );
};
