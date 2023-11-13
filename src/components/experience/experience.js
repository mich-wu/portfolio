import React from 'react';
import cn from 'classnames';
import style from './experience.mod.scss';
import Text from '../text/text';
import Tag from '../tag/tag';

const Experience = ({ title, subtitle, text, tags }) => {
  const classes = cn(style.experience);

  return (
    <div className={classes}>
      <div className={style.experience__wrapper}>
        <div className={style.experience__title}>{title}</div>
        <div className={style.experience__subtitle}>{subtitle}</div>
        <Text html white text={text} />
        <div className={style.experience__tags}>
          {tags.map((tag) => (
            <Tag {...tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
