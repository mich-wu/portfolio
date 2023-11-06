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
          <Text html text={text} />
          {/* <Button text={'Get in touch'} /> */}
          <Button text={githubHeading} link={githubUrl} transparent />
          <Button text={linkedinHeading} link={linkedinUrl} />
        </div>
      </div>
    </Container>
  );
};

export default Lead;
