import { Template } from '~/components/Template';
import styles from './index.module.scss';

export const About = () => {
  return (
    <Template>
      <div className={styles.box}>
        <h1>About me</h1>
        <p>Hello, my name is David.</p>
      </div>
    </Template>
  );
};
