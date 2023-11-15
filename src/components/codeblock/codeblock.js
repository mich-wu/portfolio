import React, { useEffect } from 'react';
import cn from 'classnames';
import style from './codeblock.mod.scss';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

const Codeblock = ({ code, language }) => {
  const classes = cn(style.codeblock);
  useEffect(() => {
    hljs.highlightAll();
  }, [code, language]);

  return (
    <div className={classes}>
      <pre>
        <code className={language}>{code}</code>
      </pre>
    </div>
  );
};

export default Codeblock;
