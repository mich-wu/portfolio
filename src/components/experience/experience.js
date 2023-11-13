import React from 'react';
import cn from 'classnames';
import style from './experience.mod.scss';
import Text from '../text/text';

const Experience = ({ experiences }) => {
  console.log(experiences);
  const classes = cn(style.experience);

  return (
    <div className={classes}>
      <div className={style.experience__wrapper}>
        <div className={style.experience__title}>{experiences.title}</div>
        <div className={style.experience__subtitle}>{experiences.subtitle}</div>
        <Text html white text={experiences.text} />
      </div>
    </div>
  );
};

export default Experience;
