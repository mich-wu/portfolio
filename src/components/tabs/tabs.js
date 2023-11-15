import React, { useState } from 'react';
import cn from 'classnames';
import style from './tabs.mod.scss';
import Codeblock from '../codeblock/codeblock';
import { Tabs, Tab } from '@mui/material';

const TabContent = ({ components }) => {
  const classes = cn(style.tabs);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes}>
      <Tabs value={value} onChange={handleChange} centered scrollButtons="auto">
        {components.map((component, index) => (
          <Tab label={component.title} key={index} disableRipple />
        ))}
      </Tabs>
      {components.map((component, index) => (
        <TabPanel value={value} index={index} key={index}>
          <Codeblock {...component} />
        </TabPanel>
      ))}
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default TabContent;
