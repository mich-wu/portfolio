import React, { useState } from 'react';
import cn from 'classnames';
import style from './tabs.mod.scss';
import Codeblock from '../codeblock/codeblock';

const TabContent = ({ components }) => {
  const classes = cn(style.tabs);

  return (
    <div className={classes}>
      {components.map((component) => (
        <Codeblock {...component} />
      ))}
    </div>
  );
};

export default TabContent;
