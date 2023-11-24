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
        heading={"Projects I've worked on"}
        text={
          "A quick look at projects I've had the pleasure to work on while at Harvey Cameron"
        }
      />
      <div className={style.list__list}>
        {components.map((item, i) => {
          const isActive = active.id === item.id;
          return (
            <div className={isActive && [style[`list--active`]]}>
              <div className={style.list__item} onClick={() => handleActive(i)}>
                <p> {item.title}</p>
                <p>
                  <a href={item.link} target="_blank">
                    View Here →
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
