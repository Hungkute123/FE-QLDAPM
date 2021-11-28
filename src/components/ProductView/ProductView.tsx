import React, { useState } from 'react';
import './ProductView.scss';
import PropTypes from 'prop-types';
import exports from 'webpack';
import { Button } from '../common';
import IconName from "react-icons/bi";
import 'boxicons';
export const ProductView = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item">
                        <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_20355.jpg" alt="" />
                    </div>
                    <div className="product__images__list__item">
                        <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_20355.jpg" alt="" />
                    </div>

                </div>
                <div className="product__images__main">
                    <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_20355.jpg" alt="" />
                    
                </div>
                
            </div>
            <div className="product__info">
               <h1 className="product__info__title">Nhật ký chú bé nhút nhát</h1>
               <div className="product__info__item">
                   <span className="product__info__item__price">
                       40.000đ
                   </span>
               </div>
               <div className="product__info__item">
                   <div className="product__info__item__title">Nhà xuất bản: Văn học</div>                   
               </div>
               <div className="product__info__item">
                   <div className="product__info__item__title">Tác giả: Jeff Kinney</div>
               </div>
               <div className="product__info__item">
                   <div className="product__info__item__title">Hình thức bìa: bìa mềm</div>
               </div>
               <div className="product__info__item">
                   <div className="product__info__item__title">Số lượng</div>
                   <div className="product__info__item__quantity__btn">
                        <i className="bx bx-minus"></i>
                   </div>
                   <div className="product__info__item__quantity__input">
                        {quantity}
                   </div>
                   <div className="product__info__item__quantity__btn">
                    <i className="bx bx-plus"></i>
                   </div>
               </div>
               <div className="product__info__item">
                        <Button>Thêm vào giỏ</Button>
                        <Button>Mua ngay</Button>
                </div>
            </div>
            

        </div>
    );
};


