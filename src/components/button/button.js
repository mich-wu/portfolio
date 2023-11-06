import React from 'react';
import cn from 'classnames';
import style from './button.mod.scss';

const Button = ({
  text,
  link = '/',
  light = false,
  onClick,
  transparent = false,
}) => {
  const classes = cn(style.button, {
    [style[`button--light`]]: light,
    [style[`button--transparent`]]: transparent,
  });

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a href={link} className={classes} onClick={handleClick}>
      <div className={style.button__inner}>{text}</div>
    </a>
  );
};

export default Button;
