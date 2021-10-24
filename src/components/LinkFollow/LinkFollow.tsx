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
        <Col className="follow__content">
          <div className="follow__title">
            <BsBriefcase size={20} color={'#fff'} />
            <span>Đăng ký nhận bản tin</span>
          </div>
          <Form className="follow__form">
            <Form.Group>
              <input
                type="text"
                placeholder="Nhập địa chỉ email của bản"
                className="follow__input"
              ></input>
              <Button variant="warning" className="follow__btn">
                Đăng Ký
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default LinkFollow;
