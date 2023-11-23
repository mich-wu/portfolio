import React from 'react';
import cn from 'classnames';
import style from './section.mod.scss';
import Container from '../layout/container/container';
import Spacing from '../layout/spacing/spacing';

const Section = ({ id, children }) => {
  const classes = cn(style.section);

  return (
    <Container gutters>
      <Spacing pt={6} pb={6}>
        <section id={id} className={classes}>
          {children}
        </section>
      </Spacing>
    </Container>
  );
};

export default Section;
