import React from "react";
import { Container, Typography, Grid } from '@material-ui/core'
import { Tabs, Button } from '../../components/common';
import useStyles from './style'
import './Cart.scss'
import { ProductManagement, CartItem } from "../../components";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
export const Cart = () => {
    const cart = useSelector((state: RootState) => state.cartSlice);
    console.log("cart", cart.products);
    return (
        <>
            <div className="cart">
                <div className="cart__list">
                    {cart.products.map(product => (
                        <div className="cart__item">
                        <div className="cart__item__image">
                            <img src={`${cart.path}${product.Image}`} alt="" />
                        </div>
                        <div className="cart__item__info">
                            <div className="cart__item__info__name">
                                {product.NameProduct}
                            </div>
                            <div className="cart__item__info__price">
                                {product.Price}
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
                    ))}             
                </div>
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Bạn đang có {cart.quantity} sản phẩm trong giỏ hàng
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền:</span> <span>{cart.total}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button>
                            Đặt hàng
                        </Button>
                        <Link to="/catalog">
                            <Button>
                                Tiếp tục mua hàng
                            </Button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

