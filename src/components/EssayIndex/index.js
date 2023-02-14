import { Grid, Column } from '@carbon/react';
import { EssayIndexCard } from '../EssayIndexCard';

export const EssayIndex = ({ essays }) => {
  const cards = essays.map((essay) => (
    <EssayIndexCard
      key={essay.href}
      href={essay.href}
      title={essay.title}
      date={essay.formated_date}
      description={essay.description}
    />
  ));

  return (
    <>
      <Column lg={16} md={8} sm={4} className="essay-index__header">
        <Grid condensed>
          <Column lg={{ offset: 4, span: 6 }} md={8} sm={4}>
            <h1 className="essay-index__title">Essays</h1>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} className="essay-index__tiles">
        {cards}
      </Column>
    </>
  );
};
