import React from 'react';
import cn from 'classnames';
import style from './list.mod.scss';
import Lead from '../lead/lead';

const List = ({ components, active, handleActive }) => {
  const classes = cn(style.list);

  return (
    <div className={classes}>
      <Lead
        subheading={'My Work'}
        heading={"Work I'm proud of"}
        text={
          "A few projects I've had the pleasure to work on while at Harvey Cameron"
        }
      />
      <div className={style.list__list}>
        {components.map((item, i) => {
          const isActive = active.id === item.id;
          return (
            <div className={isActive && [style[`list--active`]]} key={i}>
              <div className={style.list__item} onClick={() => handleActive(i)}>
                <p> {item.title}</p>
                <p>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    View Website →
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
