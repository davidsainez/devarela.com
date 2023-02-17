import { NextSeo, BreadcrumbJsonLd } from 'next-seo';
import { Grid, Column } from '@carbon/react';
import { EssayIndexCard } from '~/components/EssayIndexCard';
import styles from './essayIndex.module.scss';

const DESCRIPTION = `
D.E. Varela's collection of essays exploring mental models, software design, and web technology.
`;

export const EssayIndex = ({ essays }) => {
  const cards = essays.map((essay) => (
    <EssayIndexCard
      key={essay.href}
      tags={essay.tags}
      href={essay.href}
      title={essay.title}
      date={essay.formated_date}
      summary={essay.summary}
    />
  ));

  return (
    <>
      <NextSeo
        title="Essays | D.E. Varela"
        description={DESCRIPTION}
        openGraph={{
          url: 'https://devarela.com/essays',
          title: 'Essays | D.E. Varela',
          description: DESCRIPTION,
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Essays',
            item: 'https://devarela.com/essays',
          },
        ]}
      />
      <Column
        className={styles.title_row}
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
            <h1 className={styles.title}>Essays</h1>
          </Column>
        </Grid>
      </Column>
      <Column
        className={styles.card_row}
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
