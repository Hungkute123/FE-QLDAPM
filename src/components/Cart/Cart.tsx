import React from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/rootReducer';
import { useSelector } from 'react-redux';
Cart.propTypes = {};

function Cart() {
  const quantity = useSelector((state: RootState) => state.cartSlice.quantity);
  return (
    <div className="btn-cart" id="cart">
      <Link title="My cart" to="/cart"> <div className="btn-cart__label">
        <BsCart3 size={25} color={'#F7941E'} />
        <span>Giỏ hàng</span>
      </div></Link>
     
      <span className="notify notify-right">{quantity}</span>
    </div>
  );
}

export default Cart;
