import { Link } from '../Link';
import { Column, Tag, Grid } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

export const EssayIndexCard = ({ href, title, date, description }) => {
  return (
    <div className="essay-index-card">
      <Grid className="essay-index-card__metadata">
        <Column lg={{ offset: 4, span: 6 }} md={8} sm={2}>
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
          lg={{ offset: 10, span: 2 }}
          md={8}
          sm={2}
          className="essay-index-card__date__box"
        >
          <p className="essay-index-card__date">{date}</p>
        </Column>
      </Grid>
      <Grid>
        <Column lg={{ offset: 4, span: 6 }} md={8} sm={4}>
          <h2 className="essay-index-card__title">{title}</h2>
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
