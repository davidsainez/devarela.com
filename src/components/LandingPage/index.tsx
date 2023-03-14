import { FC } from 'react';
import { NextSeo } from 'next-seo';
import { IndexCard } from 'components/IndexCard';
import { Template } from 'components/Template';
import { Metadata } from 'Data';
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
        <div className={styles.introPanel}>
          <h1 className={styles.title}>
            Relentless
            <br />
            Refinement.
          </h1>
          <div className={styles.aboutBox}>
            <p className={styles.about}>
              The act of creation serves as the only reliable source of truth.
              We often engage in creation as a practical matter to tend to
              problems that we are faced with. But it can also serve as a source
              of truth. These words are as a reminder that ideas only useful
              when tempered through experience. I strive to write only about
              ideas which have been refined by contact with the real world.
              Creation as the pursuit of truth.
            </p>
            <p className={styles.about}>
              I write to pursue clarity. Good ideas are a product of constant
              refinement. I offer my writing here so that it may be of service
              to you as well.
            </p>
            <p className={styles.about}>
              If you find this content useful, I welcome a chat through{' '}
              <a href="https://twitter.com/davidsainez" className={styles.link}>
                twitter
              </a>{' '}
              or{' '}
              <a href="mailto:david@sainez.io" className={styles.link}>
                email
              </a>
              .
            </p>
          </div>
          <img src="flowerText.png" alt="watercolor" className={styles.art} />
        </div>
        <div className={styles.essayPanel}>
          <div className={styles.headingBox}>
            <h2 className={styles.heading}>Writing</h2>
          </div>
          {cards}
        </div>
      </div>
    </Template>
  );
};
