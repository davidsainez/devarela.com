import { NextSeo } from 'next-seo';
import { Template } from '~/components/Template';
import styles from './landingPage.module.scss';
import { EssayIndex } from '~/components/EssayIndex';

const TITLE = 'D.E. Varela';
const URL = 'devarela.com';
const DESCRIPTION = `
D.E. Varela's collection of essays exploring mental models, software design, and web technology.
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
      <h1 className={[styles.heading, styles.welcome].join(' ')}>Welcome</h1>
      <div className={styles.container}>
        <p className={styles.about}>
          This site hosts a collection of essays that explore mental models,
          software design, and web technology.
        </p>
        <p className={styles.about}>
          I write to pursue clarity. Good ideas don&apos;t spring out of the
          abyss. They are a product of constant refinement. I offer my writing
          here so that it may be of service to you as well.
        </p>
        <p className={styles.about}>
          You can find me on{' '}
          <a href="https://twitter.com/varelabuilds" className={styles.link}>
            twitter
          </a>{' '}
          and{' '}
          <a href="https://github.com/de-varela" className={styles.link}>
            github
          </a>
          . Feel free to reach out{' '}
          <a href="mailto:de-varela@outlook.com" className={styles.link}>
            directly
          </a>{' '}
          via email.
        </p>
      </div>
      <div className={styles.essays}>
        <h2 className={styles.heading}>Essays</h2>
        <EssayIndex essays={essays} />
      </div>
    </Template>
  );
};
