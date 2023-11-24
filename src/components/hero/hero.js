import React from 'react';
import cn from 'classnames';
import style from './hero.mod.scss';
import Lead from '../lead/lead';
import LinkedIn from '../global/icons/linkedin';
import GithubIcon from '../global/icons/github';
import MailIcon from '../global/icons/mail';

const Hero = ({ title, description, image, githubUrl, linkedinUrl }) => {
  const classes = cn(style.hero);

  return (
    <div className={classes}>
      <Lead heading={title} text={description} image={image} />
      <div className={style.hero__cta}>
        <Icon link={githubUrl}>
          <GithubIcon />
        </Icon>
        <Icon link={linkedinUrl}>
          <LinkedIn />
        </Icon>
        <Icon link={'mailto:mich.wu@outlook.com'}>
          <MailIcon />
        </Icon>
      </div>
    </div>
  );
};

export default Hero;

const Icon = ({ children, link }) => (
  <a className={style.icon} href={link} target="_blank" rel="noreferrer">
    {children}
  </a>
);
