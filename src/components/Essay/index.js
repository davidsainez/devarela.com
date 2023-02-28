import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo';
import { Grid, Column } from '~/components/Grid';
import { Template } from '~/components/Template';
import { CONF } from '~/Constants';
import styles from './essay.module.scss';

const Meta = ({ date, tags }) => {
  const Tags = tags.map((tag) => (
    <span key={tag} className={styles.tag}>
      {tag}
    </span>
  ));

  return (
    <div className={styles.meta}>
      <div className={styles.tags}>{Tags}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

const ContentColumn = ({ children }) => {
  return (
    <Grid>
      <Column
        sm={4}
        md={{ offset: 1, span: 6 }}
        lg={{ offset: 4, span: 10 }}
        xlg={{ offset: 4, span: 10 }}
        max={{ offset: 5, span: 6 }}
      >
        {children}
      </Column>
    </Grid>
  );
};

export const Essay = ({ metadata, children }) => {
  const url = `https://devarela${metadata.href}`;
  const title = metadata.title;
  const description = metadata.summary;
  const tags = metadata.tags;
  const date = metadata.date;
  const timestamp = new Date(date).toISOString();

  const Tags = tags.map((tag) => (
    <span key={tag} className={styles.tag}>
      {tag}
    </span>
  ));

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
      <Template path={metadata.href}>
        <div className={styles.box}>
          <div className={styles.tags}>{Tags}</div>
          <h1 className={styles.heading}>{title}</h1>
          <div className={styles.date}>{metadata.formated_date}</div>
          {children}
          <div>
            <div className={styles.footer}>
              <p>
                Hello! I hope you found this essay helpful. If you would like to
                keep in touch, we can connect on{' '}
                <a href={CONF.twitter}>twitter</a> or{' '}
                <a href={CONF.email}>directly</a> via email. Looking forward to
                hearing from you.
              </p>
              <p>— David</p>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
};
