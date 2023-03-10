import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo';
import { Grid, Column } from '~/components/Grid';
import { formatDate } from '~/components/Utilities';
import styles from './essay.module.scss';

export const Essay = ({ url, title, description, tags, date, children }) => {
  const timestamp = new Date(date).toISOString();

  return (
    <>
      <NextSeo
        title={`${title} | D.E. Varela`}
        description={description}
        openGraph={{
          url: url,
          title: title,
          description: description,
          type: 'article',
          article: {
            authors: ['D.E. Varela'],
            tags: tags,
            publishedTime: timestamp,
          },
        }}
      />
      <ArticleJsonLd
        url={url}
        title={title}
        datePublished={timestamp}
        authorName={[
          {
            name: 'D.E. Varela',
            url: 'https://devarela.com/me',
          },
        ]}
        description={description}
        isAccessibleForFree={true}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Essays',
            item: 'https://devarela.com/essays',
          },
          {
            position: 2,
            name: title,
            item: url,
          },
        ]}
      />
      <Grid className={styles.heading_track}>
        <Column
          sm={4}
          md={8}
          lg={{ offset: 4, span: 6 }}
          xlg={{ offset: 4, span: 6 }}
          max={{ offset: 5, span: 6 }}
        >
          <h1 className={styles.heading}>{title}</h1>
        </Column>
      </Grid>
      <Grid fullWidth condensed>
        <Column
          className={styles.date_track}
          sm={4}
          md={8}
          lg={{ offset: 4, span: 6 }}
          xlg={{ offset: 4, span: 6 }}
          max={{ offset: 5, span: 2 }}
        >
          <p className={styles.date}>{formatDate(date)}</p>
        </Column>
      </Grid>
      {children}
    </>
  );
};
