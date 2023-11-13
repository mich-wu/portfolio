import React from 'react';
import cn from 'classnames';
import style from './blurb.mod.scss';
import Icon from '../icon/icon';
import Heading from '../heading/heading';
import Text from '../text/text';

const Blurb = ({ heading, text, icon }) => {
  const classes = cn(style.blurb);

  return (
    <div className={classes}>
      <div className={style.blurb__icon}>
        <Icon theme={'box'} icon={icon} />
      </div>
      <Heading text={heading} size={'sm'} />
      <Text text={text} size="sm" />
    </div>
  );
};

export default Blurb;
