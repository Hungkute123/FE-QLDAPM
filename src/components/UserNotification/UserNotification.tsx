import React, { useState } from 'react';
import './UserNotification.scss';

import { Link } from 'react-router-dom';
import { NotificationItem } from './NotificationItem/NotificationItem';

export const UserNotification = () => {
  const className = 'user-notification';
  const [activeMenu, setActiveMenu] = useState(0);
  const listMenu = [
    {
      title: 'Tất Cả',
      unseen: true,
    },
    {
      title: 'Đơn Hàng',
      unseen: true,
    },
    {
      title: 'Sự Kiện',
      unseen: false,
    },
    {
      title: 'Mã Giảm Giá',
      unseen: false,
    },
    {
      title: 'Xác Nhận',
      unseen: false,
    },
  ];
  return (
    <div className={`${className}`}>
      <div className={`${className}__content`}>
        <ul className={`${className}__menu`}>
          {listMenu.map((item, index) => {
            return (
              <li className={`${className}__tab`} key={index}>
                <Link
                  to="#"
                  className={`${index == activeMenu ? 'active' : ''} ${className}__link`}
                  onClick={() => setActiveMenu(index)}
                >
                  <div className={`${item.unseen ? 'opacity' : ''} ${className}__unseen`}></div>
                  <div className={`${className}__label`}>{item.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={`${className}__underline`}></div>
        <div className={`${className}__body`}>
          <NotificationItem></NotificationItem>
        </div>
      </div>
    </div>
  );
};
