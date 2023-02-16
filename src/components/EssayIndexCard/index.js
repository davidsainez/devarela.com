import { Link } from '../Link';
import { Column, Tag, Grid } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

export const EssayIndexCard = ({ href, title, date, description }) => {
  return (
    <div className="essay-index-card">
      <Grid className="essay-index-card__metadata">
        <Column
          sm={2}
          md={6}
          lg={{ offset: 4, span: 6 }}
          xlg={{ offset: 4, span: 6 }}
          max={{ offset: 5, span: 4 }}
        >
          <div className="essay-index-card__tags">
            <Tag type="blue" size="sm">
              Tech
            </Tag>
            <Tag type="blue" size="sm">
              Design
            </Tag>
          </div>
        </Column>
        <Column
          className="essay-index-card__date__box"
          sm={2}
          md={2}
          lg={{ offset: 10, span: 2 }}
          xlg={{ offset: 10, span: 2 }}
          max={{ offset: 9, span: 2 }}
        >
          <p className="essay-index-card__date">{date}</p>
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
          <h2 className="essay-index-card__title">{title}</h2>
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
          <p className="essay-index-card__description">{description}</p>
          <Link
            href={href}
            className="essay-index-card__action"
            icon={ArrowRight}
          >
            Read
          </Link>
        </Column>
      </Grid>
    </div>
  );
};
