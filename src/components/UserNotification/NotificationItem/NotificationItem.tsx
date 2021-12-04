import React, { useState } from 'react';
import './NotificationItem.scss';

export const NotificationItem = () => {
  const className = 'notification-item';
  const [unseen, setUnseen] = useState(true);

  return (
    <div>
      <ul className={`${unseen ? 'unseen' : ''} ${className}__list`}>
        <li className={`${className}__item`}>
          <div className={`${className}__header`}>
            <div className={`${className}__header--title`}>ĐƠN HÀNG CỦA QUÝ KHÁCH ĐÃ BỊ HỦY</div>
            <div className={`${className}__header--date`}>12:58 07/11/2021</div>
          </div>
          <div className={`${className}__icon`}>
            <img
              src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/customer/notification_order.png"
              alt=""
            />
          </div>
          <div className={`${className}__text`}>
            Đơn hàng 102295665 của quý khách đã bị hủy. Hẹn gặp lại quý khách trong các đơn hàng
            tiếp theo trên Fahasa.com nhé
          </div>
          <div className={`${className}__action`}></div>
          <div className={`${className}__result`}></div>
        </li>
      </ul>
    </div>
  );
};
