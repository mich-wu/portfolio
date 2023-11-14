import React from 'react';
import cn from 'classnames';
import style from './code.mod.scss';
import { CodeBlock, dracula } from 'react-code-blocks';
import { Tabs } from '@mui/material';

const Code = ({}) => {
  const classes = cn(style.code);

  const experience = `  import React from 'react';
  import cn from 'classnames';
  import style from './experience.mod.scss';
  import Text from '../text/text';
  import Tag from '../tag/tag';
  
  const Experience = ({ title, subtitle, text, tags }) => {
    const classes = cn(style.experience);
  
    return (
      <div className={classes}>
          <div className={style.experience__tags}>
            {tags.map((tag) => (
              <Tag {...tag} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;`;

  return (
    <div className={classes}>
      <CodeBlock
        text={experience}
        language={'javascript'}
        showLineNumbers={false}
        theme={dracula}
      />
    </div>
  );
};

export default Code;
