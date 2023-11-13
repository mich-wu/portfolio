import React from 'react';
import cn from 'classnames';
import style from './experience.mod.scss';
import Experience from '../experience/experience';

const Experiences = ({ experiences }) => {
  const classes = cn(style.experience);

  return (
    <div className={classes}>
      {experiences.map((item) => (
        <Experience {...item} />
      ))}
    </div>
  );
};

export default Experiences;
