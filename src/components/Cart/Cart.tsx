import React from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

Cart.propTypes = {};

function Cart() {
  return (
    <div className="btn-cart" id="cart">
      <Link title="My cart" to="/cart"> <div className="btn-cart__label">
        <BsCart3 size={25} color={'#F7941E'} />
        <span>Giỏ hàng</span>
      </div></Link>
     
      <span className="notify notify-right">1</span>
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
