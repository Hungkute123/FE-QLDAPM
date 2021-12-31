import React from 'react';
import { Link } from 'react-router-dom';
import './OrderDetailInfo.scss';

interface IOrderDetailInfo {
  IDOrder: number;
  OrderDate: string;
  Price: number;
}

export const OrderDetailInfo = ({ IDOrder, OrderDate, Price }: IOrderDetailInfo) => {
  const className = 'order-detail-info';
  return (
    <div className={`${className}`}>
      <div className={`${className}__title`}>Chi tiết đơn hàng</div>
      <div className={`${className}__status`}>Đơn hàng bị hủy</div>
      <div className={`${className}__line`}>
        <span>Mã đơn hàng: </span>
        <span className={`${className}__bold`}>{IDOrder}</span>
      </div>
      <div className={`${className}__line`}>
        <span>Ngày mua: </span>
        <span className={`${className}__bold`}>{OrderDate}</span>
      </div>
      <div className={`${className}__line`}>
        <span>Tổng Tiền: </span>
        <span className={`${className}__bold`}>{Price} đ</span>
      </div>
      <div className={`${className}__line`}>
        <span>Thông tin xuất hóa đơn GTGT: </span>
        <span className={`${className}__dont`}>(Không có)</span>
      </div>
      <div className={`${className}__line`}>
        <span>Ghi chú: </span>
        <span className={`${className}__dont`}>(Không có)</span>
      </div>

      <div className={`${className}__btn`}>
        <div className={`${className}__btn-content`}>
          <Link to="/">Đặt hàng lại</Link>
        </div>
      </div>
    </div>
  );
};
