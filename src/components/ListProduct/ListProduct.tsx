import React from 'react';
import { CardProduct } from '../';
import './ListProduct.scss';

export const ListProduct: React.FC<IListProduct> = ({ listproducts, path, numCol = 5 }) => {
  return (
    <div className={`list-product list-product--${numCol}col`}>
      {listproducts &&
        listproducts.map((item, i) => {
          return <CardProduct key={i} title={item.NameProduct} price={item.Price} thumbnail={item.Image} path={path}  />;
        })}
    </div>
  );
};
