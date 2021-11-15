import React from 'react';
import './UserAddress.scss';

import { UserMessage } from '../UserMessage/UserMessage';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const UserAddress = () => {
  return (
    <div>
      <UserMessage></UserMessage>

      <div className="address">
        <div className="address__content">
          <div className="address__header">
            <h1>Sổ địa chỉ</h1>
            <div className="address__header--btn">
              <Button variant="danger">
                <Link to="/account/address/edit">THÊM ĐỊA CHỈ MỚI</Link>
              </Button>
            </div>
          </div>
          <div className="address__body">
            <Row>
              <Col lg={6} md={6} xs={6}>
                <h2>Địa chỉ mặc định</h2>
                <ol>
                  <li className="address__item">
                    <h3>Địa chỉ giao hàng mặc định</h3>
                    <address>
                      Nguyễn Hà Anh Kiểm <br />
                      KTX khu B <br />
                      Phường Đông Hòa, Huyện Dĩ An, Bình Dương, Việt Nam <br />
                      Tel: 0886703293
                    </address>
                    <p>
                      <Link to="/account/address/edit">Thay đổi Địa chỉ thanh toán</Link>
                    </p>
                  </li>
                </ol>
              </Col>
              <Col lg={6} md={6} xs={6}>
                <h2>Địa chỉ khác</h2>
                <ol>
                  <li className="address__item">
                    <p>Bạn không có địa chỉ khác trong Sổ địa chỉ.</p>
                  </li>
                </ol>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
