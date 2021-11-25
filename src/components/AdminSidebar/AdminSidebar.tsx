import React, { useState } from 'react';
import './AdminSidebar.scss';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Sidebar {
  current: number;
}

export const AdminSidebar = ({ current }: Sidebar) => {
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
    { href: '/admin/manage-user', title: 'Quản lý tài khoản người dùng' },
    { href: '/admin/manage-categories', title: 'Quản lý gian hàng' },
    { href: '/admin/manage-report', title: 'Danh sách báo cáo' },
    { href: '/admin/sales-report', title: 'Thống kê hệ thống' },
  ]);

  return (
    <div>
      <div className="nav-account">
        <div className="nav-account__title">
          <strong>
            <span>Bảng điều khiển</span>
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
