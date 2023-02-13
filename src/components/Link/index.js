import * as NextLink from 'next/link';
import { Link as CarbonLink } from '@carbon/react';

export const Link = ({ href, icon, children }) => {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <CarbonLink renderIcon={icon}>{children}</CarbonLink>
    </NextLink>
  );
};
