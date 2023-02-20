import * as NextLink from 'next/link';
import { iconBox } from '~/components/Utilities';
import styles from './link.module.scss';

export const Link = ({ href, icon, children }) => {
  let className = styles.link;
  let boxedIcon;
  if (icon) {
    className = styles.icon_link;
    boxedIcon = iconBox(icon, styles.icon_link__icon);
  }

  return (
    <NextLink href={href} className={className}>
      {children}
      {boxedIcon}
    </NextLink>
  );
};
