import { createElement } from 'react';
import * as NextLink from 'next/link';
import { cj } from '~/components/Utilities';
import {
  RiChat3Line,
  RiCheckboxBlankCircleLine,
  RiLightbulbLine,
  RiAliensLine,
  RiUser4Line,
} from 'react-icons/ri';
import styles from './index.module.scss';

const Item = ({ href, icon, text, path }) => {
  const classes = [styles.item];
  if (href === path) {
    classes.push(styles.highlight);
  }

  return (
    <NextLink className={cj(...classes)} href={href}>
      {/*createElement(icon)*/}
      {text}
    </NextLink>
  );
};

export const Menu = ({ path }) => {
  return (
    <div className={styles.box}>
      <Item href="/essays" icon={RiLightbulbLine} text="Essays" path={path} />
      <Item href="/me" icon={RiUser4Line} text="Me" path={path} />
      <Item href="/contact" icon={RiChat3Line} text="Contact" path={path} />
    </div>
  );
};
