import React from 'react';
import cn from 'classnames';
import style from './lead.mod.scss';
import Heading from '../heading/heading';
import Text from '../text/text';
import Container from '../layout/container/container';
import { GatsbyImage } from 'gatsby-plugin-image';

const Lead = ({ heading, subheading, text, image }) => {
  const classes = cn(style.lead);

  return (
    <div className={classes}>
      <div className={style.lead__content}>
        <div className={style.lead__image}>
          {image && <GatsbyImage image={image.gatsbyImageData} alt="" />}
        </div>
        {subheading && (
          <div className={style.lead__subheading}>{subheading}</div>
        )}
        <div className={style.lead__heading}>
          <Heading text={heading} />
        </div>
        <div className={style.lead__text}>
          <Text html text={text} />
        </div>
      </div>
    </div>
  );
};

export default Lead;
