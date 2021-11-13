import React from "react";
import { Container, Typography, Grid } from '@material-ui/core'
import { Tabs, Button} from '../../components/common';
import useStyles from './style'
import './Cart.scss'
import { ProductManagement } from "../../components";

export const Cart = () => {
    const classes = useStyles();
    const isEmpty = false;

    const EmptyCart = () => {
        return (
            <>
                <img className="img-empty"
                    src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
                    alt=""
                />
                <Typography variant="subtitle1" className="empty-prod-typo">Chưa có sản phẩm trong giỏ hàng của bạn</Typography>
                <Button className="empty-button">Tiếp tục mua sắm</Button>
            </>
        )
    };
    const products = [
        {id: 1, name: 'Shoes', description: 'Running shoes'},
        {id: 2, name: 'Macbook', description: 'Apple macbook'},
    ]
    const FilledCart = () => {
        return (
            <>
                {/* <div className="img-product-cart">
                    <a href="https://www.fahasa.com/be-trai-xe-tai.html" title="Bé Trai - Xe Tải " >
                        <img className="product-image" src="https://cdn0.fahasa.com/media/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/8/9/8936071673459.jpg" alt="Bé Trai - Xe Tải " />
                    </a>
                </div>
             
                    <div className="info-product-cart">
                        <h2 className="product-name-full-text">
                            <a href="https://www.fahasa.com/be-trai-xe-tai.html">
                                Bé Trai - Xe Tải                         </a>
                        </h2>
                        <span className="new-price">8000đ</span>
                        <br/>
                        <span className="old-price">35.000đ</span>
                    </div>
                    <div className="product-view-quantity-box">
                        <div className="product-view-quantity-box-block">
                            <a className="btn-subtract-qty">
                                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png"/>
                            </a>
                            <input type="text" className="qty-carts" title="Số lượng"/>
                            <a className="btn-add-qty">
                                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"/>
                                </a>
                        </div>
                    </div>
                        
                        <div className='cart-price-total'>
                            <span className='text-price-total'>Thành Tiền</span>
                                 <span className="price">8000đ</span>
                                 </div>                                                                                                                                    </span>
                */}
        
                </>
        )
    }
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h5">Giỏ hàng</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

