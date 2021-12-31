import React from 'react';
import './OrderDetailContact.scss';

interface IOrderDetailContact {
  IDOrder: number;
  Status: string;
}

export const OrderDetailContact = ({ IDOrder, Status }: IOrderDetailContact) => {
  const className = 'order-detail-contact';

  return (
    <div className={`${className}`}>
      <div className={`${className}__title`}>Lịch sử liên lạc</div>
      <div className={`${className}__view-contact`}>
        <div className={`${className}__border`}></div>
        <p>
          Đơn hàng {IDOrder} của quý khách {Status}. Hẹn gặp lại quý khách trong các đơn hàng
          tiếp theo trên Fahasa.com nhé!
        </p>
        <div className={`${className}__date-contact`}>2021-10-24 19:24:13</div>
      </div>
    </div>
  );
};
