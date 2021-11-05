import React from 'react';
import './OneStepCheckout.scss';
import { OneStepBox, FormAddress, FormMethod, DiscountCard } from '../../components';
import { Button } from 'react-bootstrap';
import { BiArrowBack } from 'react-icons/bi';

export const OneStepCheckout = () => {
  return (
    <div className="one-step-checkout">
      <div className="one-step-checkout__list-box">
        <OneStepBox title="ĐỊA CHỈ GIAO HÀNG">
          <FormAddress />
        </OneStepBox>
        <OneStepBox title="PHƯƠNG THỨC VẬN CHUYỂN">
          <span>Quý khách vui lòng điền tên và địa chỉ giao nhận trước.</span>
        </OneStepBox>
        <OneStepBox title="PHƯƠNG THỨC THANH TOÁN">
          <FormMethod />
        </OneStepBox>
        <OneStepBox title="MÃ KHUYẾN MÃI/MÃ QUÀ TẶNG">
          <DiscountCard />
        </OneStepBox>
        <OneStepBox title="KIỂM TRA LẠI ĐƠN HÀNG">
          <div className="one-step-checkout__list-product">
            <div className="one-step-checkout__item">
              <img
                src="https://cdn0.fahasa.com/media/catalog/product/cache/1/thumbnail/145x145/9df78eab33525d08d6e5fb8d27136e95/i/m/image_189059.jpg"
                alt=""
              />
              <span className="one-step-checkout__item__name">Săn Kẻ Giết Người</span>
              <div className="one-step-checkout__item__price">
                <span>76.700 đ</span>
                <span>118.000 đ</span>
              </div>
              <span>1</span>
              <span className="one-step-checkout__item__final">76.700 đ</span>
            </div>
          </div>
        </OneStepBox>
      </div>

      <div className="one-step-checkout__footer">
        <div className="one-step-checkout__container">
          <div className="one-step-checkout__footer__top">
            <div className="one-step-checkout__footer__block">
              <span> Thành tiền</span>
              <span> Phí vận chuyển (Miễn phí vận chuyển)</span>
              <span style={{ fontWeight: 'bold' }}> Tổng Số Tiền (gồm VAT)</span>
            </div>
            <div className="one-step-checkout__footer__block">
              <span>64,900 đ</span>
              <span>0 đ</span>
              <span style={{ fontWeight: 'bold', color: '#F39801', fontSize: 20 }}>64,900 đ</span>
            </div>
          </div>
          <div className="one-step-checkout__footer__bottom">
            <div>
              <BiArrowBack size={30} />
              <span>Quay về giỏ hàng</span>
            </div>
            <Button className="one-step-checkout__button" variant="danger">
              Xác nhận thanh toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
