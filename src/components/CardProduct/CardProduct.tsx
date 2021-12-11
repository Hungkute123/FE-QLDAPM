import React from 'react';
import { useHistory } from "react-router-dom";
import './CardProduct.scss';
import {transformPriceFormat} from '../../helpers';
export const CardProduct: React.FC<ICardProduct> = ({ price, title, thumbnail, path, Id}) => {
  const history = useHistory();
  const handleClick = () => {
    console.log(Id, price);
    history.push(`/${Id}`);
    
  }
  return (
    <div className="card-product" onClick={handleClick}>
      <div className="card-product__image">
        <img src={`${path}${thumbnail}`} alt="image" />
      </div>
      <span className="card-product__title">{title}</span>
      <span className="card-product__price">{transformPriceFormat(price)}đ</span>
    </div>
  );
};

