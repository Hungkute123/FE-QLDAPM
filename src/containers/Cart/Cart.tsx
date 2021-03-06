import React, { useState } from "react";
import './Cart.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { RootState } from '../../redux/rootReducer';
import { Row, Col, Container } from 'react-bootstrap';
import { addProduct, removeFromCart, decreaseQuantity, increaseQuantity } from '../../redux';
import { useHistory } from 'react-router-dom';
import { BsTrashFill } from "react-icons/bs";
import { transformPriceFormat } from '../../helpers';
import { BsBoxArrowInRight, BsShop } from 'react-icons/bs';
import { LoginModal } from '../../components/LoginModal/LoginModal';
export const Cart = () => {
    const cart = useSelector((state: RootState) => state.cartSlice);
    const user = useSelector((state: RootState) => state.userSlice);
    const history = useHistory();
    console.log("loged in", user.isAccount);

    console.log("cart", cart.products);
    const dispatch = useDispatch();
    const handleCheckoutBtnClicked = () => {
        history.push(`/onestepcheckout/index`);
    }
    const handleRemove = (product: any) => {
        dispatch(removeFromCart(product));
    }
    const handleDecrease = (product: any) => {
        dispatch(decreaseQuantity(product));
    }
    const handleIncrease = (product: any) => {
        dispatch(increaseQuantity(product));
    }
    const [isOpen, setIsOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const handleOnEnter = () => {
        setShowOptions(true);
    };

    const handleOnLeave = () => {
        setShowOptions(false);
    };
    return (
        <div className="cart-page">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className="cart-page">
                        <div id="content">
                            <div className="cart">
                                <div className="page-title title-buttons">
                                    <div className="page-title-container">
                                        <h1 style={{ display: "inline-block", width: "auto", color: "red" }}>Gi??? h??ng</h1>
                                    </div>
                                </div>
                                <form action="" method="post" id="form-cart">
                                    <input type="hidden" name="form-key" />
                                    <Row className="cart-ui-content">
                                        <Col sm={8} xs={12}>
                                            <div>
                                                <div className="product-cart-left">
                                                    {cart.products.map(product => (
                                                        <>
                                                            <div className="item-product-cart">
                                                                <div className="img-product-cart">
                                                                    <a href="" className="product-image">
                                                                        <img src={`${cart.path}${product.image}`} alt=""
                                                                            style={{ width: 120, height: 120 }} />
                                                                    </a>
                                                                </div>
                                                                <div className="group-product-info">
                                                                    <div className="info-product-cart">
                                                                        <div>
                                                                            <h2 className="product-name-full-text">
                                                                                <a href="">{product.name}</a>
                                                                            </h2>
                                                                        </div>
                                                                        <div className="price-original">
                                                                            <div className="cart-price">
                                                                                <div className="cart-fhsItem-price">
                                                                                    <div>
                                                                                        <span className="price">{transformPriceFormat(product.price)}??</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="number-product-cart">
                                                                        <div className="product-view-quantity-box">
                                                                            <div className="product-view-quantity-box-block">
                                                                                <a href="" className="btn-subtract-qty" onClick={() => handleDecrease(product)}>
                                                                                    <img src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/ico_minus2x.png" alt=""
                                                                                        style={{ width: 12, height: 2, verticalAlign: "middle" }} />
                                                                                </a>
                                                                                <input type="text" className="qty-carts" value={product.quantity} />
                                                                                <a href="" className="btn-add-qty" onClick={() => handleIncrease(product)}>
                                                                                    <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png" alt=""
                                                                                        style={{ width: 12, height: 12, verticalAlign: "middle" }} />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cart-price-total">
                                                                            <span className="cart-price">
                                                                                <span className="price">
                                                                                    {transformPriceFormat(product.price * product.quantity)}??
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-of-btn-remove-cart" onClick={() => { handleRemove(product) }}>
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
                                                                <div className="title-cart-page-left">Th??nh ti???n</div>

                                                                <div className="number-cart-page-right">
                                                                    <span className="price">{transformPriceFormat(cart.total)}?? </span>
                                                                </div>
                                                            </div>
                                                            <div className="total-cart-page">
                                                                <div className="title-cart-page-left">Ph?? v???n chuy???n</div>

                                                                <div className="number-cart-page-right">
                                                                    <span className="price">30,000 ??</span>
                                                                </div>
                                                            </div>
                                                            <div className="border-product"></div>
                                                        </div>
                                                        <div className="checkout-type-button-cart" style={{ alignContent: "center" }}>
                                                            <div className="method-button-cart">
                                                                {user.isAccount ?
                                                                    <Button title="Thanh to??n" className="button btn-proceed-checkout btn-checkout" onClick={() => { handleCheckoutBtnClicked() }}>
                                                                        <span>
                                                                            <span>Thanh to??n</span>
                                                                        </span>
                                                                    </Button>
                                                                    :
                                                                    <Button title="Thanh to??n" className="button btn-proceed-checkout btn-checkout" onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave} onClick={() => setIsOpen(true)}>
                                                                        <span>
                                                                            <span>Thanh to??n</span>
                                                                        </span>
                                                                        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
                                                                    </Button>}
                                                                {user.isAccount ? '' : <><h1 className="notLoggedIn">B???n ch??a ????ng nh???p, vui l??ng ????ng nh???p ????? thanh to??n</h1></>}
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
        </div>
    )
}