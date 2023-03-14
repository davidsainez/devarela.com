import { Panel } from 'components/Panel';
import styles from './index.module.scss';

export const Welcome = () => {
  return (
    <Panel>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Relentless
          <br />
          Refinement.
        </h1>
        <div className={styles.aboutBox}>
          <p className={styles.about}>
            The act of creation serves as the only reliable source of truth. We
            often engage in creation as a practical matter to tend to problems
            that we are faced with. But it can also serve as a source of truth.
            These words are as a reminder that ideas only useful when tempered
            through experience. I strive to write only about ideas which have
            been refined by contact with the real world. Creation as the pursuit
            of truth.
          </p>
          <p className={styles.about}>
            I write to pursue clarity. Good ideas are a product of constant
            refinement. I offer my writing here so that it may be of service to
            you as well.
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
    </Panel>
  );
};
