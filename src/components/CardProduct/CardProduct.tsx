import React from 'react';
import './CardProduct.scss';
import {transformPriceFormat} from '../../helpers';

export const CardProduct: React.FC<ICardProduct> = ({ price, title, thumbnail, path }) => {
  return (
    <div className="card-product">
      <div className="card-product__image">
        <img src={`${path}${thumbnail}`} alt="image" />
      </div>
      <span className="card-product__title">{title}</span>
      <span className="card-product__price">{transformPriceFormat(price)}đ</span>
    </div>
  );
};
