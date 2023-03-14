import { FC } from 'react';
import { NextSeo } from 'next-seo';
import { IndexCard } from 'components/IndexCard';
import { Template } from 'components/Template';
import { Metadata } from 'Data';
import { Welcome } from './Welcome';
import { Panel } from 'components/Panel';
import styles from './landingPage.module.scss';

const TITLE = 'David Sainez';
const URL = 'sainez.io';
const DESCRIPTION = `
David Sainez's collection of essays exploring mental models, software design, and web technology.
`;

type LandingPageProps = {
  essays: Array<Metadata>;
};

export const LandingPage: FC<LandingPageProps> = ({ essays }) => {
  const cards = essays.map((essay) => (
    <IndexCard
      key={essay.href}
      href={essay.href}
      title={essay.title}
      date={essay.formated_date}
      summary={essay.summary}
    />
  ));

  return (
    <Template>
      <NextSeo
        title={TITLE}
        description={DESCRIPTION}
        openGraph={{
          url: URL,
          title: TITLE,
          description: DESCRIPTION,
        }}
      />
      <div className={styles.all}>
        <Welcome />
        <Panel color={2}>
          <div className={styles.headingBox}>
            <h2 className={styles.heading}>Writing</h2>
          </div>
          {cards}
        </Panel>
      </div>
    </Template>
  );
};
