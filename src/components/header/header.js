import React from 'react';
import cn from 'classnames';
import style from './header.mod.scss';
import Container from '../layout/container/container';

const Header = () => {
  const classes = cn(style.header);

  const links = [
    {
      text: 'Home',
      link: '#home',
    },
    {
      text: 'About',
      link: '#about',
    },
    {
      text: 'Experience',
      link: '#experience ',
    },
    {
      text: 'Components',
      link: '#components',
    },
  ];

  return (
    <div className={classes}>
      <Container size="xl" gutters>
        <div className={style.header__nav}>
          <ul className={style.header__links}>
            {links.map((item) => (
              <li key={item.text} className={style.header__link}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
