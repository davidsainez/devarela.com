import { FC, ReactNode } from 'react';

import styles from './index.module.scss';

export enum Color {
  light = 1,
  medium,
  dark,
  half,
}

type PanelProps = {
  color?: Color;
  className?: string;
  children: ReactNode;
};

export const Panel: FC<PanelProps> = ({
  className,
  color = Color['light'],
  children,
}) => {
  let colorClass: string;
  if (color === Color['light']) {
    colorClass = styles.light;
  } else if (color === Color['medium']) {
    colorClass = styles.medium;
  } else if (color === Color['dark']) {
    colorClass = styles.dark;
  } else {
    colorClass = styles.half;
  }
  const classNames = [styles.panel, colorClass, className].join(' ');

  return <div className={classNames}>{children}</div>;
};
