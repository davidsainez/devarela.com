import { Panel } from 'components/Panel';
import { useInView, animated } from '@react-spring/web';
import styles from './index.module.scss';

// slow scale
// then quickly fade into white
// then glare burst
// finish sclaing

const INTRO_1 = `
I learn by doing. In the pursuit of better solutions, I unearth fresh ideas. I've created this space to share them, hoping you will find them useful.
`;

/*
const INTRO_2 = `
My aim in sharing these writings is to stimulate conversation and engage with like-minded thinkers.
I hope that, as you delve into these pages, you'll find yourself in a thought-provoking dialogue — one that challenges, enlightens, and ultimately brings us closer to the truth.
`;
*/

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
        <div className={styles.title}>
          <div id={styles.titleTop} data-text="On Mind and Machine.">
            On Mind and Machine.
          </div>
        </div>
        <div className={styles.aboutBox}>
          <p className={styles.about}>
            {INTRO_1} The best way to reach me is by{' '}
            <a href="mailto:david@sainez.io">email</a>.
          </p>
          {/*
          <p className={styles.about}>
            The best way to reach me is by <a href="">email</a>.
          </p>
	   */}
        </div>
        {/* <img src="bw2.png" className={styles.art} /> */}
      </div>
    </Panel>
  );
};

//  I learn by doing. In the pursuit of better solutions, I unearth fresh ideas. I've created this space to share them, hoping you will find them useful.

// These writings are born of my pursuit to be a better engineer. Rather than be discarded, they might find purpose in others' hands.
