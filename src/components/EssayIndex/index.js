import { NextSeo, BreadcrumbJsonLd } from 'next-seo';
import { Grid, Column } from '~/components/Grid';
import { Template } from '~/components/Template';
import { Card } from './Card';
import styles from './essayIndex.module.scss';

const DESCRIPTION = `
D.E. Varela's collection of essays exploring mental models, software design, and web technology.
`;

export const EssayIndex = ({ essays }) => {
  const cards = essays.map((essay, i) => (
    <Card
      //key={essay.href} // TODO re-enable after testing
      key={i}
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
      <Template>
        <div>{cards}</div>
      </Template>
    </>
  );
};

//<div className={styles.grid}>{[<h1>hello</h1>, ...cards]}</div>
