import { FC, ReactNode } from 'react';

import styles from './index.module.scss';

export enum Color {
  light = 1,
  medium,
  dark,
}

type PanelProps = {
  color?: Color;
  children: ReactNode;
};

export const Panel: FC<PanelProps> = ({ color = Color['light'], children }) => {
  let colorClass: string;
  if (color === Color['light']) {
    colorClass = styles.light;
  } else if (color === Color['medium']) {
    colorClass = styles.medium;
  } else {
    colorClass = styles.dark;
  }
  const classNames = [styles.panel, colorClass].join(' ');

  return <div className={classNames}>{children}</div>;
};
