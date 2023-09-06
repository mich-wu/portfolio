import React, { Children } from 'react';
import cn from 'classnames';
import style from './social.mod.scss';
import Tiktok from '../global/icons/tiktok';
import Instagram from '../global/icons/instagram';
import Facebook from '../global/icons/facebook';
import LinkedIn from '../global/icons/linkedin';
import Youtube from '../global/icons/youtube';
import Container from '../layout/container/container';
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
        <Icon link={'https://www.tiktok.com/@rhubarblaneperth'}>
          <Tiktok />
        </Icon>
        <Icon link={'https://www.linkedin.com/company/rhubarblaneperth/'}>
          <LinkedIn />
        </Icon>
        <Icon link={'https://www.instagram.com/rhubarblaneperth/'}>
          <Instagram />
        </Icon>
        <Icon link={'https://www.facebook.com/rhubarblaneperth'}>
          <Facebook />
        </Icon>
        <Icon link={'https://www.youtube.com/@rhubarblaneperth'}>
          <Youtube />
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
