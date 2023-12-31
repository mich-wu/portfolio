import React from 'react';
import cn from 'classnames';
import style from './about-me.mod.scss';
import Lead from '../lead/lead';
import Text from '../text/text';

const AboutMe = ({ aboutMeHeading, aboutMeText, aboutMeDescription }) => {
  const classes = cn(style.about);

  return (
    <div className={classes}>
      <div className={style.about__intro}>
        {aboutMeText && aboutMeHeading && (
          <Lead heading={aboutMeText} subheading={aboutMeHeading} />
        )}
        <Text html text={aboutMeDescription} />
      </div>
    </div>
  );
};

export default AboutMe;
