import React from 'react';
import cn from 'classnames';
import style from './image.mod.scss';
import Container from '../layout/container/container';

const Image = ({ image }) => {
  const classes = cn(style.image);

  return (
    <Container size="xl">
      <div className={classes}>
        <img src={image} alt="" />
      </div>
    </Container>
  );
};

export default Image;
