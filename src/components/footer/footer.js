import React from 'react';
import cn from 'classnames';
import style from './footer.mod.scss';
import Container from '../layout/container/container';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const classes = cn(style.footer);

  return (
    <>
      <div className={classes}>
        <Container size="xl" gutters>
          <div className={style.footer__content}>
            <h3>
              Meow meow meow
              <br />
              Meow meow meow meow.
            </h3>
            <div className={style.footer__contact}>
              <a className={style.footer__phone} href={`tel:0800101101`}>
                Phone:<span>{'0800 101 101'}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div className={style.footer__bar}>
        <Container size="xl" gutters>
          <div className={style.footer__credit}>
            <span>Copyright © 2023</span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
