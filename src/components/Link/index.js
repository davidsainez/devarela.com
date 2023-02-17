import * as NextLink from 'next/link';
import { Link as CarbonLink } from '@carbon/react';
import styles from './link.module.scss';

export const Link = ({ href, icon, children }) => {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <CarbonLink renderIcon={icon} className={styles.hitbox}>
        {children}
      </CarbonLink>
    </NextLink>
  );
};
