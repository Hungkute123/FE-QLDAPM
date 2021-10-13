import React from 'react';
import './Menu.scss';
import { MenuList } from '../../constants/common';

export const Menu = () => {
  return (
    <div className="menu">
      {MenuList.map((item) => {
        return (
          <div className="menu__item" key={item.id}>
            <img className="menu__img" src={item.image} alt="image" />
            <p className="menu__title">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
