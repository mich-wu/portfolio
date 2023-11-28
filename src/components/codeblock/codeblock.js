import React, { useEffect } from 'react';
import cn from 'classnames';
import style from './codeblock.mod.scss';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import Text from '../text/text';
import Spacing from '../layout/spacing/spacing';
import { GatsbyImage } from 'gatsby-plugin-image';

const Codeblock = ({ code, language, text, media }) => {
  console.log(media);
  const classes = cn(style.codeblock);
  useEffect(() => {
    hljs.highlightAll();
  }, [code, language]);

  if (media) {
    return (
      <GatsbyImage
        image={media.gatsbyImageData}
        alt={'gif'}
        class={style.codeblock__image}
      />
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
