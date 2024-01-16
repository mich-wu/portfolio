import React, { useState } from 'react';
import cn from 'classnames';
import style from './components.mod.scss';
import TabContent from '../tabs/tabs';
import List from '../list/list';
import Section from '../section/section';

const Components = ({ components }) => {
  const classes = cn(style.components);
  const [active, setActive] = useState(components[0]);
  const [tabValue, setTabValue] = useState(0);

  const handleActive = (i) => {
    setActive(components[i]);
    setTabValue(0);
  };

  return (
    <div className={classes}>
      <Section id={'components'}>
        <List
          components={components}
          active={active}
          handleActive={handleActive}
        />
        <TabContent
          components={active.codeBlocks}
          tabValue={tabValue}
          setTabValue={setTabValue}
        />
      </Section>
    </div>
  );
};

export default Components;
