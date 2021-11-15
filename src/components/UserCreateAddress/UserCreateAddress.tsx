import React, { useState } from 'react';
import './UserCreateAddress.scss';

import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserMessage } from '../UserMessage/UserMessage';

export const UserCreateAddress = () => {
  const [address, setAddress] = useState([
    {
      title: 'Quốc gia*',
      listCountry: [''],
    },
    {
      title: 'Tỉnh/Thành phố*',
      listCity: [''],
    },
    {
      title: 'Quận/Huyện*',
      listDistrict: [''],
    },
    {
      title: 'Xã/Phường*',
      listWard: [''],
    },
  ]);

  return (
    <>
      <UserMessage></UserMessage>
      <div className="create-address">
        <div className="create-address__content">
          <div className="create-address__title">
            <h1>Thêm địa chỉ mới</h1>
          </div>
          <Form>
            <Row>
              <Col lg={6} md={6} xs={6}>
                <div className="create-address__left">
                  <h2>Thông tin liên hệ</h2>
                  <Form.Control type="text" placeholder="Tên*" />
                  <Form.Control type="text" placeholder="Họ*" />
                  <Form.Control type="text" placeholder="Ex: 0886...." />
                </div>
              </Col>
              <Col lg={6} md={6} xs={6}>
                <div className="create-address__right">
                  <h2>Địa chỉ</h2>
                  <Form.Control type="text" placeholder="Địa chỉ" />
                  {address.map((item, moves) => {
                    return (
                      <Form.Group as={Row} className="mb-3 mt-10" controlId="formHorizontalEmail">
                        <Form.Label column sm={4} style={{ fontStyle: 'italic' }}>
                          {item.title}
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control as="select" placeholder="Email" size="sm"></Form.Control>
                        </Col>
                      </Form.Group>
                    );
                  })}
                  <Form.Check
                    type="checkbox"
                    id={`default-checkbox`}
                    label="Sử dụng như Địa chỉ thanh toán mặc định của tôi"
                    style={{ fontStyle: 'italic', paddingBottom: '20px', paddingTop: '10px' }}
                  />
                  <Form.Check
                    type="checkbox"
                    id={`default-checkbox`}
                    label="Sử dụng như Địa chỉ giao hàng mặc định của tôi"
                    style={{ fontStyle: 'italic' }}
                  />
                </div>
              </Col>
            </Row>
            <div className="create-address__button-set">
              <p className="create-address__button-set--required">(*) Bắt buộc</p>
              <p className="create-address__button-set--back">
                <Link to="/account">
                  <small>« </small>Quay lại
                </Link>
              </p>
              <div className="create-address__button-set--btn">
                <Button variant="danger">LƯU ĐỊA CHỈ</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
