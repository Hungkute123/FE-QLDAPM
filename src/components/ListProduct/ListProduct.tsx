import React from 'react';
import { CardProduct } from '../';
import './ListProduct.scss';

export const ListProduct: React.FC<IListProduct> = ({ listproducts, numCol = 5 }) => {
  return (
    <div className={`list-product list-product--${numCol}col`}>
      {listproducts &&
        listproducts.map((item) => {
          return <CardProduct />;
        })}
    </div>
  );
};
