import React, { useEffect } from 'react';
import cn from 'classnames';
import style from './codeblock.mod.scss';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import Text from '../text/text';
import Spacing from '../layout/spacing/spacing';

const Codeblock = ({ code, language, text, media }) => {
  const classes = cn(style.codeblock);
  useEffect(() => {
    hljs.highlightAll();
  }, [code, language]);

  if (media && media.url) {
    return (
      <video autoPlay controls className={style.codeblock__video}>
        <source src={media.url} type="video/mp4" />
      </video>
    );
  }

  if (!language) {
    return (
      <Spacing pt={1}>
        <div className={style.codeblock__text}>
          <Text white html text={text} />
        </div>
      </Spacing>
    );
  }

  return (
    <div className={classes}>
      <pre>
        <code className={language}>{code}</code>
      </pre>
    </div>
  );
};

export default Codeblock;
