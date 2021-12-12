import React from "react";
import { Container, Typography, Grid } from '@material-ui/core'
import { Tabs, Button } from '../../components/common';
import useStyles from './style'
import './Cart.scss'
import { ProductManagement, CartItem } from "../../components";
import { Link } from 'react-router-dom'

export const Cart = () => {
    
    return (
        <>
            <div className="cart">
                <div className="cart__list">
                        <CartItem/>
                </div>
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Bạn đang có 2 sản phẩm trong giỏ hàng
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền:</span> <span>40000 VND</span>
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

