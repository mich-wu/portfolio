import React from 'react';
import cn from 'classnames';
import style from './about-me.mod.scss';
import Lead from '../lead/lead';
import Text from '../text/text';
import Grid from '../layout/grid/grid';

const AboutMe = ({ aboutMeHeading, aboutMeText, aboutMeDescription }) => {
  const classes = cn(style.about);

  return (
    <div className={classes}>
      <div className={style.about__intro}>
        <Lead heading={aboutMeText} subheading={aboutMeHeading} />
        <Text html text={aboutMeDescription} />
      </div>

      <div className={style.about__divider}></div>
    </div>
  );
};

export default AboutMe;
