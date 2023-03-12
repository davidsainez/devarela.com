import { createElement } from 'react';
import { useButton } from 'react-aria';

import { useRef } from 'react';
import styles from './button.module.scss';

export const Button = (props) => {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref} className={styles.button} type="button">
      {children}
    </button>
  );
};

export const IconButton = (props) => {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { icon, children } = props;

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={styles.icon_button}
      type="button"
    >
      {createElement(
        icon,
        {
          className: styles.icon_button__icon,
          width: '100%',
          height: '100%',
          viewBox: '0 0 32 32',
        },
        undefined
      )}
      {children}
    </button>
  );
};
