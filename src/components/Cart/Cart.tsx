import React from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';

Cart.propTypes = {};

function Cart() {
  return (
    <div className="btn-cart" id="cart">
      <a title="My cart" href="/">
        Cart
      </a>
      <span className="notify notify-right">7</span>
      <div className="cart-des">GIỎ HÀNG</div>
      <div className="cart-block">
        <div className="total-cart">
          <div className="cart-img">
            <img src="./product/atlat.jpg" alt="Atlat Địa lí" />
          </div>
          <div className="cart-info">
            <p className="name-product">Atlat Địa Lý Việt Nam - 2021</p>
            <p className="price-product">1 x 30.000đ</p>
          </div>
          <div className="cart-btn-edit">
            <a title="Edit" href="/">
              Edit
            </a>
          </div>
        </div>

        <div className="cart-all">Thành tiền: 30.000đ</div>
      </div>
    </div>
  );
}

export default Cart;
