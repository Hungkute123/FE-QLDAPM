import React from 'react';
import './DiscountCard.scss';
import { Input } from '../../common';
import { Button } from 'react-bootstrap';

export const DiscountCard = () => {
  return (
    <div className="discount-card">
      <span className="discount-card__left">Mã KM/Quà tặng</span>
      <div className="discount-card__right">
        <div className="discount-card__input">
          <Input
            placeholder="Nhập mã khuyến mãi/Quà tặng"
            buttonAction={<Button variant="primary">Áp dụng</Button>}
          />
          <span>Chọn mã khuyến mãi</span>
        </div>
        <span className="discount-card__span">Có thể áp dụng đồng thời nhiều mã</span>
      </div>
    </div>
  );
};
