import Link from 'next/link';
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo';
import { Template } from 'components/Template';
import { RiArrowDropLeftLine } from 'react-icons/ri';
//import { CONF } from '~/Constants';
import styles from './index.module.scss';

export const Essay = ({ metadata, children }) => {
  const url = `https://devarela${metadata.href}`;
  const title = metadata.title;
  const description = metadata.summary;
  const tags = metadata.tags;
  const date = metadata.date;
  const timestamp = new Date(date).toISOString();

  const Tags = tags.map((tag, i) => (
    <>
      <span key={tag} className={styles.tag}>
        {tag}
      </span>
      {i < tags.length - 1 && '·'}
    </>
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
        images={[]}
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
      <Template>
        <div className={styles.box}>
          <div className={styles.headingBox}>
            <div className={styles.tags}>{Tags}</div>
            <h1 className={styles.heading}>{title}</h1>
          </div>
          <div className={styles.date}>{metadata.formated_date}</div>
          {children}
          <div className={styles.back}>
            <Link href="/">
              <RiArrowDropLeftLine /> Back
            </Link>
          </div>
        </div>
      </Template>
    </>
  );
};
