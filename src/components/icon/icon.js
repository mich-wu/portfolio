import React from 'react';
import cn from 'classnames';
import style from './icon.mod.scss';

const Icon = ({ children, link }) => (
  <a className={style.icon} href={link}>
    {children}
  </a>
);

export default Icon;
