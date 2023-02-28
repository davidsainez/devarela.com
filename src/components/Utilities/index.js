import { createElement } from 'react';

export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/* set viewBox for carbon icons */
export const iconBox = (icon, className) => {
  return createElement(
    icon,
    {
      className: className,
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
    },
    undefined
  );
};

export const cj = (...classes) => {
  return classes.join(' ');
};
