import React from 'react';
import cn from 'classnames';
import style from './lead.mod.scss';
import Heading from '../heading/heading';
import Text from '../text/text';
import Container from '../layout/container/container';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from '../button/button';

const Lead = ({
  heading,
  text,
  image,
  noGutters,
  githubHeading,
  githubUrl,
  linkedinHeading,
  linkedinUrl,
  getInTouchHeading,
  getInTouchLink,
}) => {
  const classes = cn(style.lead);

  return (
    <Container gutters={!noGutters}>
      <div className={classes}>
        <div className={style.lead__content}>
          <div className={style.lead__image}>
            <GatsbyImage image={image.gatsbyImageData} alt="" />
          </div>
          <div className={style.lead__heading}>
            <Heading text={heading} />
          </div>
          <div className={style.lead__text}>
            <Text html text={text} />
          </div>
        </div>
        <div className={style.lead__buttons}>
          <Button text={githubHeading} link={githubUrl} transparent />
          <Button text={linkedinHeading} link={linkedinUrl} transparent />
        </div>
        <Button text={getInTouchHeading} link={getInTouchLink} />
      </div>
    </Container>
  );
};

export default Lead;
