import React from 'react';
import cn from 'classnames';
import style from './text.mod.scss';

const Text = ({
  text,
  size = 'md',
  light = false,
  dark = false,
  html = false,
}) => {
  const classes = cn(style.text, {
    [style[`text--size-${size}`]]: size,
    [style[`text--color-light`]]: light,
    [style[`text--color-dark`]]: dark,
    [style[`text--color-dark`]]: dark,
  });

  return html ? (
    <div className={classes} dangerouslySetInnerHTML={{ __html: text }}></div>
  ) : (
    <div className={classes}>{text}</div>
  );
};

export default Text;
