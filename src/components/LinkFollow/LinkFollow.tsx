import React from 'react';
import './LinkFollow.scss';
import PropTypes from 'prop-types';

import { Row, Col, Form, Button } from 'react-bootstrap';
import { BsBriefcase } from 'react-icons/bs';

LinkFollow.propTypes = {};

function LinkFollow() {
  return (
    <div className="follow">
      <Row>
        <Col sm={8} md={12} className="follow__content">
          <div className="follow__title">
            <BsBriefcase size={20} color={'#fff'} />
            <span>Đăng ký nhận bản tin</span>
          </div>
          <Form className="follow__form">
            <Form.Control type="text" placeholder="Nhập địa chỉ email của bản" className="follow__input"></Form.Control>
            <Button variant="warning" className="follow__btn">Đăng Ký</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default LinkFollow;
