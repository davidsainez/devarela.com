import { Grid, Column } from '@carbon/react';
import { EssayIndexCard } from '../EssayIndexCard';

export const EssayIndex = ({ essays }) => {
  const cards = essays.map((essay) => (
    <EssayIndexCard
      key={essay.href}
      tags={essay.tags}
      href={essay.href}
      title={essay.title}
      date={essay.formated_date}
      description={essay.description}
    />
  ));

  return (
    <>
      <Column
        className="essay-index__header"
        sm={4}
        md={8}
        lg={16}
        xlg={16}
        max={16}
      >
        <Grid condensed>
          <Column
            sm={4}
            md={8}
            lg={{ offset: 4, span: 6 }}
            xlg={{ offset: 4, span: 6 }}
            max={{ offset: 5, span: 6 }}
          >
            <h1 className="essay-index__title">Essays</h1>
          </Column>
        </Grid>
      </Column>
      <Column
        className="essay-index__tiles"
        sm={4}
        md={8}
        lg={16}
        xlg={16}
        max={16}
      >
        {cards}
      </Column>
    </>
  );
};
