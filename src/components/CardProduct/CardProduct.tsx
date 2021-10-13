import React from 'react';
import './CardProduct.scss';

export const CardProduct: React.FC<ICardProduct> = ({ price, title, thumbnail }) => {
  return (
    <div className="card-product">
      <div className="card-product__image">
        <img
          src="https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/6/0/600cau-ma-nha-xi-hanako-tap10.jpg"
          alt="image"
        />
      </div>
      <span className="card-product__title">Bút mài Ánh Dương AD062 - Màu đỏ</span>
      <span className="card-product__price">55.000đ</span>
    </div>
  );
};
