import React from 'react';
import cn from 'classnames';
import style from './lead.mod.scss';
import Heading from '../heading/heading';
import Text from '../text/text';
import Container from '../layout/container/container';

const Lead = ({
  heading,
  subheading,
  text,
  dark = false,
  headingSize = 'xl',
  h1 = false,
  textAlign = 'centre',
  noGutters
}) => {
  const classes = cn(style.lead, {
    [style[`lead--align-left`]]: textAlign === 'left',
  });

  return (
    <Container gutters={!noGutters} size={textAlign === 'centre' ? 'md' : 'xl'}>
      <div className={classes}>
        <div className={style.lead__content}>
          <div className={style.lead__subheading}>
            <Heading
              text={subheading}
              tag={h1 ? 1 : 2}
              size={'subheading'}
              light={dark}
            />
          </div>
          <div className={style.lead__heading}>
            <Heading
              text={heading}
              tag={h1 ? 2 : 3}
              size={headingSize}
              light={dark}
            />
          </div>
          <Text text={text} size="lg" light={dark} align={textAlign} />
        </div>
      </div>
    </Container>
  );
};

export default Lead;
