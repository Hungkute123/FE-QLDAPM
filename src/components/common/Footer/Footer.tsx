import React from 'react';
import './Footer.scss';

import { Container, Row, Col, Form } from 'react-bootstrap';

import LinkFollow from '../../LinkFollow/LinkFollow';

export const Footer = () => {
  return (
    <div className="footer">
      <LinkFollow></LinkFollow>
      <div className="footer__body">
        <Row>
          <p>
            Giấy chứng nhận Đăng ký Kinh doanh số **0304132047** do Sở Kế hoạch và Đầu tư Thành phố
            Hồ Chí Minh cấp ngày 28/11/2012.
          </p>
        </Row>
      </div>
    </div>
  );
};
