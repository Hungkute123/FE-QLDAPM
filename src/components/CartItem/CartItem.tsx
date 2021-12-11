import React from 'react';
import './CartItem.scss';
export const CartItem = () => {
  return (
    <div>
        <div className="cart__item">
            <div className="cart__item__image">
                <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_188289.jpg" alt="" />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    Người trẻ thời 4.0
                </div>
                <div className="cart__item__info__price">
                    79.200đ
                </div>
                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn">
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            1
                        </div>
                        <div className="product__info__item__quantity__btn">
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="cart__item__del">
                    <i className='bx bx-trash'></i>
                </div>
            </div>
        </div>


        <div className="cart__item">
            <div className="cart__item__image">
                <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/t/h/thanh-xu_n-n_-l_c-_-v_n-xa_b_a-1-t_p-2.jpg" alt="" />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    Thanh xuân nỗ lực để vươn xa
                </div>
                <div className="cart__item__info__price">
                    79.200đ
                </div>
                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn">
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            1
                        </div>
                        <div className="product__info__item__quantity__btn">
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="cart__item__del">
                    <i className='bx bx-trash'></i>
                </div>
            </div>
        </div>
    </div>
  );
}


