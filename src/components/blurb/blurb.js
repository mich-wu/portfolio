import React from 'react';
import cn from 'classnames';
import style from './blurb.mod.scss';
import Text from '../text/text';
import Container from '../layout/container/container';
import Spacing from '../layout/spacing/spacing';

const Blurb = ({ code }) => {
  const classes = cn(style.blurb);

  return (
    <Container gutters>
      <Spacing pt={1}>
        <div className={classes}>
          <Text white html text={code} />
        </div>
      </Spacing>
    </Container>
  );
};

export default Blurb;
