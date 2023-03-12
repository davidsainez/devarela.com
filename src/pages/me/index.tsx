import { Template } from 'components/Template';
import styles from './index.module.scss';

const Me = () => {
  return (
    <Template>
      <div className={styles.box}>
        <h1>About me</h1>
        <p>Hello, my name is David.</p>
      </div>
    </Template>
  );
};

export default Me;
