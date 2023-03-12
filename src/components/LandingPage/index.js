import { NextSeo } from 'next-seo';
import { Template } from '~/components/Template';
import styles from './landingPage.module.scss';
import { EssayIndex } from '~/components/EssayIndex';

const TITLE = 'David Sainez';
const URL = 'sainez.io';
const DESCRIPTION = `
David Sainez's collection of essays exploring mental models, software design, and web technology.
`;

export const LandingPage = ({ essays }) => {
  return (
    <Template color>
      <NextSeo
        title={TITLE}
        description={DESCRIPTION}
        openGraph={{
          url: URL,
          title: TITLE,
          description: DESCRIPTION,
        }}
      />
      <div className={styles.herp}>
        <div className={styles.panel}>
          <h1 className={[styles.heading, styles.welcome].join(' ')}>
            Relentless
            <br />
            <span className={styles.fancy}>Refinement.</span>
          </h1>
          <div className={styles.container}>
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
          <img src="bw2.png" alt="watercolor" className={styles.art} />
        </div>
        <div className={styles.essays}>
          <div className={styles.half}>
            <div className={styles.section}>
              <h2 className={styles.sectionHeading}>Writing</h2>
            </div>
          </div>
          <div className={styles.bg}>
            <div className={styles.spacer} />
          </div>
          <div className={styles.bg}>
            <div className={styles.index}>
              <EssayIndex essays={essays} />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

/*
              <pre>
                <p className={styles.about}>
                  {'                            '}— David Sainez
                </p>
              </pre>
              */
