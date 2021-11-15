import React, { useState } from 'react';
import './UserDashboard.scss';

import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import InfoRow from './InfoRow/InfoRow';
import { UserMessage } from '../UserMessage/UserMessage';

export const UserDashboard = () => {
  const [dashBoard, setDashBoard] = useState([
    {
      lg: 4,
      md: 4,
      sm: 4,
      xs: 4,
      title: 'F-point',
      value: '0đ',
      link: true,
      url: './account',
    },
    {
      lg: 4,
      md: 4,
      sm: 4,
      xs: 4,
      title: 'Freeship',
      value: '0 lần',
      link: true,
      url: './account/freeship',
    },
    {
      lg: 4,
      md: 4,
      sm: 4,
      xs: 4,
      title: 'Bọc sách',
      value: 'sắp diễn ra',
      link: false,
    },
    {
      lg: 6,
      md: 6,
      sm: 6,
      xs: 6,
      title: 'Số đơn hàng thành công năm 2021',
      value: '0',
      link: false,
    },
    {
      lg: 6,
      md: 6,
      sm: 6,
      xs: 6,
      title: 'Số tiền đã thanh toán năm 2021',
      value: '0đ',
      link: false,
    },
  ]);
  
  return (
    <div>
      <UserMessage></UserMessage>

      <div className="dashboard">
        <div className="dashboard__account">
          <div className="dashboard__content">
            <div className="dashboard__title">
              <h1>Bảng điều khiển của khách hàng</h1>
            </div>
            <div className="dashboard__body">
              <div className="dashboard__icon">
                <img src="./account/icon-thanthiet.png" alt="icon-thanhthiet" />
              </div>
              <div className="dashboard__accumulation">
                <p className="dashboard__accumulation--title">Điểm tích luỹ 2021: 0 Fpoint</p>
              </div>
              <div className="dashboard__fpoint">
                <img src="./account/fpoint.png" alt="" />
              </div>
              <div className="dashboard__info">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <p>
                    Cấp độ thành viên:
                    <span className="dashboard__info--member">Thân thiết</span>
                  </p>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <p className="pt-10 dashboard__info--acc">Thông tin tài khoản </p>
                </Col>
                {dashBoard.map((item) => {
                  return (
                    <InfoRow
                      lg={item.lg}
                      md={item.md}
                      sm={item.sm}
                      xs={item.xs}
                      title={item.title}
                      value={item.value}
                      link={item.link}
                      url={item.url}
                    ></InfoRow>
                  );
                })}                
              </div>
              <div className="dashboard__address">
                <h3>
                  <Link to="/account/address">Sổ địa chỉ</Link>
                </h3>
                <div className="dashboard__address--content">
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <Row>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <h4>Địa chỉ thanh toán mặc định</h4>
                        <span>Bạn chưa khai báo địa chỉ thanh toán mặc định.</span>
                        <Link to="/account/address/edit">Sửa địa chỉ</Link>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <h4>Địa chỉ thanh toán mặc định</h4>
                        <span>Bạn chưa khai báo địa chỉ nhận hàng mặc định.</span>
                        <Link to="/account/address/edit">Sửa địa chỉ</Link>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
