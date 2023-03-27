import { Panel } from 'components/Panel';
import { useInView, animated } from '@react-spring/web';
import styles from './index.module.scss';

// slow scale
// then quickly fade into white
// then glare burst
// finish sclaing

export const Welcome = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        filter: 'opacity(0)',
        transform: 'scale(2)',
      },
      to: {
        filter: 'opacity(1)',
        transform: 'scale(1)',
      },
      config: {
        frequency: 2,
      },
    }),
    {
      once: true,
    }
  );

  return (
    <Panel color={3}>
      <div className={styles.container}>
        <p className={styles.pre}>A philosophy of</p>
        <div className={styles.title}>
          <div id={styles.titleTop} data-text="Relentless">
            Relentless
          </div>
          <div id={styles.titleBottom} data-text="Refinement.">
            Refinement
          </div>
        </div>
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
        </div>
        <img src="bw2.png" className={styles.art} />
      </div>
    </Panel>
  );
};
