import * as NextLink from 'next/link';
import { iconBox } from '~/components/Utilities';
import styles from './link.module.scss';

export const Link = ({ className, href, icon, children }) => {
  const classes = [styles.link];
  let boxedIcon;
  if (icon) {
    classes.push(styles.icon_link);
    boxedIcon = iconBox(icon, styles.icon_link__icon);
  } else {
    classes.push(styles.link);
  }

  return (
    <NextLink href={href} className={[className, ...classes].join(' ')}>
      {children}
      {boxedIcon}
    </NextLink>
  );
};
