import React, { useEffect, useState } from 'react';
import './OneStepCheckout.scss';
import { OneStepBox, FormAddress, FormMethod, DiscountCard } from '../../components';
import { Button, Form } from 'react-bootstrap';
import { BiArrowBack } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../redux';
import {transformPriceFormat} from '../../helpers';
import { doAddNewOrder, RootState, getAllUserAddress } from '../../redux';
import { clearCart, removeFromCart } from '../../redux';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import {
  getInformationVAT,
  doGetUserAddress,
} from '../../redux/slice/appSlice/userSlice';
import { propTypes } from 'react-bootstrap/esm/Image';
export const OneStepCheckout = () => {
  const cart = useSelector((state: RootState) => state.cartSlice);
  const {account} = useSelector((state: RootState) => state.userSlice);
  const dispatch = useAppDispatch();
  const dp = useDispatch();
  const moment = require('moment');
  
  const order = useSelector((state: RootState) => state.orderSlice);
  const history = useHistory();
  const [childData, setChildData] = useState("");
  const handleSubmit =async (e: any) => {
    e.preventDefault();
    cart.products.map(async product =>  {
      let order = {
        id_user: String(account.IDUser),
        id_product: String(product.id),
        order_date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        quantity: product.quantity,
        status: 'Chờ xác nhận',
        price: product.quantity * product.price + 30000,
        address: childData,
      };
      const isSuccess = (await dispatch(doAddNewOrder(order))).payload;
      if (isSuccess.data === true) {
        Swal.fire({
          icon: 'success',
          title: 'Thanh toán thành công',
        });
        history.push({
          pathname: `/`,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Thanh toán thất bại',
        });
      }
      dispatch(removeFromCart(product));
    })
  }
  
  return (
    <div className='one-step-checkout-page'>
      <Form onSubmit={handleSubmit}>
         <div className="one-step-checkout">
      <div className="one-step-checkout__list-box">
        <OneStepBox title="ĐỊA CHỈ GIAO HÀNG">
          <FormAddress passChildData={setChildData} />
        </OneStepBox>
        <OneStepBox title="PHƯƠNG THỨC VẬN CHUYỂN">
          <div className="fhs_checkout_block_content">
            <div className="fhs_checkout_block_radio_list">
              <div id='fhs_checkout_shippingmethod_title' className="fhs_checkout_block_radio_list_title"></div>
              <div>
              <ul id="fhs_checkout_shippingmethod" className="fhs_checkout_block_radio_list_items">
                <li className="fhs_checkout_block_radio_list_item fhs_radio_top">
                  <div>
                    <label className="fhs-radio-big">
                      <div style={{fontWeight: 600 }}>Giao hàng tiêu chuẩn: 30,000 đ</div>
                      <input type="radio" id="fhs_checkout_shippingmethod_vietnamshippingnormal_vietnamshippingnormal" name="fhs_checkout_shippingmethod_option" className="fhs_checkout_shippingmethod_option" value="vietnamshippingnormal_vietnamshippingnormal" checked/>
                        <span className="radiomark-big"></span>
                        </label>
                        </div>
                        </li>
                        </ul>
              </div>
            </div>
          </div>
        </OneStepBox>
        <OneStepBox title="PHƯƠNG THỨC THANH TOÁN">
          <FormMethod />
        </OneStepBox>
        <OneStepBox title="MÃ KHUYẾN MÃI/MÃ QUÀ TẶNG">
          <DiscountCard />
        </OneStepBox>
        <OneStepBox title="KIỂM TRA LẠI ĐƠN HÀNG">
        {cart.products.map(product =>(
          <div className="one-step-checkout__list-product">
            <div className="one-step-checkout__item">
              <img
                src={`${cart.path}${product.image}`}
                alt=""
              />
              <span className="one-step-checkout__item__name">{product.name}</span>
              <div className="one-step-checkout__item__price">
                <span>{transformPriceFormat(product.price)}đ</span>
  
              </div>
              <span>{product.quantity}</span>
              <span className="one-step-checkout__item__final">{transformPriceFormat(product.price * product.quantity)}đ</span>
            </div>
          </div>
          ))}
        </OneStepBox>
      </div>

      <div className="one-step-checkout__footer">
        <div className="one-step-checkout__container">
          <div className="one-step-checkout__footer__top">
            <div className="one-step-checkout__footer__block">
              <span> Thành tiền</span>
              <span> Phí vận chuyển</span>
              <span style={{ fontWeight: 'bold' }}> Tổng Số Tiền (gồm VAT)</span>
            </div>
            <div className="one-step-checkout__footer__block">
              <span>{transformPriceFormat(cart.total)}đ</span>
              <span>30,000 đ</span>
              <span style={{ fontWeight: 'bold', color: '#F39801', fontSize: 20 }}>{transformPriceFormat(cart.total + 30000)}đ</span>
            </div>
          </div>
          <div className="one-step-checkout__footer__bottom" >
            <div  onClick={() => {history.push(`/cart`)}} style={{cursor: "pointer"}}>
              <BiArrowBack size={30}/>
              <span>Quay về giỏ hàng</span>
            </div>
            <Button className="one-step-checkout__button" variant="danger" type='submit'>
              Xác nhận thanh toán
            </Button>
          </div>
        </div>
      </div>
    </div>
      </Form>
    </div>
   
  );
};
