import { Panel } from 'components/Panel';
import { useInView, animated } from '@react-spring/web';
import styles from './index.module.scss';

// slow scale
// then quickly fade into white
// then glare burst
// finish sclaing

const INTRO_1 = `
These writings represent a lifelong endeavor to understand the world, technology, and human nature.
I write as a means of exploration, a way to clarify ideas and navigate the complexities our rapidly-evolving landscape.
`;

const INTRO_2 = `
My aim in sharing these writings is to stimulate conversation and engage with like-minded thinkers.
I hope that, as you delve into these pages, you'll find yourself in a thought-provoking dialogue — one that challenges, enlightens, and ultimately brings us closer to the truth.
`;

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
        <p className={styles.pre}>Musings on</p>
        <div className={styles.title}>
          <div id={styles.titleTop} data-text="Mind and Machine.">
            Mind and Machine.
          </div>
        </div>
        <div className={styles.aboutBox}>
          <p className={styles.about}>{INTRO_1}</p>
          <p className={styles.about}>{INTRO_2}</p>
        </div>
        <img src="bw2.png" className={styles.art} />
      </div>
    </Panel>
  );
};
