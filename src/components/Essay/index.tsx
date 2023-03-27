import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo';
import { Template } from 'components/Template';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Metadata } from 'Data';
//import { CONF } from '~/Constants';
import { Panel } from 'components/Panel';
import styles from './index.module.scss';

type EssayProps = {
  metadata: Metadata;
  children: ReactNode;
};

export const Essay: FC<EssayProps> = ({ metadata, children }) => {
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
      <Template white={false}>
        <Panel color={3}>
          <div className={styles.content}>
            <div className={styles.headingBox}>
              <div className={styles.tags}>{Tags}</div>
              <h1 className={styles.heading}>{title}</h1>
            </div>
          </div>
        </Panel>
        <Panel>
          <div className={styles.content}>
            <div className={styles.date}>{metadata.formated_date}</div>
            {children}
            <Link href="/" className={styles.read}>
              <RiArrowLeftLine /> Read more
            </Link>
          </div>
        </Panel>
      </Template>
    </>
  );
};
