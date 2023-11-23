import React, { useState } from 'react';
import cn from 'classnames';
import style from './experience.mod.scss';
import Text from '../text/text';
import Tag from '../tag/tag';

const Experience = ({ title, subtitle, text, tags }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const truncatedText = readMore ? text : `${text.slice(0, 305)}...`;

  const classes = cn(style.experience);

  return (
    <div className={classes}>
      <div className={style.experience__wrapper}>
        <div className={style.experience__title}>{title}</div>
        <div className={style.experience__subtitle}>{subtitle}</div>
        <Text html white text={truncatedText} />
        {text.length > 305 && (
          <div onClick={toggleReadMore} className={style.experience__more}>
            <p>{readMore ? 'Read Less' : 'Read More'}</p>
          </div>
        )}
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
