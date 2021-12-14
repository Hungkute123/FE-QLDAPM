import React from "react";
import './Cart.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { RootState } from '../../redux/rootReducer';
import { Row, Col, Container } from 'react-bootstrap';
import { BsTrashFill } from "react-icons/bs";
export const Cart = () => {
    const cart = useSelector((state: RootState) => state.cartSlice);
    console.log("cart", cart.products);
    return (
        <>
            <Container>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12} className="cart-page">
                    <div id="content">
                        <div className="cart">
                            <div className="page-title title-buttons">
                                <div className="page-title-container">
                                    <h1 style={{display: "inline-block", width: "auto", color:"red"}}>Giỏ hàng</h1>
                                </div>
                            </div>
                            <form action="" method="post" id="form-cart">
                                <input type="hidden" name="form-key"/>
                                <Row className="cart-ui-content">
                                    <Col sm={8} xs={12}>
                                        <div>
                                            <div className="product-cart-left">
                                                {cart.products.map(product =>(
                                                    <>
                                                    <div className="item-product-cart">
                                                    <div className="img-product-cart">
                                                        <a href="" className="product-image">
                                                            <img src={`${cart.path}${product.Image}`} alt="" 
                                                            style={{width:120, height:120}}/>
                                                        </a>
                                                    </div>
                                                    <div className="group-product-info">
                                                        <div className="info-product-cart">
                                                            <div>
                                                                <h2 className="product-name-full-text">
                                                                    <a href="">{product.NameProduct}</a>
                                                                </h2>
                                                            </div>
                                                            <div className="price-original">
                                                                <div className="cart-price">
                                                                    <div className="cart-fhsItem-price">
                                                                        <div>
                                                                            <span className="price">{product.Price}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                        <div className="number-product-cart">
                                                            <div className="product-view-quantity-box">
                                                                <div className="product-view-quantity-box-block">
                                                                    <a href="" className="btn-subtract-qty">
                                                                        <img src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/ico_minus2x.png" alt=""
                                                                        style={{width: 12,height: 2, verticalAlign: "middle" }} />
                                                                    </a>
                                                                    <input type="text" className="qty-carts" value="1"/>
                                                                    <a href="" className="btn-add-qty">
                                                                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png" alt=""
                                                                        style={{width: 12,height: 12, verticalAlign: "middle" }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="cart-price-total">
                                                                <span className="cart-price">
                                                                    <span className="price">
                                                                    {product.Price}
                                                                    </span>
                                                                </span>
                                                                </div>    
                                                        </div>                                             
                                                    </div>
                                                    <div className="div-of-btn-remove-cart">
                                                        <BsTrashFill></BsTrashFill>
                                                    </div>
                                                </div>
                                                <div className="border-product"></div>
                                                </>
                                                ))}
                                                
                                            </div>
                                           
                                        </div>
                                    </Col>
                                    <Col sm={4} className="hidden-max-width-992">
                                        <div className="total-cart-right">
                                            <div className="effect-scroll-cart-right">
                                                <div className="block-total-cart">
                                                    <div className="block-totals-cart-page">
                                                        <div className="total-cart-page">
                                                            <div className="title-cart-page-left">Thành tiền</div>
                                                        
                                                        <div className="number-cart-page-right">
                                                            <span className="price">{cart.total}</span>
                                                        </div>
                                                    </div>
                                                    <div className="total-cart-page">
                                                            <div className="title-cart-page-left">Phí vận chuyển(Miễn phí)</div>
                                                        
                                                        <div className="number-cart-page-right">
                                                            <span className="price">0 đ</span>
                                                        </div>
                                                    </div>
                                                    <div className="border-product"></div>
                                                    </div>
                                                    <div className="checkout-type-button-cart" style={{alignContent: "center"}}>
                                                        <div className="method-button-cart">
                                                            <Button title="Thanh toán" className="button btn-proceed-checkout btn-checkout">
                                                                <span>
                                                                    <span>Thanh toán</span>
                                                                </span>
                                                            </Button>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
            {/* <div className="cart">
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
            </div> */}
        </>
    )
}

