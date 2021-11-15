import React, { useState } from 'react';
import './UserSidebar.scss';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Sidebar {
  current: number;
}

export const UserSidebar = ({ current }: Sidebar) => {
  const [social, setSocial] = useState([
    { href: 'https://www.facebook.com/fahasa/', title: 'Facebook', src: '/social/fb.png' },
    {
      href: 'https://www.instagram.com/fahasa_official/',
      title: 'Instagram',
      src: '/social/in.png',
    },
    {
      href: 'https://www.youtube.com/channel/UCUZcVOLSxK1q6RfgzQ9-HYQ',
      title: 'Youtube',
      src: '/social/youtube.png',
    },
    {
      href: 'https://www.pinterest.com/fahasaVN/',
      title: 'Printerest',
      src: '/social/pinterest.png',
    },
  ]);

  const [itemNav, setItemNav] = useState([
    { href: '/account', title: 'Bảng điều khiển tài khoản' },
    { href: '/account/edit', title: 'Thông tin tài khoản' },
    { href: '/account/address', title: 'Sổ địa chỉ' },
    { href: '/account/order', title: 'Đơn hàng của tôi' },
    { href: '/account', title: 'Ví voucher' },
    { href: '/wishlist', title: 'Yêu thích' },
    { href: '/account', title: 'Sách theo bộ' },
    { href: '/account', title: 'Tài Khoản F-point / Freeship' },
    { href: '/account', title: 'Nhận xét của tôi' },
    { href: '/account', title: 'Thông Báo' },
    { href: '/account', title: 'Đăng ký nhận tin điện tử' },
  ]);

  return (
    <div>
      <div className="nav-account">
        <div className="nav-account__title">
          <strong>
            <span>Tài Khoản</span>
          </strong>
        </div>
        <div className="nav-account__content">
          <ul>
            {itemNav.map((item, move) => {
              return (
                <li key={move} className={current == move ? 'current' : ''}>
                  <Link to={item.href}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="nav-online">
        <div className="nav-online__content">
          <div className="nav-online__left">
            <Col sm={12}>
              {social.map((item) => {
                return (
                  <Link target="_blank" to={item.href} title={item.title}>
                    <img alt="Facebook" src={item.src} style={{ width: '30px', height: 'auto' }} />
                  </Link>
                );
              })}
            </Col>
          </div>
          <div className="nav-online__right">
            <Col sm={5}>
              <span>#fahasaOnline</span>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};
