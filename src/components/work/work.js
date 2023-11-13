import React from 'react';
import cn from 'classnames';
import style from './work.mod.scss';
import Lead from '../lead/lead';
import Text from '../text/text';

const Work = ({ myWorkHeading, myWorkText, myWorkDescription }) => {
  const classes = cn(style.work);

  return (
    <div className={classes}>
      <Lead heading={myWorkText} subheading={myWorkHeading} />
      <Text text={myWorkDescription} />
    </div>
  );
};

export default Work;
