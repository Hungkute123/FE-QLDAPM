import React, { useState } from 'react';
import './SellerSideBar.scss';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Sidebar {
  current: number;
}

export const SellerSideBar = ({ current }: Sidebar) => {
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
    { href: '/seller/product-management', title: 'Quản lý sản phẩm' },
    { href: '/seller/order-management', title: 'Quản lý đơn hàng' },
    { href: '/seller/add-new-product', title: 'Thêm sản phẩm' },
    
    
  ]);

  return (
    <div>
      <div className="seller-sidebar">
        <div className="seller-sidebar__title">
          <strong>
            <span>Kênh người bán</span>
          </strong>
        </div>
        <div className="seller-sidebar__content">
          <ul>
            {itemNav.map((item, move) => {
              return (
                <li key={move} className={current == move ? 'seller-sidebar__current' : ''}>
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
