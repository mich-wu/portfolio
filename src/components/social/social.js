import React from 'react';
import cn from 'classnames';
import style from './social.mod.scss';
import LinkedIn from '../global/icons/linkedin';
import Container from '../layout/container/container';
import GithubIcon from '../global/icons/github';
import MailIcon from '../global/icons/mail';
import Lead from '../lead/lead';

const Social = () => {
  const classes = cn(style.social);

  return (
    <Container size="md" gutters>
      <Lead
        heading={'Get in touch with us'}
        subheading={'Contact'}
        text={
          'Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.'
        }
      />
      <div className={classes}>
        <Icon link={'https://www.linkedin.com/company/rhubarblaneperth/'}>
          <LinkedIn />
        </Icon>
        <Icon link={'https://www.youtube.com/@rhubarblaneperth'}>
          <GithubIcon />
        </Icon>
        <Icon link={'https://www.youtube.com/@rhubarblaneperth'}>
          <MailIcon />
        </Icon>
      </div>
    </Container>
  );
};

export default Social;

const Icon = ({ children, link }) => (
  <a className={style.icon} href={link}>
    {children}
  </a>
);
