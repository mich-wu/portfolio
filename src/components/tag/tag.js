import React from 'react';
import cn from 'classnames';
import style from './tag.mod.scss';

const Tag = ({ title }) => {
  const classes = cn(style.tag);

  return <div className={classes}>{title}</div>;
};

export default Tag;
