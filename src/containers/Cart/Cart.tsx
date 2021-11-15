import React from "react";
import { Container, Typography, Grid } from '@material-ui/core'
import { Tabs, Button } from '../../components/common';
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
        { id: 1, name: 'Shoes', description: 'Running shoes' },
        { id: 2, name: 'Macbook', description: 'Apple macbook' },
    ]
    const FilledCart = () => {
        return (
            <>
                <a href="https://www.fahasa.com/be-trai-xe-tai.html" title="Bé Trai - Xe Tải "><img className="product-image" src="https://cdn0.fahasa.com/media/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/8/9/8936071673459.jpg" alt="Bé Trai - Xe Tải " /></a>
                <h2 className="product-name-full-text">
                    <a href="https://www.fahasa.com/be-trai-xe-tai.html">Bé Trai - Xe Tải</a>
                </h2>
                <div className="price-original" >
                    <span className="cart-price"><div className="cart-fhsItem-price">
                        <div><span className="price">23.450 đ</span></div>
                        <div className="fhsItem-price-old"><span className="price">35.000 đ</span></div>
                    </div>
                    </span>
                </div>
                <div className="number-product-cart" >
                    <div className="product-view-quantity-box">
                        <div className="product-view-quantity-box-block">
                            <a><img className="btn-subtract-qty" src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png" /></a>
                            <input type="text" className="qty-carts" value="1" title="Số lượng" />
                            <a><img className="btn-add-qty" src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png" /></a>
                        </div>
                        <div className="product-view-icon-remove-mobile" >

                            <a href="https://www.fahasa.com/checkout/cart/delete/id/53169325/uenc/aHR0cHM6Ly93d3cuZmFoYXNhLmNvbTo4MS9jaGVja291dC9jYXJ0Lw,,/form_key/ta3KaDwjo4ypTD2d/" title="Xóa sản phẩm" id="53169325" className="btn-remove-mobile-cart"></a>
                        </div>
                    </div>
                    <div className='cart-price-total'>
                        <span className='text-price-total'>Thành Tiền </span>
                        <span className="cart-price">

                            <span className="price">23.450 đ</span>                                                                                                                                    </span>
                    </div>
                </div>
                <div className="total-cart-page">
                    <div className="title-cart-page-left">Thành tiền</div>
                    <div className="number-cart-page-right"><span className="price">23.450 đ</span></div>
                </div>
                <div className="total-cart-page">
                    <div className="title-cart-page-left">Phí vận chuyển (Miễn phí vận chuyển)</div>
                    <div className="number-cart-page-right"><span className="price">0 đ</span></div>
                </div>
                <div className="border-product"></div>
                <div className="total-cart-page title-final-total">
                    <div className="title-cart-page-left">
                        Tổng Số Tiền (gồm VAT)    </div>
                    <div className="number-cart-page-right"><span className="price">23.450 đ</span></div>
                </div>
                <button type="button" title="Thanh toán" className="button btn-proceed-checkout btn-checkout">
                    <span><span>Thanh toán</span></span></button>
                <div className="retail-note"><a href="https://www.fahasa.com/chinh-sach-khach-si/" target="_blank">(Giảm giá trên web chỉ áp dụng cho bán lẻ)</a></div>
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

