import React from 'react';
import cn from 'classnames';
import style from './section.mod.scss';

const Section = ({ id, children }) => {
  const classes = cn(style.section);

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};

export default Section;
